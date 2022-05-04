function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

function changeBg() {
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
    "https://media2.giphy.com/media/12onQxcLlPQdtm/giphy.gif?cid=ecf05e4749v5f368s5lmym7suh02dqop84pht5pizzx07sfg&rid=giphy.gif&ct=g",
  ];
  const imgShown = document.querySelector("#hero");
  const imgShown2 = document.querySelector("#hero2");

  if (imgShown) {
    var newNumber = Math.floor(Math.random() * backgrounds.length);
    imgShown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(" +
      backgrounds[newNumber] +
      ") top center no-repeat";
    imgShown.style.backgroundSize = "cover";
    imgShown.style.position = "relative";
    imgShown.style.paddingTop = "10%";
    imgShown.style.width = "100%";
  } else if (imgShown2) {
    var newNumber2 = Math.floor(Math.random() * backgrounds.length);
    imgShown2.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(" +
      backgrounds[newNumber2] +
      ") top center no-repeat";
    imgShown2.style.backgroundSize = "cover";
    imgShown2.style.position = "none";
    imgShown2.style.paddingTop = "0%";
    imgShown2.style.width = "100%";
  }

  var fiveMinutes = 60,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
}

function view(n) {
  style = document.getElementById(n).style;
  drawnguess = document.querySelector("#hero");
  console.log(drawnguess);
  style.display = style.display == "block" ? "none" : "block";

  if (style.display == "block") {
    drawnguess.style.paddingTop = "0%";
    drawnguess.style.height = "100vh";
  } else {
    drawnguess.style.paddingTop = "10%";
    drawnguess.style.height = "80vh";
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it

// function placeHolder() {
//   document.getElementById("chatbox").placeholder = "";
// }


