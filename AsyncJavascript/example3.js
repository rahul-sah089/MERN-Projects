//callback hell
console.log("Start");

function logInUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data!!");
        callback({ useremail: email });
    }, 1500);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

function getUserVideosDetails(video, callback) {
    setTimeout(() => {
        let videoUrl = "https://rahulsah.me/videos/" + video;
        callback(videoUrl);
    }, 3000)
}

function getVideoShortUrl(video, callback) {
    setTimeout(() => {
        let shortendUrl = "https://bitly.me/" + video;
        callback(shortendUrl);
    }, 5000)
}

const user = logInUser("rahul@goomail.com", 12121212, (user) => {
    console.log(user);
    getUserVideos(user.useremail, (videos) => {
        console.log(videos);
        videos.forEach((video) => {
            console.log(video);
            getUserVideosDetails(video, (videoUrl) => {
                console.log(videoUrl);
            });
            getVideoShortUrl(video, (shortVideoUrl) => {
                console.log(shortVideoUrl);
            })
        });
    })
});


console.log("Finish");