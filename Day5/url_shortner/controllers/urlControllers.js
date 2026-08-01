const { resourceLimits } = require('node:worker_threads');
const Url = require('../models/url');
const { nanoid } = require('nanoid');

const shortHandler = async (req, res) => {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: 'url is required'
        });
    }

    const shortId = nanoid(8);

    await Url.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({ id: shortId });
};

const getHandler = async (req, res) => {
    const shortId = req.params.id;

    // console.log("Requested ID:", shortId);

    const entry = await Url.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        },
        {
            returnDocument: 'after'
        }
    );

    // console.log("Entry:", entry);
    if (!entry) {
        return res.status(404).json({
            error: 'Short URL not found'
        });
    }

    return res.redirect(entry.redirectUrl);
};

const getAnalytics=async(req,res)=>{
    const shortId=req.params.id
    const result=await Url.findOne({shortId})
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })
}
module.exports = {
    shortHandler,
    getHandler,
    getAnalytics
};