console.log("Promise Start");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Got the user");
        //resolve({ user: "ed" })
        reject(new Error('User not logged in'));
    }, 2000);
});

promise.then(result => console.log(result)).catch(err => console.log(err.message));


console.log("Promise End");