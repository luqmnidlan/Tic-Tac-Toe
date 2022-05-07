/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    return board[position] = mark
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    console.log(board[1] + " | " + board[2] + " | " + board[3] )
    console.log("---------")
    console.log(board[4] + " | " + board[5] + " | " + board[6] )
    console.log("---------")
    console.log(board[7] + " | " + board[8] + " | " + board[9] )
    
    

}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    let pos = parseInt(position)
    if(pos == NaN){
        return false
    }
    else if (pos < 1 || pos > 9){
        return false
    }
    else if(board[pos] != ' '){
        return false
    }else{
        return true
    }

}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (let item of winCombinations){
        if (board[item[0]] == player && board[item[1]] == player && board[item[2]] == player){
            return true
        }
           
    }return false 

}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (item in board){
        if (board[item] == ' '){
            return false
        }
        
    }return true
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    
    console.log("Hi " + player + ", it's your turn!")
    var pos = prompt("Enter a position (1-9)")
    if (validateMove(pos) == false){
        console.log("invalid move")
        var pos = prompt("Enter a position (1-9)")
        }
    while(validateMove(pos) == true){
        markBoard(pos, player)
        printBoard()        
        }
    if (checkWin(player) == true){
        return player
    }else if (checkFull() == true){
        return 'tie'
    }
    
    player = "0"
    console.log("Hi " + player)
    var pos = prompt("Enter a position (1-9)")
    if (validateMove(pos) == false){
        console.log("invalid move")
        var pos = prompt("Enter a position (1-9)")
        }
    while(validateMove(pos) == true){
        markBoard(pos, player)
        printBoard()        
        }
    if (checkWin(player) == true){
        return player
    }else if (checkFull() == true){
        return 'tie'
    }
    

}

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'



while (!winnerIdentified){
    let a = playTurn(currentTurnPlayer);
    // // feel free to add logic here if needed, e.g. announcing winner or tie
    
    if (a == 'X'){
        console.log("Player " + a + " win! Congratulations!!")
        var c = prompt("Do you want to play again? (Y/N)")
        if (c == 'Y'){
            winnerIdentified = false
            for (item in board){
                board[item] = ' '
            }
        }else if (c == 'N'){
            winnerIdentified = true
        }else{
            console.log("Invalid value")
            winnerIdentified = true    
        }
    }
    if (a == '0'){
        console.log("Player " + a + " win! Congratulations!!")
        var c = prompt("Do you want to play again? (Y/N)")
        if (c == 'Y'){
            winnerIdentified = false
            for (item in board){
                board[item] = ' '
            }
        }else if (c == 'N'){
            winnerIdentified = true
        }else{
            console.log("Invalid value")
            winnerIdentified = true    
        }
        
    }
    if(a == 'tie'){
        console.log("It's a tie, no one wins")
        var c = prompt("Do you want to play again? (Y/N)")
        if (c == 'Y'){
            winnerIdentified = false
            for (item in board){
                board[item] = ' '
            }
        }else if (c == 'N'){
            winnerIdentified = true
        }else{
            console.log("Invalid value")
            winnerIdentified = true    
        }
    }
   
}console.log("Thank you for playing!!")

