slowMath.add(1, 1)
.then((sum) => {
console.log(`Sum of 6 and 2 is ${sum}`);
return slowMath.multiply(sum, 2);
}).then((product) => {
    console.log(`multiply that by 2 to get ${product}`)
    return slowMath.divide(product,4);
}) .then((divide) => {
 console.log(`the divided result by 4 is ${divide}`)
return slowMath.subtract(divide, 3);
}).then((sum) => {
    console.log(`take the quotient, subtract 3 and that is ${sum}`);
    return slowMath.add(sum, 98);
 }).then ((sum) => {
console.log(`Take the sum and add 98 to it to get ${sum}`)
return slowMath.remainder(sum, 2);
 }).then((divide) => {
console.log(`The remainder is ${divide}`)
return slowMath.multiply(divide, 50);
//create in then, use in console
 }).then((product) => {
     console.log(`this equals ${product}`)
   return slowMath.remainder(product, 40)
 }).then((remainder)=>{
     console.log(`remainder is ${remainder}`);
        return slowMath.add(remainder, 32)
 }).then((damsum) => {
console.log(`uhh ${damsum}`)
 })
 .catch((error) => {
console.log('Self destruct in 3, 2')
console.log(error)

 })
