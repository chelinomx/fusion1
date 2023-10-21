
function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [
  "Welcome.",
  "Hello!",
  "Does this thing even work?",
  "What's Google Sites?",
  "Made with HTML!",
  "You get a cookie!",
  "Uses some javascript",
  "10/10",
  "nahhhh bro fell asleep again 💀",
  "Written by ChatGPT!",
  "1 + 1 = 3",
  "Welcome to v2.0!",
  "👍",
  "whoever made this website is cool",
  "New update???",
  "This is a test message!",
  "Remember v1.0?",
  "i forgor",
  "i rember",
  "We're the website your friends are talking about.",
  "We're the website you'll never forget.",
  "Error 404: text not found.",
  "Click 'Get Started'",
  "ima go to sleep",
  "insert text here",
  "3kh0 is just so cool!",
  "thx stackoverflow!",
  "work n progress",
  "I just saved myself 150 bucks.",
  "You got games on your phone?",
  "Math is kinda boring",
  "Site to cure boredness",
  "reload for another message",
  "Get ready for an unforgettable experience on our website. It's going to be a blast!",
  "Toss the Turtle is pretty fun",
  "Don't blink!",
  "Made you look!",
  "games games games", 
  "no",  
  "more than 100 games!",
  "Do your work!",
  "Made with love",
];
console.log("[INFO] " + say.length + " splash texts were loaded!")

var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
