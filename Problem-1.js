class Calculator {
     calculate(a, b, operation) {
         const num1 = parseFloat(a);
         const num2 = parseFloat(b);

         if (isNaN(num1) || isNaN(num2)) {
             return "Error: Please enter valid numbers";
         }
         
         switch (operation.toLowerCase()) {
             case 'addition':
             case 'add':
             case '+':
                 return num1 + num2;
                 
             case 'subtraction':
             case 'subtract':
             case '-':
                 return num1 - num2;
                 
             case 'multiplication':
             case 'multiply':
             case '*':
                 return num1 * num2;
                 
             case 'division':
             case 'divide':
             case '/':
         }
     }
 }

 function testCalculator() {
     const calc = new Calculator();
     
     console.log("Addition: 10 + 5 =", calc.calculate(10, 5, "addition"));
     console.log("Subtraction: 10 - 5 =", calc.calculate(10, 5, "subtraction"));
     console.log("Multiplication: 10 * 5 =", calc.calculate(10, 5, "multiplication"));
     console.log("Division: 10 / 5 =", calc.calculate(10, 5, "division"));
     console.log("Decimal: 10.5 + 2.3 =", calc.calculate(10.5, 2.3, "addition"));
 }

 testCalculator();
