var person = {
  firstName: 'Christopher',
  lastName: 'Mendoza',
  hobby: 'Video Games'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The persons name is', fullName);
person.job = 'jerk';
console.log('The persons job is', person.job);
person.previousjob = 'amigo';
console.log('The persons previos job was', person.previousjob);
console.log(person);
