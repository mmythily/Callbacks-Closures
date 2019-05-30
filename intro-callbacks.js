var myFn = function() {
    console.log("I am function.");
}

myFn.someAttribute = 42;
console.log("myFn.someAttribute: " + myFn.someAttribute);

function runner(f) {
    f();
}

runner(myFn);

/*
we assign a function to our variable myFn
an attribute someAttribute is assigned to the object
a runner function is defined that runs the argument fcd that we pass it
we pass a reference to our myFn, which gets invoked by the runner function
*/