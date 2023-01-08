window.onload = () => {
  engLanguage();
};

const engLanguage = () => {
  if (document.querySelector("#enLanguage").checked) {
    document.cookie = "language = English; Secure";
  }
};

const checkRadioButtons = () => {
  if (document.querySelector("#roLanguage").checked) {
    document.cookie = "language = Romanian; Secure";
  }
};

const fillStorage = () => {
  const userInput = document.getElementById("userName").value;
  localStorage.setItem("userName", userInput);
};

let listOfCookies = document.cookie;
console.log(listOfCookies);
