// this file is for some practices for arrow function

var names = ['Andrew', 'Julie', 'Tony', 'Jen'];

names.forEach(function (name) {
    console.log("forEach", name);
});

// arrow function
names.forEach(name => console.log(name));

var addStatement = (a, b) => console.log(a + b);

addStatement(1, 3);