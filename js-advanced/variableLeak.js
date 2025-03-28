
function showMessage(){

    message="variable leaking demo"

    return message;
}

console.log(showMessage())
