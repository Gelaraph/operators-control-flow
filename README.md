# Javascript Operators & Control Flow

<!-- For this assignment, create a folder and name it ‘operators-control-flow’. Put the answers to Questions 1, 2 and 4 in a file named ‘readme.md’. For the coding questions, create a file and name it ‘index.js’. Use comments to label your answers. -->

##

1). List the symbols for each of the below Javascript operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators

##

2). For each JavaScript Operator, write 2 examples.

##

3). Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.

    The subjects for each class group are as follows:
    - Science Subjects - Physics, Chemistry, Biology, Technical Drawing
    - Social Science Subjects - Accounting, Commerce, Marketing, Geography
    - Arts Subjects - Government, Economics, Literature, History
    - General Subjects - English, Mathematics

- Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects.

##

4). What is the result when the following program is executed?
for (let i = 1; i < 20; i += 7){
console.log(i);
}

##

5). Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format:
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”

### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations between numeric operands.

- e.g

- Adds two numeric operands.
  let z = x + y; //performs addition and returns 15

* Subtract right operand from left operand.
  z = y - x; //performs subtraction and returns 5

### Comparison Operators

JavaScript provides comparison operators that compare two operands and return a boolean value true or false.

- e.g
  === Compares equality of two operands with type.
  a === c; // returns false

!= Compares inequality of two operands.
a != b; // returns true

### Logical Operators

In JavaScript, the logical operators are used to combine two or more conditions. JavaScript provides the following logical operators:

1.  && - is known as AND operator. It checks whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero). It returns 1 if they are non-zero; otherwise, returns 0.

2.  || - is known as OR operator. It checks whether any one of the two operands is non-zero or not (0, false, undefined, null or "" is considered as zero). It returns 1 if any one of of them is non-zero; otherwise, returns 0.

- e.g

let a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

### Assignment Operators

JavaScript provides the assignment operators to assign values to variables with less key strokes.

- e.g
  = Assigns right operand value to the left operand.
  += Sums up left and right operand values and assigns the result to the left operand.

### Bitwise Operations

Bitwise operators treat its operands as a set of 32-bit binary digits (zeros and ones) and perform actions. However, the result is shown as a decimal value.
& Bitwise AND e.g x & y
| Bitwise OR e.g x | y

4. What is the result when the following program is executed ?

   for (let i = 1; i < 20; i += 7){
   console.log(i);
   }

   <!-- - ANS -->

   1
   8
   15
