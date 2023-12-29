const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".cont");

function getInitialMode(x){
  if(x==1){
    container.classList.add("sign-up-mode");
    var title=document.getElementById('title');
    title.innerHTML='Register';
  }else{
    container.classList.remove("sign-up-mode");
    var title=document.getElementById('title');
    title.innerHTML='Login';
  }
}

z=localStorage.getItem("mode");
console.log(z);

var reg=document.getElementById('regButton');
reg.addEventListener("click",()=>{
  localStorage.setItem("mode",2);
  location.reload(true);
});
getInitialMode(z);

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  var title=document.getElementById('title');
    title.innerHTML='Register';
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  var title=document.getElementById('title');
    title.innerHTML='Login';
});