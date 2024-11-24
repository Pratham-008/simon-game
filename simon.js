let gameseq = [];
let userseq = [];
let no = ["no1", "no2", "no3", "no4"]

let start = false;
let level = 0;

let text = document.querySelector(".start");
let hs1=document.querySelector(".hs");
console.log("high score:"+hs1.innerHTML)


document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game was started")
        start = true;
        levelup();
    }
})


function levelup() {
    level += 1;
    text.innerHTML = "LEVEL " + level;
    userseq = [];
    let rand = Math.floor(Math.random() * 4);
    let randno = no[rand];
    gameseq.push(randno);
    let randbtn = document.querySelector(`.${randno}`);
    flash(randbtn);
}


function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function uflash(btn) {
    btn.classList.add("uflash")
    setTimeout(function () {
        btn.classList.remove("uflash");
    }, 250);
}

let press = document.querySelectorAll(".v");
for (btnpressed of press) {
    btnpressed.addEventListener("click", btnpress)
}
function btnpress() {
    let btn = this;
    uflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length - 1);
}


function check(idx) {

    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        text.innerHTML = "GAME WAS OVER YOUR SCORE IS LEVEL:" + level + "<br><center>Press Any Key To Re-Start</center>";
        
        if(level>hs1.innerHTML){
           hs1.innerHTML=level
        }
        formatdata();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
    }
}
function formatdata() {
    level = 0;
    start = false;
    userseq = [];
    gameseq = [];
}