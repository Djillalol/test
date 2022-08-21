    //declaring variables
    const audio = new Audio();
    audio.src = "mp3/typing.wav";
    const music = new Audio();
    music.src = "mp3/omega.mp3";
    const svg = document.getElementById("Play animation");
    const msvg = document.getElementById("mainsvg");
    let g = document.getElementById("g");
    let path = document.getElementById("path");
    let boy = document.getElementById("boy");
    let main = document.querySelector(".main");
    let bt = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let effect = document.getElementById("text");
    let i = 0,
      text;
    text = "Hi, i am Iratni Djillali an animator.";
    let splashScreen = document.querySelector(".splash");


    //disabling buttons and typing first dialogue
    disable();
    splashScreen.addEventListener("click", op);

    //functions to enable/disable buttons
    function disable() {
      bt.disabled = true;
      bt.hidden = true;
      bt2.disabled = true;
      bt2.hidden = true;
    }
    function enable() {
      bt.disabled = false;
      bt.hidden = false;
      bt2.disabled = false;
      bt2.hidden = false;
    }
    //splash
    function op() {
      splashScreen.style.opacity = 0;
      setTimeout(first, 2100);
      main.style.display = "flex";
      setTimeout(() => {
        splashScreen.classList.add("hidden");
      }, 610);
    }
    //last dialogue
    function end() {
      bt.style.display = "none";
      bt2.style.display = "none";
    }

    //function for typing effect
    function typing() {
      if (i < text.length) {
        audio.play();
        effect.innerHTML += "<span>" + text.charAt(i) + "</span>";
        i++;
        setTimeout(typing, 50);
      }
      if (i === text.length) {
        enable();
        audio.pause();
        
      }
      
    }
    //first dialogue
    function first() {
      //music.play();
      boy.setAttribute("src", "images/john-magallanes-kid-idle.gif");
      disable();
      i = 0;
      typing();
    }

    //Cringe function
    function friend() {
      disable();
      i = 0;
      effect.innerHTML = "";
      text =
        "Hey, it's fine we can still be friends check my infos in about me, maybe we have stuff in common!";
      typing();
      end();
    }

    //function to tell ppl about my skills
    function tell() {
      disable();
      i = 0;
      effect.innerHTML = "";
      text =
        " If you already have a model and you need rigging, paintweighting, or animation, then you've come to the right place! I also make personal websites If you are interested.";
      bt.innerHTML = "let's do business!";
      bt2.innerHTML = "do u like potatoes?";
      bt2.setAttribute("onclick", "death()");
      bt.setAttribute("onclick", "hire()");
      typing();
    }

    //function to invite ppl to hire me
    function hire() {
      disable();
      effect.innerHTML = "";
      i = 0;
      text =
        " You can hire me by clicking on work in the top right of the page.";
      boy.setAttribute("src", "images/john-magallanes-kid-jump.gif");
      typing();
      end();
    }

    //function that kills u
    function death() {
      disable();
      effect.innerHTML = "";
      i = 0;
      text = "SO YOU'VE CHOSEN DEATH!!";
      boy.setAttribute("src", "images/john-magallanes-kid-kick.gif");
      typing();
      end();
    }


    //function that does nothing
    function nothing() {}