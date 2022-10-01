//Get the data
var firstName = document.querySelector("#name1");
var lastName = document.querySelector("#name2");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var success = document.querySelector(".success");
var errorNodes = document.querySelectorAll(".error");

//Validate data
  function validateForm() {

    clearMessages();
    var errorFlag = false;
     
    if (firstName.value.length < 1) {
        errorNodes[0].innerText = "First Name cannot be blank";
        firstName.classList.add("error-border");
        errorFlag = true;
     } 

    if (lastName.value.length < 1) {
        errorNodes[1].innerText = "Last Name cannot be blank";
        lastName.classList.add("error-border");
        errorFlag = true;
     } 

    if(!emailIsValid(email.value)) {
        errorNodes[2].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
     }

    if (message.value.length < 1) {
        errorNodes[3].innerText = "Please enter a message";
        email.classList.add("error-border");
        errorFlag = true;
     }

     if(!errorFlag) {
        success.innerText = "Success!" + firstName.value; 
     }

}

//This function clear error / success messages 
function clearMessages () {
      for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
      }
      success.innerText = "";
      firstName.classList.remove("error-border");
      lastName.classList.remove("error-border");
      email.classList.remove("error-border");
      message.classList.remove("error-border");
}

//Check if email is valid
function emailIsValid(email) {
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
