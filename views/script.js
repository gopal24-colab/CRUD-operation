"use strict";

let myUserDatabase = [];

let sign_username = document.querySelector("#sign_username");
let sign_email = document.querySelector("#sign_email");
let sign_password = document.querySelector("#sign_password");
let sign_mob = document.querySelector("#sign_mob");
const go_to_login = document.getElementById("sign_up_page");
go_to_login.onclick = function () {
  var sign_up_page = document.getElementById("sign_up");
  sign_up_page.style.display = "block";
  var login_page = document.getElementById("login_page");
  login_page.style.display = "none";
};
login_page_open.onclick = function () {
  var sign_up_page = document.getElementById("sign_up");
  sign_up_page.style.display = "none";
  var login_page = document.getElementById("login_page");
  login_page.style.display = "block";
};
// localStorage.setItem("userdata",mydata);

// view password
let eyeBtn = document.getElementById("toggleBtn");
let passInput = document.querySelector("#sign_password");
eyeBtn.addEventListener("click", () => {
  if (passInput.type == "password") {
    eyeBtn.classList.add("hide");
    passInput.type = "text";
  } else {
    eyeBtn.classList.remove("hide");
    passInput.type = "password";
  }
});

let isUsernameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isMobileValid = false;

// password validation checking

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let spacialChar = document.getElementById("spacial");
let minLength = document.getElementById("length");
passInput.addEventListener("keyup", (event) => {
  const data = event.target.value.trim();
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const spcial = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.*[8,])");
  let con1 = false,
    con2 = false,
    con3 = false,
    con4 = false,
    con5 = false;
  //check lowercase ..
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
    con1 = true;
  } else lowerCase.classList.remove("valid");

  //check uppercase
  if (upper.test(data)) {
    upperCase.classList.add("valid");
    con2 = true;
  } else upperCase.classList.remove("valid");

  //check number
  if (number.test(data)) {
    digit.classList.add("valid");
    con3 = true;
  } else digit.classList.remove("valid");

  //check spacial character
  if (spcial.test(data)) {
    spacialChar.classList.add("valid");
    con4 = true;
  } else spacialChar.classList.remove("valid");

  //check length

  if (data.length >= 8) {
    minLength.classList.add("valid");
    con5 = true;
  } else minLength.classList.remove("valid");

  if (con1 && con2 && con3 && con4 && con5) {
    isPasswordValid = true;
  } else {
    isPasswordValid = false;
  }
});

/// username validation

//list referances
let nameUppercase = document.getElementById("nameUppercase");
let nameDigit = document.getElementById("nameDigit");
let nameLength = document.getElementById("nameLength");
let nameSpacial = document.getElementById("nameSpacial");
sign_username.addEventListener("keyup", (event) => {
  let con1 = false,
    con2 = false,
    con3 = false,
    con4 = false,
    con5 = false;
  const data = event.target.value;
  const spcial = new RegExp("(?=.*[!@#$%^&*])");
  const number = new RegExp("(?=.*[0-9])");
  if (data.length <= 0) nameUppercase.classList.remove("valid");
  else if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90) {
    nameUppercase.classList.add("valid");
    con1 = true;
  } else nameUppercase.classList.remove("valid");

  if (data.length == 0) {
    nameSpacial.classList.remove("valid");
  } else if (!spcial.test(data)) {
    nameSpacial.classList.add("valid");
    con2 = true;
  } else {
    nameSpacial.classList.remove("valid");
  }

  if (number.test(data)) {
    nameDigit.classList.add("valid");
    con3 = true;
  } else {
    nameDigit.classList.remove("valid");
  }

  if (data.length >= 6) {
    nameLength.classList.add("valid");
    con4 = true;
  } else nameLength.classList.remove("valid");

  if (con1 && con2 && con3 && con4) {
    isUsernameValid = true;
  } else isUsernameValid = false;
});

