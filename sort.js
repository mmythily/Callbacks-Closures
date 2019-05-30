//The sort method can be conveniently used with function expressions:
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);// [1, 2, 3, 4, 5]

//ES2015 provides arrow function expressions with even shorter syntax.
let numbers1 = [4, 2, 5, 1, 3];
numbers1.sort((a, b) => a - b);
console.log(numbers1);// [1, 2, 3, 4, 5]

// Objects can be sorted given the value of one of their properties.

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log("Sorted by value: ", items);
  
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  console.log("Sorted by name: ", items);