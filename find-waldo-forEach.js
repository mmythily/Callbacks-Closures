function findWaldo(arr, found) {


    arr.forEach (function (element, index) {
        if (element === "Waldo") {
            found(index);   // execute callback
        }
    });
}


function actionWhenFound(position) {
    console.log(`Found him at position ${position} !`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);