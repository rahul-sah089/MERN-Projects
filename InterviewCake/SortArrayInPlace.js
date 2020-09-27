//Program to sort an array in place. No extra memory

//Time complexity O(n) and space complexity O(1)
function reverse1(arrayOfChars) {
    let leftIndex = 0;
    let rightIndex = arrayOfChars[arrayOfChars.length - 1];
    while (leftIndex < rightIndex) {
        let temp = arrayOfChars[leftIndex];
        arrayOfChars[rightIndex] = arrayOfChars[rightIndex];
        arrayOfChars[rightIndex] = temp;

        //Move the index left and right
        rightIndex--;
        leftIndex++;
    }
    return arrayOfChars;
}

//Not in place
function reverse2(array) {
    return array.reverse();
}

let arr = [1, 23, 4, 5, 6, 6, 2];
let value1 = reverse1(arr);
let value2 = reverse2(arr);

console.log(value1);
console.log(value2);