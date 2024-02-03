const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Gimli (Medium).jpg") {
    myImage.setAttribute("src", "images/Gimli big (Medium).jpg");
  } else {
    myImage.setAttribute("src", "images/Gimli (Medium).jpg");
  }
};
//^ this causes the pic on the page to swap when clicked 

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// This takes references to the new button and the heading, storing each inside variables

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
// On logging into the page - a pop up asking your name appears

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};