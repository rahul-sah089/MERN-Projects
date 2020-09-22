//callback for the synchnous code
function fun1(fun2) {
    console.log(fun2)
}

function fun2(number) {
    return number * number;
}

fun1(12);