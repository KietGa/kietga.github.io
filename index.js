var myIndex = 0;
var musicBtn = document.getElementById("musicBtn");
var isPlayMusic = false;
var gameArr = document.getElementsByClassName("gameTitle");
var emojiList = ["(✪㉨✪)", " ٩(◕‿◕)۶", "(●´⌓`●)", "(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)", "=＾● ⋏ ●＾="]
var musicList = ["audio/Chunnibyou1.mp3", "audio/Chunnibyou2.mp3", "audio/Chunnibyou3.mp3"];
var audio = new Audio();
setTimeout(carousel, 4000);  

function carousel() {  
  var i;
  var x = document.querySelector(".carousel-control-next")
  console.log(x);
  x.click();
  setTimeout(carousel, 4000);  
}

function RandomGame()
{
  let ran = Math.floor(Math.random() * gameArr.length);
  let ran1 = Math.floor(Math.random() * emojiList.length);
  alert("Try  \"" + gameArr[ran].innerText + "\"  " + emojiList[ran1]);
}

function RandomMusic()
{
  if (!isPlayMusic)
  {
    let ran = Math.floor(Math.random() * musicList.length);
    audio = new Audio(musicList[ran]);
    audio.play();
    isPlayMusic = true;
    musicBtn.innerText = "Stop Music";
  }
  else
  {
    audio.pause();
    isPlayMusic = false;
    musicBtn.innerText = "Random Music";
  }
}