// Put your game functions/methods in here.
// Think about when you want your functions to be called (on DOM event, on page load, etc.)
var GRID_SIZE = 3;
var grid = [];
var player = 1;

function restart() 
{
  alert("New game!");
  for (var i = 0; i < GRID_SIZE; i++) 
  {
    grid[i] = [];

    for (var j = 0; j < GRID_SIZE; j++) 
    {
      grid[i][j] = 0;
      document.getElementById('TicTacToe-1').className = "";
    }
  }
  player = 1;
}

var table = document.getElementById("TicTacToe-1");
table.addEventListener("click", tableClick();

function tableClick(event) 
{
    var element = event.target;
    if (element && element.tagName === "TD") 
    {
      
       var y = element.cellIndex;
       var x = element.parent.rowIndex;
      alert("cell index " + y + " row index " + x);

       clickCell(element, x, y);
    }
}

function clickCell(cell, x, y) 
{
  alert("i made it in click cell");
  if (grid[x][y] == 0) 
  {
    if (player == 1) 
    {
      cell.className = "x";
      cell.innerHTML = "X";
      grid[x][y] = 1;
      player = 2;
      checkWin(1);
    } 
    else 
    {
      cell.className = "o";
      cell.innerHTML = "O";
      grid[x][y] = 2;
      player = 1;
      checkWin(2);
    }
    alert(cell.innerHTML);
  }
}

function checkWin(symbol)
{
  // var cell = table.rows[y].cells[x];
  if (grid[0][0] === symbol && grid[0][1] === symbol && grid[0][2] === symbol ||
      grid[1][0] === symbol && grid[1][1] === symbol && grid[1][2] === symbol ||
      grid[2][0] === symbol && grid[2][1] === symbol && grid[2][2] === symbol ||
      grid[0][0] === symbol && grid[1][0] === symbol && grid[2][0] === symbol ||
      grid[0][1] === symbol && grid[1][1] === symbol && grid[2][1] === symbol ||
      grid[0][2] === symbol && grid[1][2] === symbol && grid[2][2] === symbol ||
      grid[0][0] === symbol && grid[1][1] === symbol && grid[2][2] === symbol ||
      grid[0][2] === symbol && grid[1][1] === symbol && grid[2][0] === symbol )
  {
      alert(symbol + " won!");
      restart();
  }
}
  
  
