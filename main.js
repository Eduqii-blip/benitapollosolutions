import { loadHome, userSent, formSent } from 'https:/\/eduqii-blip.github.io/benitapollosolutions/index.js';

export let userrequest = document.querySelector('userForm');
export let userrequestreg = document.querySelector('regForm');

userrequest.addEventListener("click", (e) => {
    e.preventDefault();
    
    userSent();
});

userrequestreg.addEventListener("click", (e) => {
    e.preventDefault();
    
    formSent();
});

eval(loadHome());
