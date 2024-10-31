export const message = function (){
    let loadstatus = document.createElement("div");
    let headstatus = document.createElement("h1");
    let _load = document.createElement("span");
    loadstatus.classList.add("container");
    loadstatus.classList.add("mt-5");
    headstatus.classList.add("display-3");
    _load.classList.add("spinner-border");
    loadstatus.appendChild(headstatus);
    loadStatus.innerText = "Loading.. please wait";
    headstatus.appendChild(_load);
    
    
}

