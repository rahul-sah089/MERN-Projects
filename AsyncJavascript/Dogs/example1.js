var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        const breed = Object.keys(response.message);
        const firstBreedInTheList = breed[0];

        //=================================================================
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "https://dog.ceo/api/breed/" + firstBreedInTheList + "/images/random")
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                console.log(xhr2.responseText);
            }
        }
        //=================================================================
    }
}
xhr.send(null);