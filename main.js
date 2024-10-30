import { loadHome, userSent, formSent, solurl, suiteurl } from 'https:/\/eduqii-blip.github.io/benitapollosolutions/index.js';

 let userrequest = document.querySelector('userForm');
 let userrequestreg = document.querySelector('regForm');

userrequest.addEventListener("click", (e) => {
    e.preventDefault();
    
    alert("i did something too");
   // userSent();
});

userrequestreg.addEventListener("click", (e) => {
    e.preventDefault();
    
    alert("i did something");
   // formSent();
});

const loadPage = function (){
       loadHome();
}

const getSolution = funtion(){
    document.write("loading please wait...");
    window.location.assign(solurl);
}

const openSuite = function(){
    document.write("loading please wait...");
    window.location.assign(suiteurl);
}
