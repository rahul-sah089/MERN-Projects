function print1() {
    const number = 1;
    console.log(number);
}

function print2() {
    function getNumber() {
        return 2;
    }
    const number2 = getNumber();
    console.log(number2);
}

function print3() {
    const callback = function (err, response) {
        console.log(response);
        print4();
    }
    const fs = require('fs');
    fs.readFile('./number.txt', 'utf-8', callback)
}

function print4() {
    const number = 4;
    console.log(number);
}

print1();
print2();
print3();