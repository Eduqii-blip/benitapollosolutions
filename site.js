    (function() {  
             emailjs.init({ 
             publicKey: "D1y25vk5Im7SPLYnC", }); 
             })();
             
          window.onload = function() { document.getElementById('study-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_je7v6yn', 'Study_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.write("information sent");
                        window.location.assign("../controller/studysuccess.html");
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }