let regfullname;
let regemail;
let regpassword;
let count = 1;
const loadBas = function () {
let loadr = document.querySelector("#loadPage");
loadr.style.visibility = "visible";

    if(regfullname !== " "){
    document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/solutions.html");
        //document.location.assign("../view/home.html")
    }
    else{
        document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/index.html");
    }
}
//eval(loadBas());

//loadHome
const loadHome = function () {
     let loadr = document.querySelector('#loadstatus');
    loadr.style.visibility = "visible";
    document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/home.html");
    if(regfullname !== " "){
        document.querySelector("#user").innerHTML =           "Hello " + regfullname  + "Explore our various list of seamless integration systems. Check out solutions customized for your needs.";
    }
    else{
        document.querySelector("#user").innerHTML = "Explore our range of augmented and automated systems.";
    }
    
}

const formSent = function(){
    let fullname = regform.fullname.value;
    let email = regform.email.value;
    let password = regform.password.value;
    if(typeof(Storage) !== "undefined"){
        localStorage.email = email;
        localStorage.fullname = fullname;
        localStorage.password = password;
        regfullname = localStorage.fullname;
        regemail = localStorage.email;
        regpassword = localStorage.password;
       console.log(regfullname);
       console.log(regemail);
       document.querySelector('#regalert').innerHTML = "Howdy! " + regfullname;
    //document.location.assign("../auth/login.html")
    }
}

const userSent = function(){
    let user = userform.email.value;
    let pswd = userform.password.value;
    let regemail = localStorage.email;
    let regpassword = localStorage.password;
    if(user == regemail && pswd == regpassword){
      document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/home.html");
       // document.location.assign("../view/home.html")
    }else{
    console.log(regemail);
        alert("email not found");
    }
    
}

const changeMode = function (){
"use strict";
    count++;
    const htmlBody = document.querySelector('html');
    const themehelper = document.querySelector('#mainnav');
    const searchbtn = document.querySelector('#searchbtn');
 //   let visionbanner =  document.querySelector('#visionbanner');
    let settingscontrolsa = document.querySelector('#settingscontrolsa');
    let settingscontrolsb = document.querySelector("#settingscontrolsb");
    if(count % 2 == 0){
    htmlBody.setAttribute('data-bs-theme', 'dark');
    themehelper.classList.remove("bg-dark");
    themehelper.classList.add("bg-primary");
   /* visionbanner.classList.remove("text-bg-primary")
    visionbanner.classList.add("text-bg-dark");*/
    settingscontrolsa.classList.remove("text-bg-light");
    settingscontrolsa.classList.add("text-bg-secondary");
    settingscontrolsb.classList.remove("text-bg-light");
    settingscontrolsb.classList.add("text-bg-secondary");
    searchbtn.classList.remove("btn-primary");
    searchbtn.classList.add("btn-success")
    //alert("i just changed the theme");
    }else{
        htmlBody.setAttribute('data-bs-theme', 'light');
        themehelper.classList.remove("bg-primary");
    themehelper.classList.add("bg-dark");
 /*   visionbanner.classList.remove("text-bg-secondary")
    visionbanner.classList.add("text-bg-primary"); */
    settingscontrolsa.classList.remove("text-bg-secondary");
    settingscontrolsa.classList.add("text-bg-light");
    settingscontrolsb.classList.remove("text-bg-secondary");
    settingscontrolsb.classList.add("text-bg-light");
    searchbtn.classList.remove("btn-success");
    searchbtn.classList.add("btn-primary")
      //  alert("i changed to light")
    }
}

function jobPrice(){
let price = document.forms[0].jobcategory.options[document.forms[0].jobcategory.selectedIndex].text;
let pricelist = new Array();
pricelist.push(price)
alert(pricelist.length)
    //document.forms[0].totalprice.value = pricelist;
} 

function disQuf(){
    let questions;
    let totalquestion = parseInt(document.buildquizform.totalnumber.value);
    let questioncount = document.querySelector("#disQuf");
    if(typeof(Storage) !== "undefined"){
        localStorage.totalquestion = totalquestion;
        questions = localStorage.totalquestion;
    console.log(totalquestion)
    alert(questions);
    }
} 

//customer
/*
(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "D1y25vk5Im7SPLYnC",
            });
        })();

window.onload = function() {
                 document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // - IDs from the previous steps
                emailjs.sendForm('service_je7v6yn', 'template_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }*/
        
        function getSolution(message){
            alert(message);
           // return message;
        }
// ghana

function fisQuf(){ 
let totalquestfield = document.querySelector('#totalnumfield');
totalquestfield.classList.add('disabled');
let totalquestion = parseInt(document.buildquizform.totalnumber.value);
let questfields = document.querySelector('#disQuf');
let counter = 0;
let questions;
for(counter;counter<totalquestion;counter++){
questions = document.createElement("input");
questions.classList.add("form-control");
questions.classList.add("mt-2")
questions.setAttribute('placeholder','enter question');
questions.setAttribute('name', 'quest');
let thequest = document.querySelector('quest').value;
questfields.appendChild(questions);
console.log("i did something " + totalquestion);
console.log("i stored something " + thequest);
}

}