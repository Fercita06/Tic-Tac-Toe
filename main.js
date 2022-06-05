const tiles = document.querySelectorAll(".container__tile");
console.log(tiles);
const buttonReset = document.getElementById("button-reset");

// assign a value to each player.

let player = "X";


// create an array to store all the moves done by both players
let player1 = [];
let player2 = [];
let allInputs = [];

/*indexes within the board
[1,2,3],
[4,5,6],
[7,8,9],
*/

const winningConditions = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"],
  ["3","6","9"],
  ["1","4","7"],
  ["2","5","8"],
  ["7","5","3"],
  ["1","5","9"],

];

tiles.forEach((tile, index) => {
  tile.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
   
    if (player === "X"){
      tile.innerText="X";
      console.log(event.target);
      tile.classList.add ("player1");
      allInputs.push(event.target.id)
      player1.push(event.target.id);
      player = "O";
      checkWinner(player1, "player1");
    }else {
      tile.innerHTML = "O";
      tile.classList.add ("player2");
      allInputs.push(event.target.id);
      player2.push(event.target.id);
      checkWinner(player2, "player2");
      player = "X";
      
    }
    
  }) 
});



const checkWinner = (player,playerName) =>{
 let isPlayerWinning = winningConditions.map(condition => condition.every(number => (player.includes(number)) ));
 console.log(isPlayerWinning);
 
  if(isPlayerWinning.includes(true)){
    alert(`${playerName} won`);
    setTimeout(function() {
      resetGame();
    }, 1500);
  }else if(!isPlayerWinning.includes(true) && allInputs.length == 9){
    alert("It is a draw");
    setTimeout(function() {
      resetGame();
    }, 1500);
  }

}

const resetGame = () => {
  player1=[];
  player2=[];
  allInputs=[]; 
  player = "X";

  tiles.forEach((tile) => {
   tile.innerText = ""; 
});
}

buttonReset.addEventListener("click", resetGame);










