function multiply(a, b) {
    let result = a * b;
    return result;
}

var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/airport.jpg") {
        myImage.setAttribute("src", "images/snorkeling.jpg");
    }
    else {
        myImage.setAttribute("src", "images/airport.jpg");
    }
};

//alert("Welcome to my website!");
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

/*
myHeading.textContent = "Hello, world";
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
};
*/

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Hello " + myName + ", nice to meet you!";
    }
    
}

var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");

if(!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Hello " + storedName + ", nice to meet you!";
}

myButton.onclick = function() {
    setUserName();
};