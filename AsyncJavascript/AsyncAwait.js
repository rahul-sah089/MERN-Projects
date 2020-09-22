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

async function displayUser() {
    const loggedInUser = await logInUser("rahul", "12121");
    console.log(loggedInUser);
    const videos = await getUserVideos(loggedInUser.useremail);
    console.log(videos);

    for await (const contents of getUserVideosDetails(file)) {
        console.log(contents)
    }

    /*for (var i = 0; i < videos.length; i++) {
        console.log(videos[i]);
        let info = await getUserVideosDetails(videos[i]);
    }*/
}

displayUser();


//Sync style of writing code for asynchnous processing using async await
console.log("Finish");