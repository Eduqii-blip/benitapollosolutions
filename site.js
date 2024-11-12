   (function() {  
             emailjs.init({ 
             publicKey: "D1y25vk5Im7SPLYnC", }); 
             })();
             
          window.onload = function() {
           document.getElementById('solution-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_je7v6yn', 'Study_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.write("information sent");
                        window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/studysuccess.html");
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
                    
            },true);     
             document.getElementById('study-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_je7v6yn', 'Study_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.write("information sent");
                        window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/studysuccess.html");
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            },true);        
        }