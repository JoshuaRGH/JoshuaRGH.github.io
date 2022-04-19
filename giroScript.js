let startQuiz = document.querySelector("#startQuiz");
let btnCorrect = document.querySelector("#correct-btn");
let btnIncorrect1 = document.querySelector("#wrong-btn1");
let btnIncorrect2 = document.querySelector("#wrong-btn2");
let btnIncorrect3 = document.querySelector("#wrong-btn3");
let resultsReveal = document.querySelector("#results");
let tryAgain = document.querySelector("#tryAgain");

startQuiz.addEventListener('click' ,()=>{

    setTimeout(function(){
        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q1.html';
     }, 2000);
});



btnCorrect.addEventListener('click',()=>{  

    btnCorrect.addEventListener('click', (event) => {   
    });

    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    }

    else {
        sessionStorage.clickcount = 1;
    }
    
    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q1.html") {

        setTimeout(function(){
            window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html';
         }, 2500);
    }; 

    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html") {

        setTimeout(function(){
            window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html';
         }, 2500);
    };

    
    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html") {

        setTimeout(function(){
            window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html';
         }, 2500);
    }; 

    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html") {

        setTimeout(function(){
            window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html';
         }, 2500);
    };

    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html") {
            
        setTimeout(function(){
            window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/results.html';
         }, 2500);
                    
    };


});


btnIncorrect1.addEventListener('click',()=>{

    if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q1.html") {
         setTimeout(function(){
             window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html';
           }, 2000);
        };
    
        if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html") {

            setTimeout(function(){
                window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html';
             }, 2000);
        };
    
        if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html") {

            setTimeout(function(){
                window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html';
             }, 2000);
        }; 
    
        if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html") {
    
            setTimeout(function(){
                window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html';
             }, 2000);
        };    

        if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html") {
            
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/results.html';
                     }, 2000);
                    
                };

    });

btnIncorrect2.addEventListener('click',()=>{

        if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q1.html") {
             setTimeout(function(){
                 window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html';
               }, 2000);
            };
        
            if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html") {
    
                setTimeout(function(){
                    window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html';
                 }, 2000);
            };
        
            if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html") {
    
                setTimeout(function(){
                    window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html';
                 }, 2000);
            }; 
        
            if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html") {
        
                setTimeout(function(){
                    window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html';
                 }, 2000);
            };   
            
            if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html") {
            
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/results.html';
                     }, 2000);
                    
                };
            
    
        });

btnIncorrect3.addEventListener('click',()=>{

            if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q1.html") {
                 setTimeout(function(){
                     window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html';
                   }, 2000);
                };
            
                if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q2.html") {
        
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html';
                     }, 2000);
                };
            
                if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q3.html") {
        
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html';
                     }, 2000);
                }; 
            
                if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q4.html") {
            
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html';
                     }, 2000);
                };   
                
                if (window.location.href == "file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/Q5.html") {
            
                    setTimeout(function(){
                        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/results.html';
                     }, 2000);
                    
                };
        
            });



resultsReveal.addEventListener('click', ()=>{
    document.getElementById("results").innerHTML = "You got " + sessionStorage.getItem('clickcount') + " out of 5!";
});

tryAgain.addEventListener('click', ()=>{
    sessionStorage.clear()

    setTimeout(function(){
        window.location.href = 'file:///C:/Users/Josh/Desktop/Napier%20Yr2/WebTech/Giro%20Quiz/index.html';
     }, 2000);

});
