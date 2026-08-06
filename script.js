function unlock(){

    let password = document.getElementById("pass").value;


    if(password === "W"){

        next("welcome");

    }
    else{

        document.getElementById("error").innerHTML =
        "🐧 Hmm... that's not the name you call me 😒❤️";

    }

}




function next(id){


    document.querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

    });



    document.getElementById(id)
    .classList.add("active");



    if(id==="quiz"){

        loadQuestion();

    }



    if(id==="letter"){

        typeWriter();

    }

}







let questions=[


{

question:"When did our little journey begin? 🐧❤️",

answers:[

"1 May 2025 ❤️",

"Valentine's Day 💕",

"New Year's Day 🎉",

"A random Tuesday 😂"

],

correct:0

},




{

question:"What is my favourite name for you? 🥰",

answers:[

"Saku ❤️",

"Penguin Queen 🐧",

"Cutie 🥺",

"All of these 💖"

],

correct:0

},




{

question:"If we could spend a perfect day together, what matters most? ❤️",

answers:[

"Expensive gifts 🎁",

"Fancy places ✨",

"Good food 🍕",

"Just being together 🫶"

],

correct:3

},




{

question:"What makes our bond special? 💖",

answers:[

"Our silly conversations 😂",

"Understanding each other ❤️",

"Supporting each other 🌎",

"All of these 🐧"

],

correct:3

},




{

question:"After all our memories, what do I hope for? ❤️",

answers:[

"More adventures together 🐧",

"More smiles and happiness 😊",

"A lifetime of memories ♾️",

"All of the above ❤️"

],

correct:3

}



];






let currentQuestion = 0;







function loadQuestion(){


let question = document.getElementById("question");

let answers = document.getElementById("answers");

let feedback = document.getElementById("feedback");



feedback.innerHTML="";



if(currentQuestion >= questions.length){


    next("timeline");

    return;

}





question.innerHTML =
questions[currentQuestion].question;



answers.innerHTML="";





questions[currentQuestion].answers
.forEach((answer,index)=>{



let button = document.createElement("button");


button.className="option";


button.innerHTML = answer;





button.onclick=function(){



if(index === questions[currentQuestion].correct){


feedback.innerHTML =
"🐧✨ Perfect! You know our story ❤️";


}

else{


feedback.innerHTML =
"🐧💕 Cute answer... but our little secret is different ❤️";


}




setTimeout(()=>{


currentQuestion++;

loadQuestion();



},1200);



};




answers.appendChild(button);



});



}









let letterText =

"Dear Saku ❤️\n\n"+

"Sometimes the smallest moments become the biggest memories.\n\n"+

"Thank you for every smile, every conversation, and every beautiful moment.\n\n"+

"No matter where life takes us, I hope we always keep finding reasons to smile together.\n\n"+

"Forever waddling with you 🐧❤️";








function typeWriter(){



let box = document.getElementById("type");


box.innerHTML="";


let i=0;



let timer=setInterval(()=>{



box.innerHTML += letterText[i]
.replace("\n","<br>");



i++;



if(i >= letterText.length){


clearInterval(timer);


}



},40);



}









function createHearts(){


setInterval(()=>{



let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";



heart.style.left =
Math.random()*100+"%";



document.body.appendChild(heart);




setTimeout(()=>{


heart.remove();


},5000);



},700);



}




createHearts();