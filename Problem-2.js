function odd(a) {
     const count = parseInt(a);
     
     const oddNumbers = [];
     
     for (let i = 1; i <= count; i++) {
         const oddNumber = 2 * i - 1;
         oddNumbers.push(oddNumber);
     }
     
     return oddNumbers;
 }
 
 function aodd() {

     const testCases = [1, 2, 3, 4, 5, 10];
     
     testCases.forEach(testCase => {
         const result = odd(testCase);
         console.log(` input a = ${testCase}, then output : ${result.join(', ')}`);
     });
 }
 
 aodd();
 