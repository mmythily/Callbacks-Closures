var words = ["ground", "control", "to", "major", "tom"];

function myMapFunction (array, cb) {
    const mappedArray = [];

    array.forEach(function (value) {
        var newValue = cb(value);
        mappedArray.push(newValue)
    });

    return mappedArray;
}

var wordlength = myMapFunction(words, function(word) {
    return word.length;
});

var uppercase = myMapFunction(words, function(word) {
    return word.toUpperCase();
});

var reverse = myMapFunction(words, function(word) {
    return word.split('').reverse().join('');
});

console.log(wordlength);
console.log(uppercase);
console.log(reverse);