function multiply(a, b) {
    let result = a * b;
    return result;
}

var myHeading = document.querySelector("h1");
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

alert("Welcome to my website!");
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

/*
myHeading.textContent = "Hello, world";
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
};
*/
