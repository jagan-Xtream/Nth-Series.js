const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

var userInput;
inp.on('line', (data) => {
userInput=Number(data)
})
function term(n){
if(n>0){
    console.log(Math.pow(n,2))
    
}
else if(n<0){
    console.log('ERROR')
    

}
else {
console.log('0')
}
}
inp.on('close',() => 
{
  term(userInput)
})
