
    for (let index = 1; index <= 3; index++) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    }

// let timerId=setTimeout(function(){

//     console.log("testing setTimeout")
// },3000)

// console.log(timerId)