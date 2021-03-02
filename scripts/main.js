// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jim2.jpg") {
    myImage.setAttribute("src", "images/jim1.jpg");
  } else {
    myImage.setAttribute("src", "images/jim2.jpg");
  }
};
//brutus1.jpeg and brutus2.jpeg
// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "UM is the best, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "UM is the best, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
