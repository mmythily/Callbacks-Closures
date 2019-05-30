var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 },
    { id: 5, name: "mythily",  age: 30 }
];

var sorted = students.sort(function (a, z) {
    if (a.name === z.name) {
        return a.age < z.age;
    }
    else {
        return a.name > z.name;
    }
});

console.log(sorted);




