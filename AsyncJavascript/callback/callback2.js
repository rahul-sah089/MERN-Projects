//callback for the aysnc code
function fun1() {
    setTimeout(function () {
        console.log("Inside set time out");
    }, 0);
}

function fun2(callback) {
    callback();
}


console.log("This is ouside the function");

fun2(fun1);

//Example  forthe Popular Library
/*setState() in react JS
Vanilla JS => 
const button = document.querySelector('.button');
button.addEventListener('click',function(event){
    alert('Button has been clicked');
})

Jquery
$("#coolthing").click(function(){
    alert("Handler button is been clicked");
})



*/