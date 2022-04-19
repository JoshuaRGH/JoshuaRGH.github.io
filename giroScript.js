let startQuiz = document.querySelector("#startQuiz");
let btnCorrect = document.querySelector("#correct-btn");
let btnIncorrect1 = document.querySelector("#wrong-btn1");
let btnIncorrect2 = document.querySelector("#wrong-btn2");
let btnIncorrect3 = document.querySelector("#wrong-btn3");
let resultsReveal = document.querySelector("#results");
let tryAgain = document.querySelector("#tryAgain");

startQuiz.addEventListener('click' ,()=>{
    
    setTimeout(function(){
        window.location.href = 'Q1.html';
    }, 2000);
});



btnCorrect.addEventListener('click',()=>{ 

    
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    }

    else {
        sessionStorage.clickcount = 1;
    }
    
    if (window.location.pathname == "/Q1.html") {

        setTimeout(function(){
            window.location.href = "Q2.html";
         }, 2500);
    }; 

    if (window.location.pathname == "/Q2.html") {

        setTimeout(function(){
            window.location.href = "Q3.html";
         }, 2500);
    };

    
    if (window.location.pathname == "/Q3.html") {

        setTimeout(function(){
            window.location.href = "Q4.html";
         }, 2500);
    }; 

    if (window.location.pathname == "/Q4.html") {

        setTimeout(function(){
            window.location.href = "Q5.html";
         }, 2500);
    };

    if (window.location.pathname == "/Q5.html") {
            
        setTimeout(function(){
            window.location.href = "results.html";
         }, 2500);
                    
    };


});


btnIncorrect1.addEventListener('click',()=>{

    

    if (window.location.pathname == "/Q1.html") {

         setTimeout(function(){
             window.location.href = "Q2.html";
           }, 2000);
        };
    
        if (window.location.pathname == "/Q2.html") {

            setTimeout(function(){
                window.location.href = "Q3.html";
             }, 2000);
        };
    
        if (window.location.pathname == "/Q3.html") {

            setTimeout(function(){
                window.location.href = "/Q4.html";
             }, 2000);
        }; 
    
        if (window.location.pathname == "/Q4.html") {
    
            setTimeout(function(){
                window.location.href = "Q5.html";
             }, 2000);
        };    

        if (window.location.pathname == "/Q5.html") {
            
            setTimeout(function(){
                window.location.href = "results.html";
            }, 2000);
                    
        };

    });

btnIncorrect2.addEventListener('click',()=>{

    
    
    if (window.location.pathname == "/Q1.html") {
        setTimeout(function(){
            window.location.href = "Q2.html";
          }, 2000);
       };
   
       if (window.location.pathname == "/Q2.html") {

           setTimeout(function(){
               window.location.href = "Q3.html";
            }, 2000);
       };
   
       if (window.location.pathname == "/Q3.html") {

           setTimeout(function(){
               window.location.href = "Q4.html";
            }, 2000);
       }; 
   
       if (window.location.pathname == "/Q4.html") {
   
           setTimeout(function(){
               window.location.href = "Q5.html";
            }, 2000);
       };    

       if (window.location.pathname == "/Q5.html") {
           
           setTimeout(function(){
               window.location.href = "results.html";
           }, 2000);
                   
       };

    });

btnIncorrect3.addEventListener('click',()=>{

    

    if (window.location.pathname == "/Q1.html") {
        setTimeout(function(){
            window.location.href = "Q2.html";
          }, 2000);
       };
   
       if (window.location.pathname == "/Q2.html") {

           setTimeout(function(){
               window.location.href = "Q3.html";
            }, 2000);
       };
   
       if (window.location.pathname == "/Q3.html") {

           setTimeout(function(){
               window.location.href = "Q4.html";
            }, 2000);
       }; 
   
       if (window.location.pathname == "/Q4.html") {
   
           setTimeout(function(){
               window.location.href = "Q5.html";
            }, 2000);
       };    

       if (window.location.pathname == "/Q5.html") {
           
           setTimeout(function(){
               window.location.href = "results.html";
           }, 2000);
                   
       };

    });



resultsReveal.addEventListener('click', ()=>{
    document.getElementById("results").innerHTML = "You got " + sessionStorage.getItem('clickcount') + " out of 5!";
});

tryAgain.addEventListener('click', ()=>{
    sessionStorage.clear()

    setTimeout(function(){
        window.location.href = 'index.html';
     }, 2000);

});
