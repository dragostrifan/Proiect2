const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};


window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
  
};



let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#6e54fa ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var sessios = document.getElementById("session");

  if(hrs >= 12){
    session.innerHTML = "PM"; 
  }else{
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 10);


let formBtn = document.querySelector("#login-btn")
let loginForm = document.querySelector(".login-form-container")
let formClose = document.querySelector("#form-close")

formBtn.addEventListener("click", () =>{
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () =>{
  loginForm.classList.remove("active"); 
}); 




