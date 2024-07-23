// function that returns a random choice between rock, paper, and scissor

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your call between rock,paper or scissor");
    if (choice == "scissor") {
        return "scissor";
    } else if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else {
        alert("Invalid Input!!!");
    }
}

let HumanScore = 0;

let ComputerScore = 0;

function playRound(HumanSelection, ComputerSelection) {
    if (HumanSelection == ComputerSelection) {
        alert("It's a tie!");
    } else if (HumanSelection == "scissor" && ComputerSelection == "paper") {
        alert("You've won!");
        HumanScore += 1;
    } else if (HumanSelection == "paper" && ComputerSelection == "rock") {
        alert("You've won!");
        HumanScore += 1;
    } else if (HumanSelection == "rock" && ComputerSelection == "scissor") {
        alert("You've won!");
        HumanScore += 1;
    } else {
        alert("Oh no! Your lost")
        ComputerScore += 1;
    }
    
}

function PlayGame() {
    for (let round = 1; round <= 5; round++) {
        alert(`Round ${round}! Please make your selection`);

        const human_choice = getHumanChoice();

        const computer_choice = getComputerChoice();

        playRound(human_choice, computer_choice);

        alert(`Good fight! The score is currently ${HumanScore} to ${ComputerScore}`);
    }
}

PlayGame();