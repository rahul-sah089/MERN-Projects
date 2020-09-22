//There callback function is synchronous

console.log("start");

const array = [1, 2, 3, 4, 5, 6];
array.forEach((item) => {
    console.log(item);
})

console.log("end");