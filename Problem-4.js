function countMultiples(inputArray) {

     const numbers = inputArray
         .map(item => parseInt(item))
         .filter(num => !isNaN(num));
    
     const result = {};

     for (let divisor = 1; divisor <= 9; divisor++) {
         let count = 0;
         
         for (let num of numbers) {
             if (num % divisor === 0) {
                 count++;
             }
         }
         result[divisor] = count;
     }
     
     return result;
 }
 
 function testProblem4() {
     
     const testArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
     
     const result1 = countMultiples(testArray);
     
     console.log(`input: [${testArray.join(',')}]`);
     console.log("Output:");
     console.log(result1);
 }
 
 testProblem4();