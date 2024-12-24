const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
function checkprime(num){
    if(num<=1) 
        return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0)
            return false;
    }
    return true;

}
const prime = numbers.filter(num=>checkprime(num));
console.log(prime);

primeArray = prime.map(num);
let maxprime = Math.max(...primeArray);
console.log(maxprime);
let minprime = Math.min(...primeArray);
console.log(minprime);
let sumarray = primeArray.reduce((acc,curr)=>acc+curr,0);
console.log(sumarray);