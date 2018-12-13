( function() {

//Game Variables

//a random number... to be generated.
   
var  doorNum=0;  
//player's guess
var playerGuess=0;
//how much health does the player have
var health=100;
//update the display after each guess
var currentStatus=""; 
   var isGuessCorrect=false;
 
   
var input =document.querySelector("#guessbox");
var output=document.querySelector("#output");

var button=document.querySelector("#submit");
button.addEventListener("click",onGuessSubmit,false);

window.addEventListener("keydown",onEnterPressed,false);

startGame();//initializes the game with a random number

function startGame()
{
   //Generates a number for doors between 1 to 8
    doorNum= Math.floor(Math.random()*8)+1;
  
    console.log("Correct door is: "+doorNum);      
}
    
function onEnterPressed()
{
    if(event.keyCode==13)
        checkNumber();
}
    
function onGuessSubmit()
{
 checkNumber();
}
 
   
function checkNumber()
    {
     playerGuess=parseInt(input.value);  
    if(isNaN(playerGuess) || playerGuess>8)
        output.innerHTML="Bro you blind? Only 8 doors exist <br> Choose a door 1-8 if you know how to read";
    else  playGame();      
    }
    
 
function playGame()
    {
  
    updateGameStatus();
       
        if(playerGuess!=doorNum)
            output.innerHTML="oof ouch you got hurt <br>"+currentStatus;
        else 
        {     
            isGuessCorrect=true;          
        }
        
if(health<=0||isGuessCorrect)endGame();
        
    }
    
    
    function endGame()
    {
            
        if(isGuessCorrect)
        {
          output.innerHTML=" Wowee you aren't a total loser!";  
         }
        else if(!isGuessCorrect && health == 0)
            output.innerHTML=" YOU DIED ";
       
button.removeEventListener("click",onGuessSubmit,false);
        
window.removeEventListener("keydown",onEnterPressed,false);
 
        button.disabled=true;
        input.disabled=true;
    }
    
    function updateGameStatus()
    {
     //Decreases health by 25 
        health = health - 25;
        
    currentStatus="You took damage. You have "+health+" health left"
            
            
        
    }
    
    
    
}());