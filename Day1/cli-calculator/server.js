
const readline=require('readline')
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question('Enter first num: ',(num1)=>{
    r1.question('Enter operator:(+,-,*,/)',(operator)=>{
        r1.question("Enter second num: ",(num2)=>{
            num1=parseFloat(num1)
            num2=parseFloat(num2)
            let result
            switch(operator){
                case "+":
                    result=num1+num2 
                    break
                case "-":
                    result=num1-num2 
                    break
                case "*":
                    result=num1*num2
                    break 
                case "/":
                    if (num2==0){
                        console.log("Error:Divison by zero is not allowed")
                        r1.close()
                        break
                    }
                    result=num1/num2
                    break 
                default:
                    console.log("invalid operator")
                    r1.close()
                    return
            }
            console.log(`Result:${result}`)
            r1.close()
        })
    })
})
