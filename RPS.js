let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgContainer=document.querySelector(".msg-container");
const score=document.querySelector(".msg-container");
const score1=document.querySelector("#user-score");
const score2=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const choices=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return choices[randIdx];//getting computer's choice
}
const drawGame=()=>{
    console.log("Game was a draw");
    msg.style.backgroundColor="#081b31";
    msg.innerText="Game Draw";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        msg.innerText=`Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("You win");
        score1.innerText=userScore;
    }else{
        compScore++;
        msg.innerText=`computers ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("You loose");
        score2.innerText=compScore;
    }
}
const playGame=(userChoice)=>{
 console.log(userChoice);
 const compChoice=genCompChoice();
 console.log(compChoice);
 if(userChoice===compChoice){
    drawGame();
 }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
   
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
});