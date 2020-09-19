/*
The nullish coalescing operator ?? provides a short syntax for selecting a first “defined” variable from the list.
The result of a ?? b is:

a if it’s not null or undefined,
b, otherwise.

So, x = a ?? b is a short equivalent to:
x = (a !== null && a !== undefined) ? a : b;

*/

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// show the first not-null/undefined value
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
