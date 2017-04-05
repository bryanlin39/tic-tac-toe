var board = [['X','O',0],[0,'X',0],[0,0,0]]

function winCheck(board, player){
  //check for row wins
  for(i=0;i<3;i++){
    if(board[i][0]===board[i][1]&&board[i][0]===board[i][2]&&board[i][0]!=0){
      if(board[i][0]===player){
        return true;
      }
      else{
        return false;
      }
    }
  }
  //check for column wins
  for(i=0;i<3;i++){
    if(board[0][i]===board[1][i]&&board[0][i]===board[2][i]&&board[0][i]!=0){
      if(board[0][i]===player){
        return true;
      }
      else{
        return false;
      }
    }
  }
  //check for diagonal wins
  if(board[0][0]===board[1][1]&&board[0][0]===board[2][2]&&board[0][0]!=0){
    if(board[0][0]===player){
      return true;
    }
    else{
      return false;
    }
  }
  else if(board[0][2]===board[1][1]&&board[0][2]===board[2][0]&&board[0][2]!=0){
    if(board[0][2]===player){
      return true;
    }
    else{
      return false;
    }
  }
}

var humanPlayer = 'X';
var compPlayer = 'O';
function minimax(board, player){
  var moves = [];
  var scores = [];

  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      if(board[i][j]===0){
        moves.push([i,j])
      }
    }
  }

  if(winCheck(board,humanPlayer)===true){
    scores.push(-10);
  }
  else if(winCheck(board,compPlayer)===true){
    scores.push(10);
  }
  else if(moves.length===0){
    scores.push(0);
  }

  for(i=0;i<moves.length;i++){
    var tempBoard = board.slice();
    tempBoard[moves[i][0]][moves[i][1]]=humanPlayer;
    console.log(tempBoard);
    // minimax(tempBoard,depth);
  }

}
minimax(board,0)
