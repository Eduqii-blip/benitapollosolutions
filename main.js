let regfullname;
let regemail;
let regpassword;
let count = 1;

const loadBas = function () {
let loadr = document.querySelector("#loadPage");
loadr.style.visibility = "visible";

    if(regfullname !== " "){
    document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/solutions.html")
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
    document.location.assign("https://eduqii-blip.github.io/benitapollosolutions/index.html");
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
    count++;
    let htmlBody = document.querySelector('html');
    const themehelper = document.querySelector('#mainmenu');
    let visionbanner =  document.querySelector('#visionbanner');
    let settingscontrolsa = document.querySelector('#settingscontrolsa');
    let settingscontrolsb = document.querySelector("#settingscontrolsb");
    if(count % 2 == 0){
    htmlBody.setAttribute('data-bs-theme', 'dark');
    themehelper.classList.remove("bg-dark");
    themehelper.classList.add("bg-secondary");
    visionbanner.classList.remove("text-bg-primary")
    visionbanner.classList.add("text-bg-secondary");
    settingscontrolsa.classList.remove("text-bg-light");
    settingscontrolsa.classList.add("text-bg-secondary");
    settingscontrolsb.classList.remove("text-bg-light");
    settingscontrolsb.classList.add("text-bg-secondary");
    //alert("i just changed the theme");
    }else{
        htmlBody.setAttribute('data-bs-theme', 'light');
        themehelper.classList.remove("bg-secondary");
    themehelper.classList.add("bg-dark");
    visionbanner.classList.remove("text-bg-secondary")
    visionbanner.classList.add("text-bg-primary");
    settingscontrolsa.classList.remove("text-bg-secondary");
    settingscontrolsa.classList.add("text-bg-light");
    settingscontrolsb.classList.remove("text-bg-secondary");
    settingscontrolsb.classList.add("text-bg-light");
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