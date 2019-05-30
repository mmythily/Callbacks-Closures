var countdownGenerator = function (x) {

    var list = [`T-minus `, 'Blast Off!', 'Rockets already gone, bub!']

    let i = x;
    
    return function() {
        if (i > 0) {
            console.log(list[0] + i + '...');
            i--;
        } 
        else if (i === 0){
            console.log(list[1]);
            i--;
        }
        else if (i < 0) {
            console.log(list[2]);
        }
    }
};

    var countdown = countdownGenerator(3);
    countdown(); // T-minus 3...
    countdown(); // T-minus 2...
    countdown(); // T-minus 1...
    countdown(); // Blast Off!
    countdown(); // Rockets already gone, bub!
    countdown(); // Rockets already gone, bub!

