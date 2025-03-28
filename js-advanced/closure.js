
// A closure is a function that preserves the outerscope in it's inner scope

// Definition:
// A closure is a combination of a function and its ability to remember variables in the outer scope

function greeting(){

    let message="Hello";

    function sayHello(){
        // This function preserves the scope of the message variable
        console.log(message);
    }

   return sayHello;

}

let hello=greeting();

console.log(typeof hello)

hello();
