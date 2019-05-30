var words = ["ground", "control", "to", "major", "tom"];

function myMapFunction (array, cb) {
    const mappedArray = [];
    /**
     * 1. For each element in the array
     * 2. Apply the callback function to get the transformed value
     * 3. Add the transformed value to the new array
     */
    for(index in array) {
        var newValue = cb(array[index]);
        mappedArray.push(newValue);
    }

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