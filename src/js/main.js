// Put your game functions/methods in here.
// Think about when you want your functions to be called (on DOM event, on page load, etc.)
var turn = 0;
var symbol = 'X';
var player = 'X';
function check()
{
  if ($('#1').innerHTML() === symbol && $('#2').innerHTML() === symbol && $('#3').innerHTML() === symbol ) 
  {
    $('#1, #2, #3').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#4').innerHTML() === symbol && $('#5').innerHTML() === symbol && $('#6').innerHTML() === symbol ) 
  {
    $('#4, #5, #6').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#7').innerHTML() === symbol && $('#8').innerHTML() === symbol && $('#9').innerHTML() === symbol ) 
  {
    $('#7, #8, #9').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#7').innerHTML() === symbol && $('#4').innerHTML() === symbol && $('#1').innerHTML() === symbol ) 
  {
    $('#7, #4, #1').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#8').innerHTML() === symbol && $('#5').innerHTML() === symbol && $('#2').innerHTML() === symbol ) 
  {
    $('#8, #5, #2').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#9').innerHTML() === symbol && $('#6').innerHTML() === symbol && $('#3').innerHTML() === symbol ) 
  {
    $('#9, #6, #3').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#7').innerHTML() === symbol && $('#5').innerHTML() === symbol && $('#3').innerHTML() === symbol ) 
  {
    $('#7, #5, #3').className = 'won';
    alert(player + ' won!');
  } 
  else if ($('#9').innerHTML() === symbol && $('#5').innerHTML() === symbol && $('#1').innerHTML() === symbol ) 
  {
    $('#9, #5, #1').className = 'won';
    alert(player + ' won!');
  }
  
  else if (turn === 8) 
  {
    alert("You tied!")
  }
  )

  $('#restart').click(function()
{
  $('.square').innerHTML('');
  $('.square').className = ""; 
  // document.getElementById("whatever").className = "";
  turn = 0;
}
