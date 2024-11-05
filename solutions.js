  let myVideo = document.getElementById("inclass");
            myVideo.addEventListener("timeupdate", function(){
    if(this.currentTime >= 5 * 14) {
        this.pause();
    }
});

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
     
 });*/
 