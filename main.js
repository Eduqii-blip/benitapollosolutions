let count = 1;
const changeMode = function (){
    count++;
const htmlBody = document.querySelector('html');
    const themehelper = document.querySelector('#mainnav');
    const searchbtn = document.querySelector('#searchbtn');
 //   let visionbanner =  document.querySelector('#visionbanner');
    let settingscontrolsa = document.querySelector('#settingscontrolsa');
    let settingscontrolsb = document.querySelector("#settingscontrolsb");
    if(typeof(Storage) !== "undefined"){
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
    }
    
const getSolution = function(){
    document.write("loading please wait...");
    window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/educationstudy.html");
}

const openSuite = function(){
    document.write("loading please wait...");
    window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/educationsolution.html");
  }
  
  const openCalSys = function (){
      document.write("loading please wait...");
      
      window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/getdemo.html")
  }
  
 