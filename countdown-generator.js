var countdownGenerator = function (x) {

    var list = [`T-minus `, 'Blast Off!', 'Rockets already gone, bub!']

    let countdown = x;
    
    return function() {
        if (countdown > 0) {
            console.log(list[0] + countdown + '...');
            countdown--;
        } 
        else if (countdown === 0){
            console.log(list[1]);
            countdown--;
        }
        else if (countdown < 0) {
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

