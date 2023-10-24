let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");

let arr = [];
var randomNumber;
let check = 1;
let level = 1;
document.addEventListener("keypress", function () {
  if (check) {
    randomNumber = Math.floor(Math.random() * 4 + 1);
    arr.push(randomNumber);
    if (randomNumber === 2) {
      playButton(red);
    } else if (randomNumber === 1) {
      playButton(green);
    } else if (randomNumber === 3) {
      playButton(yellow);
    } else {
      playButton(blue);
    }
    check = 0;
    document.getElementById('level-title').innerText = "Level " + level;
  }
});

let i = 0;

function playButton(button) {
  button.classList.add("pressed");
  var audio;

  if (button.id === "red") {
    audio = new Audio("sounds/red.mp3");
  } else if (button.id === "green") {
    audio = new Audio("sounds/green.mp3");
  } else if (button.id === "yellow") {
    audio = new Audio("sounds/yellow.mp3");
  } else if (button.id === "blue") {
    audio = new Audio("sounds/blue.mp3");
  }

  if (audio) {
    audio.play();
  }

  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

// Event listeners for buttons
document.getElementById("red").addEventListener("click", function () {
  if (arr.length === 0 || arr[i] !== 2) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("game-over");

    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 100);
    arr = [];
    i = 0;
    check = 1;
    document.getElementById('level-title').innerText = "Game Over, Press any key to restart!";
    level=1;
  } else if (arr[i] === 2) {
    playButton(this);
    i++;
  }
  if (i === arr.length && check == 0) {
    i=0;
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 4 + 1);
      arr.push(randomNumber);
      if (randomNumber === 2) {
        playButton(red);
      } else if (randomNumber === 1) {
        playButton(green);
      } else if (randomNumber === 3) {
        playButton(yellow);
      } else {
        playButton(blue);
      }
      level++;
      document.getElementById('level-title').innerText = "Level " + level;
    },1000);
  }
});

document.getElementById("green").addEventListener("click", function () {
  if (arr.length === 0 || arr[i] !== 1) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("game-over");

    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 100);
    arr = [];
    i = 0;
    check = 1;
    document.getElementById('level-title').innerText = "Game Over, Press any key to restart!";
    level=1;
    
  } else if (arr[i] === 1) {
    playButton(this);
    i++;
  }
  if (i === arr.length && check == 0) {
    i=0;
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 4 + 1);
      arr.push(randomNumber);
      if (randomNumber === 2) {
        playButton(red);
      } else if (randomNumber === 1) {
        playButton(green);
      } else if (randomNumber === 3) {
        playButton(yellow);
      } else {
        playButton(blue);
      }
      level++;
      document.getElementById('level-title').innerText = "Level " + level;
    },1000);
  }
});

document.getElementById("yellow").addEventListener("click", function () {
  if (arr.length === 0 || arr[i] !== 3) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("game-over");

    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 100);
    arr = [];
    i = 0;
    check = 1;
    document.getElementById('level-title').innerText = "Game Over, Press any key to restart!";
    level=1;
  } else if (arr[i] === 3) {
    playButton(this);
    i++;
  }
  if (i === arr.length && check == 0) {
    i=0;
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 4 + 1);
      arr.push(randomNumber);
      if (randomNumber === 2) {
        playButton(red);
      } else if (randomNumber === 1) {
        playButton(green);
      } else if (randomNumber === 3) {
        playButton(yellow);
      } else {
        playButton(blue);
      }
      level++;
      document.getElementById('level-title').innerText = "Level " + level;
    },1000);
  }
});

document.getElementById("blue").addEventListener("click", function () {
  if (arr.length === 0 || arr[i] !== 4) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("game-over");

    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 100);
    arr = [];
    i = 0;
    check = 1;
    document.getElementById('level-title').innerText = "Game Over, Press any key to restart!";
    level=1;
  } else if (arr[i] === 4) {
    playButton(this);
    i++;
  }
  if ((i === arr.length) & (check == 0)) {
    i=0;
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 4 + 1);
      arr.push(randomNumber);
      if (randomNumber === 2) {
        playButton(red);
      } else if (randomNumber === 1) {
        playButton(green);
      } else if (randomNumber === 3) {
        playButton(yellow);
      } else {
        playButton(blue);
      }
      level++;
      document.getElementById('level-title').innerText = "Level " + level;
    },1000);
  }
});
