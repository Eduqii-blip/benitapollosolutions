"use strict"
let counter = 1;
let count;
const changeMode = function (){
    counter++;
const htmlBody = document.querySelector('html');
    const themehelper = document.querySelector('#mainnav');
    const searchbtn = document.querySelector('#searchbtn');
 //   let visionbanner =  document.querySelector('#visionbanner');
    let settingscontrolsa = document.querySelector('#settingscontrolsa');
    let settingscontrolsb = document.querySelector("#settingscontrolsb");
    if(typeof(Storage) !== "undefined"){
              if(counter % 2 == 0){
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
    
    const getHardware = function (){
        document.write("loading please wait...");
        
        window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/hardwaresolution.html");
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
  
 const Subscribe = function (){
     document.write("loading please wait...");
     
     window.location.assign("https://eepurl.com/iVSgP2");
 }
 
 const openClass = function (){
      document.write("loading... please wait");
      
      window.location.assign("https://tinyurl.com/25s9w8wq")
  }
  
  const openDeveloper = function (){
     document.write("loading... please wait");
     
     window.location.assign("https://tinyurl.com/2dfcmn6h")
  }
 //search controller 
 const searchHelper = function (){
 let searxh = document.getElementById("searchterms").value;
let thesearxh = searxh.trim();
let searchresults;
let notfound;
  let inventory = ["Solutions","Education","Health","solutions","education","health"];
  for(count=0;count<inventory.length;count++){
      if(thesearxh.includes(inventory[count])){
          alert("search found");
          if(typeof(Storage) !== "undefined"){
              localStorage.searchresults = inventory[count];
              window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/searchresult.html");
          }
      }else{
          notfound = "not found";
      }
  }
  
  if(notfound == "not found"){
      alert("not found");
  }
  searchresults = localStorage.searchresults;
}

const searchResult = function (){
let _searchterms = localStorage.searchresults
    let contheader = document.querySelector("#searchheader");
    let contres = document.querySelector("#searchres1");
    document.querySelector("#resname").innerHTML = localStorage.searchresults;
    switch(localStorage.searchresults){
        case "Solutions" || "solutions":
            contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>11</span>";
        document.querySelector("#searchres1").innerText = "Solutions";
        document.querySelector("#searchres2").innerText = "Demo";
        break;
        case "Education" || "education":
           contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>106</span>";
           document.querySelector("#searchres1").innerText = "Up next";
           document.querySelector("#searchres2").innerText = "Solutions";
           break;
    }
}
