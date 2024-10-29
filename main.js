import loadHome from './helperclass.js';
import userSent from '.helperclass.js';
import formSent from './helperclass.js';

let userrequest = document.querySelector('userForm');
let userrequestreg = document.querySelector('regForm');

userrequest.addEventListener("click", (e) => {
    e.preventDefault();
    
    userSent();
});

userrequestreg.addEventListener("click", (e) => {
    e.preventDefault();
    
    userSent();
});
window.onload(loadHome);