//email validation
let emailChar = document.getElementById("emailChar");
let correct_email = document.getElementById("correct_email");
let correct_dot_pos = document.getElementById("correct_dot_pos");
sign_email.addEventListener("keyup", (event) => {
  const data = event.target.value.trim();
  const number = new RegExp("(?=.*[0-9])");
  const firstNotUpper = new RegExp("(?=.*[A-Z])");
  const regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const atTheRate = data.indexOf("@");
  let dotPosition = data.length - data.lastIndexOf(".");
  let con1 = false,
    con2 = false,
    con3 = false;
  if (data.length == -1) {
    emailChar.classList.remove("valid");
  } else if (atTheRate > 0) {
    emailChar.classList.add("valid");
    con1 = true;
  } else {
    emailChar.classList.remove("valid");
  }

  if (dotPosition == 3 || dotPosition == 4) {
    correct_dot_pos.classList.add("valid");
    con2 = true;
  } else correct_dot_pos.classList.remove("valid");

  if (data.length == 0) {
    correct_email.classList.remove("valid");
  } else if (regexp.test(data) && (dotPosition == 3 || dotPosition == 4)) {
    correct_email.classList.add("valid");
    con3 = true;
  } else {
    correct_email.classList.remove("valid");
  }

  if (con1 && con2 && con3) {
    isEmailValid = true;
  } else {
    isEmailValid = false;
  }
});

//mobile validation
let mob_digit = document.getElementById("mob_digit");
sign_mob.addEventListener("keyup", (event) => {
  const data = event.target.value.trim();

  if (data.length == 0) {
    mob_digit.classList.remove("valid");
    isMobileValid = false;
  } else if (data.toString().length == 10) {
    mob_digit.classList.add("valid");
    isMobileValid = true;
  } else {
    mob_digit.classList.remove("valid");
    isMobileValid = false;
  }
});
/*

let userInfo = {};
        userInfo.username = sign_username;
        userInfo.email = sign_email;
        userInfo.password = sign_password;
        userInfo.mobile = sign_mob;
        myUserDatabase.push(userInfo);
        
        let userinformation = JSON.stringify(myUserDatabase);
        console.log(JSON.stringify(myUserDatabase));
        localStorage.setItem("userdata",userinformation);
        result.innerHTML = "success";
        setTimeout(() => {
            result.style.display = "none";
        }, 2000);

*/

// signup form coding
window.onload = function fatchDataFromLocalstorage() {
  myUserDatabase = JSON.parse(localStorage.getItem("userdata"));
  if (myUserDatabase == null) {
    myUserDatabase = [];
  }
  // console.log(myUserDatabase);
};

/** ------------------   register form coding --------------------*/

let result = document.getElementById("result");
let signupForm = document.querySelector("#signupForm");

let signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", function () {
  let currentPerson = {
    username: sign_username.value.trim(),
    password: sign_password.value.trim(),
    email: sign_email.value.trim(),
    mobile: sign_mob.value.trim(),
  };
  if (
    currentPerson.username == "" &&
    currentPerson.password == "" &&
    currentPerson.email == "" &&
    currentPerson.mobile == ""
  ) {
    //
    result.innerHTML = "All filds are empty🥱";
  } else if (!isUsernameValid) {
    result.innerHTML = "Username not valid😕";
  } else if (!isEmailValid) {
    result.innerHTML = "Email not valid😕";
  } else if (!isPasswordValid) {
    result.innerHTML = "Password not valid😕";
  } else if (!isMobileValid) {
    result.innerHTML = "Mobile number not valid😕";
  } else if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isMobileValid
  ) {
    //
    /*let username = sign_username.value.trim();
    let password = sign_password.value.trim();
    let email = sign_email.value.trim();
    let mob = sign_mob.value.trim();
    if (!isUserExist(currentPerson)) {
      let person = {};
      person.username = username;
      person.password = password;
      person.email = email;
      person.mobile = mob;
      //push new user data to the server
      myUserDatabase.push(person);
      console.log(JSON.stringify(myUserDatabase));
      localStorage.setItem("userdata", JSON.stringify(myUserDatabase));
      //console.log(JSON.parse(localStorage.getItem("userdata")));
    } else {
      result.innerHTML = "Already user exist😎";
    }*/
    /*sign_username.value = "";
    sign_email.value = "";
    sign_password.value = "";
    sign_mob.value = "";*/
    /* ------------ remove all valid class value------------- */
    // for user name
    nameUppercase.classList.remove("valid");
    nameDigit.classList.remove("valid");
    nameSpacial.classList.remove("valid");
    nameLength.classList.remove("valid");
    // for password
    upperCase.classList.remove("valid");
    lowerCase.classList.remove("valid");
    digit.classList.remove("valid");
    spacialChar.classList.remove("valid");
    minLength.classList.remove("valid");
    //for email
    emailChar.classList.remove("valid");
    correct_dot_pos.classList.remove("valid");
    correct_email.classList.remove("valid");
    // for mobile
    mob_digit.classList.remove("valid");
    signupForm.submit();
  }
  setTimeout(() => {
    result.innerHTML = "";
  }, 2000);
});
const alertMessage = document.getElementById("alertMessage");
setTimeout(() => {
  alertMessage.innerHTML = "";
}, 3000);

/* in database usre exist or not */
async function isUserExist(person) {
  let username = person.username;
  let database = JSON.parse(localStorage.getItem("userdata"));
  if (database != null) {
    let newPerson = database.filter((obj) => {
      if (obj.username == username) {
        return true;
      }
    });
    if (newPerson[0] == null) return false;
    else return true;
  }
}

/* ------------ print result ------------ */
function printResult(data) {
  result.innerHTML = data;
  const mytime = setTimeout(() => {
    result.innerHTML = "";
  }, 2000);
}

/* -------------------------------------------- Login page coding -------------------------------------------- */
let login_username = document.getElementById("login_username");
let login_password = document.getElementById("login_password");
let login_admin_id = document.getElementById("login_admin_id");
let loginForm = document.getElementById("loginForm");
let loginBtn = document.getElementById("loginBtn");
let loginResult = document.getElementById("loginResult");
loginBtn.addEventListener("click", () => {
  let username = login_username.value.trim();
  let password = login_password.value.trim();
  if (username == "" && password == "" && login_admin_id == "") {
    loginResult.innerHTML = "All filds are empty🥱";
  } else if (username == "") {
    loginResult.innerHTML = "Username missing❓";
  } else if (password == "") {
    loginResult.innerHTML = "Password missing❓";
  } else if (login_admin_id == "") {
    loginResult.innerHTML = "Admin id missing❓";
  } else loginForm.submit();
  /*
  if (database != null) {
    let person = database.filter((obj) => {
      if (obj.username == username) {
        return true;
      }
    });
    if (username == "" && password == "") {
      loginResult.innerHTML = "All filds are empty🥱";
    } else if (username == "") {
      loginResult.innerHTML = "Username missing❓";
    } else if (password == "") {
      loginResult.innerHTML = "Password missing❓";
    } else if (person[0] == null) {
      loginResult.innerHTML = "User not exist🥲";
    } else if (person[0].password == password) {
      loginResult.innerHTML = "😍Login success😍";
      login_username.value = "";
      login_password.value = "";
      loginForm.submit();
    } else {
      loginResult.innerHTML = "Password not matched😒";
    }
  } else {
    loginResult.innerHTML = "Sign in first";
  }*/
  setTimeout(() => {
    loginResult.innerHTML = "";
  }, 3000);
});

let admin_div = document.getElementById("admin_div");
let admin_check = document.getElementById("admin_check");
let count = 0;
admin_check.addEventListener("click", (e) => {
  count = count + 1;
  if (count % 2 == 0) {
    admin_div.style.display = "none";
  } else {
    admin_div.style.display = "block";
  }
});
