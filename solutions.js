  "use strict";
  let myVideo = document.getElementById("inclass");
  if(myVideo !== null){
      myVideo.addEventListener("timeupdate", function(){
    if(this.currentTime >= 5 * 14) {
        this.pause();
        
        window.location.assign("https://tinyurl.com/25s9w8wq")
    }
});
  }

$(window).on('load', function() {
        $('#salutationModal').modal('show');
    });
    
//search controller
    let mySearch = document.getElementById("searchterms");
    mySearch.addEventListener("keypress", function(event){
     if(event === "Enter"){
         event.preventDefault();
        
         document.getElementById("searchbtn").click();
     }
     
 });
 

 