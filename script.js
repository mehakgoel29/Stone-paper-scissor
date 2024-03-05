let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText='GAME WAS DRAW'
    msg.style.backgroundColor='#081b31';
};
 const showWinner=(userWin,userChoice,compChoice)=>{
       if(userWin){
        userScore++;
        userScorep.innerText=userScore;
        msg.innerText=`You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
       }
       else{
        compScore++;
        compScorep.innerText=compScore;
        msg.innerText=`You loose !! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red';
       }
 }
const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            if (compChoice === 'paper') {
                userWin = false;
                
            }
            else {
                userWin = true;
               
            }
        }
        else if(userChoice === "paper") {
            if (compChoice === 'rock') {
                userWin = true;
        
            }
            else {
                userWin = false;
               
            }
        }
        else if (userChoice=== "scissor"){
            if (compChoice === "rock") {
                userWin = false;
               
            }
            else {
                userWin = true;
                
            } 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


