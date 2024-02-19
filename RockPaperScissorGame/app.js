let userScore=0
let compScore=0
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const choises = document.querySelectorAll(".choise")
const msg = document.querySelector("#msg")
const generateCompChoise= ()=>{
    const options = ["rock", "paper", "scissors"]
    const randInx=Math.floor(Math.random()*3)
    return options[randInx]
}
const showWinner= (userWin, uchoise, compChoise)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`You win! Your ${uchoise} beats ${compChoise}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore
        console.log("you lose")
        msg.innerText=`You Lose ${compChoise} beats Your ${uchoise}`
        msg.style.backgroundColor="red"
    }
}
const drawGame=()=>{
    console.log("game was a draw")
    msg.innerText="Game was a draw play again"
    msg.style.backgroundColor="#081b31"
}

const playGame=(uchoise)=>{
    console.log("User choise = " , uchoise)
    //generate computer choise
    const compChoise= generateCompChoise();
    console.log("CompCHoise = ", compChoise)
    if(uchoise===compChoise){
        //draw game
        drawGame()
    }else{
        let userWin = true;
        if(uchoise==="rock"){
            //sicssors paper
            userWin=compChoise==="paper"? false:true
        }else if(uchoise==="paper"){
            //rock sicssors
            userWin=compChoise==="scissors"?false:true
        }else{
            //rock paper
            userWin=compChoise==="rock"?false:true
        }
        showWinner(userWin, uchoise, compChoise)
    }
}

choises.forEach((choise)=>{
    choise.addEventListener("click", ()=>{
        const uchoise=choise.getAttribute("id")
        playGame(uchoise)
    })
})