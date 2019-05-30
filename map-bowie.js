var words = ["ground", "control", "to", "major", "tom"];

var wordlength = words.map(function(word) {
    return word.length;
});

var uppercase = words.map(function(word) {
    return word.toUpperCase();
});

var reverse = words.map(function(word) {
    return word.split('').reverse().join('');
});

console.log(wordlength);
console.log(uppercase);
console.log(reverse);