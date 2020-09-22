//callback hell
console.log("Start");

function logInUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data!!");
            resolve({ useremail: email });
        }, 1500);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}

function getUserVideosDetails(video) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let videoUrl = "https://rahulsah.me/videos/" + video;
            resolve(videoUrl);
        }, 3000)
    });
}

function getVideoShortUrl(video) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let shortendUrl = "https://bitly.me/" + video;
            resolve(shortendUrl);
        }, 5000)
    })
}


/*logInUser('ed', 'bumbaa')
.then(user => getUserVideos(user.useremail))
.then(videos => getUserVideosDetails(videos))
.then(detail=> console.log(detail));
*/

const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Getting Stuff from Youtube");
        resolve({ videos: [1, 2, 3, 4, 5] })
    }, 3000);
});

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Getting stuffe from facebook");
        resolve({ user: "Rahul Sah" })
    }, 2000);
});

/*yt.then((video) => console.log(video));
fb.then((user) => console.log(user))
*/

//Executing both of them together , the result is not going to come until both the promises are fullfilled
Promise.all([yt, fb]).then(result => console.log(result));




//Sync style of writing code for asynchnous processing using async await
console.log("Finish");