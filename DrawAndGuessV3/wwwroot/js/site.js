// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function changeBg()	{
  
    var backgrounds = [
      "images/hero/video3.gif",
      //"images/hero/video2.gif",
      "https://media3.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif?cid=ecf05e47u7ls0aojskfvob561jutuxu9zoxtjpsir9muu0bg&rid=giphy.gif&ct=g",
      //"https://media2.giphy.com/media/11oauh2CqGIy88/giphy.gif?cid=ecf05e472aunrm8hw6wgwqvcja0wz8my66z37462lxjissct&rid=giphy.gif&ct=g",
      //"https://media3.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=ecf05e47pn094wo235i2e2hclid6wngr6s0mgjoshztpzaqu&rid=giphy.gif&ct=g",
      //"https://media1.giphy.com/media/24pBw18bgHMPu/giphy.gif?cid=ecf05e476z49mzbd58bozf1azqyc3k4ixpt33gfa3jsy75hg&rid=giphy.gif&ct=g",
      "https://media0.giphy.com/media/ckTEmM6DDogYknpvEs/giphy.gif?cid=ecf05e47a9fu3cu85u2b2kaytvbz26h6g7j9j66ab70ryevf&rid=giphy.gif&ct=g", 
      "https://media1.giphy.com/media/xT39D7GQo1m3LatZyU/giphy.gif?cid=ecf05e47hg2cmzruap3hmcm5pyhezcfcgduab8kqneggywb3&rid=giphy.gif&ct=g",
      //"https://media0.giphy.com/media/ObXgWWGHzMlVe/giphy.gif?cid=ecf05e473894c1elb0ngme7h099re21jnapbf7m5i61b1hlm&rid=giphy.gif&ct=g",
       "https://media4.giphy.com/media/HAhv0X86V7nzi/giphy.gif?cid=ecf05e471bp9fv7pd7n8vot9wz40w0vq62zophau9pd8otq5&rid=giphy.gif&ct=g",
       "https://media2.giphy.com/media/12onQxcLlPQdtm/giphy.gif?cid=ecf05e4749v5f368s5lmym7suh02dqop84pht5pizzx07sfg&rid=giphy.gif&ct=g"
     ];
    const imgShown = document.querySelector("#hero");
    var newNumber = Math.floor(Math.random()*backgrounds.length);
    imgShown.style.background = 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('+backgrounds[newNumber]+') top center no-repeat';
    imgShown.style.backgroundSize = 'cover';
    imgShown.style.position = 'relative';
    imgShown.style.paddingTop = '10%';
    imgShown.style.width = '100%';
  
    console.log(imgShown);
  }

  function view(n) {
      style = document.getElementById(n).style;
      drawnguess = document.querySelector("#hero");
      console.log(drawnguess);
      style.display = (style.display == 'block') ? 'none' : 'block';

      if(style.display == 'block'){
        drawnguess.style.paddingTop = '0%'; 
        drawnguess.style.height = '100vh';
      }else {
        drawnguess.style.paddingTop = '10%';  
        drawnguess.style.height = '80vh';
      }
  }

  /* chatbox */

var messages = [], //array that hold the record of each string in chat
lastUserMessage = "", //keeps track of the most recent input string from the user
botMessage = "", //var keeps track of what the chatbot is going to say
botName = '', //name of the chatbot
talking = false; //when false the speach function doesn't work

//edit this function to change what the chatbot says
function chatbotResponse() {
talking = false;
botMessage = "User1 guessed the word!"; //the default message
}

//It controls the overall input and output
function newEntry() {
//if the message from the user isn't empty then run 
if (document.getElementById("chatbox").value !== "") {
  //pulls the value from the chatbox ands sets it to lastUserMessage
  lastUserMessage = document.getElementById("chatbox").value;
  //sets the chat box to be clear
  document.getElementById("chatbox").value = "";
  //adds the value of the chatbox to the array messages
  messages.push("User1: " + lastUserMessage);
  //Speech(lastUserMessage);  //says what the user typed outloud
  //sets the variable botMessage in response to lastUserMessage
  chatbotResponse();
  //add the chatbot's name and message to the array messages
  messages.push("<b>" + botName + "</b> " + botMessage);
  // says the message using the text to speech function written below
  Speech(botMessage);
  //outputs the last few array elements of messages to html
  for (var i = 1; i < 1000; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
  }
}
}

function Speech(say) {
if ('speechSynthesis' in window && talking) {
  var utterance = new SpeechSynthesisUtterance(say);
  speechSynthesis.speak(utterance);
}
}

document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key === 13 || key === 3) {
  //runs this function when enter is pressed
  newEntry();
}
if (key === 38) {
  console.log('hi')
  //document.getElementById("chatbox").value = lastUserMessage;
}
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it

function placeHolder() {
document.getElementById("chatbox").placeholder = "";
}
  
