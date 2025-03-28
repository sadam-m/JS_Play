// mimicing JS execution context searching of variables through scope chaining.

// This varialbe is on global scope under global execution context

let x=10;  

function foo(){

    // var x=20;

    function bar(){
        x+=100;
        console.log(x);
    }

    bar();
}

foo();