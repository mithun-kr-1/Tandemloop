function oddp(a) {
     const input = parseInt(a);
     
     let count;
     
     if (input % 2 === 1) {
         count = input;
     } else {
         count = input - 1;
     }
     
     const oddNumbers = [];
     for (let i = 1; i <= count; i++) {
         const oddNumber = 2 * i - 1;
         oddNumbers.push(oddNumber);
     }
     
     return oddNumbers;
 }
 
 function oddpp(a) {
     const input = parseInt(a);
     
     const targetCount = input % 2 === 0 ? input - 1 : input;
     
     const oddNumbers = [];
     let currentOdd = 1;
     
     for (let i = 0; i < targetCount; i++) {
         oddNumbers.push(currentOdd);
         currentOdd += 2;
     }
     
     return oddNumbers;
 }
 
 function odd() {
    
     const testCases = [1, 2, 3, 4, 5, 6, 7, 8, 10];
     
     testCases.forEach(testCase => {
         const result = oddp(testCase);
         console.log(` input a = ${testCase}, then output : ${result.join(', ')}`);
     });
 }
 
 odd();
 