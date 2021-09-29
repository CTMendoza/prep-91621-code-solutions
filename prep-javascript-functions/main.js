function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum of addTwoNumbers', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMintues is', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello my name is' + ' ' + name + ' ' + 'Nice,to meet you!';
}

var getGreetingResult = getGreeting('Chris');

console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var ResultofaddAndMultiplyBy5 = addAndMultiplyBy5(11, 10);

console.log('The result of addAndMultiplyBy5 is', ResultofaddAndMultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var ResultofmultiplyAndDivideBy5 = multiplyAndDivideBy5(10, 3);

console.log('Result of ResultofmultiplyAndDivideBy5 is', ResultofmultiplyAndDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var ResultofsubtractTwoNumbers = subtractTwoNumbers(10, 5);

console.log('Result of ResultofsubtractTwoNumbers', ResultofsubtractTwoNumbers);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
var ResultofgetCircleCircumference = getCircleCircumference(5);

console.log('The circumference is', ResultofgetCircleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var ResultofgetFullName = getFullName('Leroy', 'Jenkins');

console.log('Hi! My fuill name is', ResultofgetFullName);

function cube(number) {
  return number * 3;
}

var Resultofcube = cube(3);

console.log('Cube is', Resultofcube);
