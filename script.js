function unlock(){

    let password=document.getElementById("pass").value;

    if(password==="W"){

        next("welcome");

    }
    else{

        document.getElementById("error").innerHTML=
        "🐧 Wrong secret! Try again ❤️";

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
question:"Who is the cutest penguin? 🐧",
answers:[
"Me 😌",
"You 🥰",
"Both of us ❤️",
"Our penguin babies 😂"
]
},


{
question:"If we were penguins what would we do?",
answers:[
"Hold flippers ❤️",
"Eat fish 🐟",
"Waddle everywhere 🐧",
"All of the above 💕"
]
},


{
question:"Where would our penguin adventure be?",
answers:[
"Beach 🏖️",
"Mountains 🏔️",
"Anywhere with you ❤️",
"City lights 🌃"
]
},


{
question:"My favourite nickname?",
answers:[
"Saku ❤️",
"Bebo 🥰",
"Penguin Queen 🐧",
"All of them 💖"
]
}

];



let currentQuestion=0;



function loadQuestion(){


let question=document.getElementById("question");

let answers=document.getElementById("answers");


if(currentQuestion>=questions.length){

    next("timeline");

    return;

}


question.innerHTML=
questions[currentQuestion].question;


answers.innerHTML="";


questions[currentQuestion].answers.forEach(answer=>{


let button=document.createElement("button");

button.className="option";

button.innerHTML=answer;


button.onclick=function(){

    currentQuestion++;

    loadQuestion();

};


answers.appendChild(button);


});


}





let letterText=

"Dear Saku ❤️\n\n"+
"Sometimes the smallest moments become the biggest memories.\n\n"+
"Thank you for every smile, every conversation, and every beautiful moment.\n\n"+
"No matter where life takes us, I hope we always keep finding reasons to smile together.\n\n"+
"Forever waddling with you 🐧❤️";



function typeWriter(){

    let box=document.getElementById("type");

    box.innerHTML="";


    let i=0;


    let timer=setInterval(()=>{


        box.innerHTML += letterText[i]
        .replace("\n","<br>");


        i++;


        if(i>=letterText.length){

            clearInterval(timer);

        }


    },40);

}





function createHearts(){

setInterval(()=>{


let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},5000);



},700);


}


createHearts();