const readline=require('readline')
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout}
)

r1.question("Enter num1",(num1)=>{
    r1.question("Enter operator(+,-,/,*)",(operator)=>{
        r1.question("Enter num2",(num2)=>{
            num1=parseFloat(num1)
            num2=parseFloat(num2)
            let result
            switch (operator){
                case '+':
                    result=num1+num2 
                    break 
                case '-':
                    result=num1-num2 
                    break 
                case '*':
                    result=num1*num2 
                    break 
                case '/':
                    if (num2==0){
                        console.log('num1 cant be divisble by 0')
                        r1.close()
                        break
                    }
                    result=num1/num2 
                    break 
                default:
                    console.log('enter correct operator')
                    r1.close()
                    break
            }
            console.log(`Result:${result}`)
            r1.close()
        })
    })
})