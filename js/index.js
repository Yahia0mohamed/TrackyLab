window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowHeight= window.innerHeight;
        var revTop=reveals[i].getBoundingClientRect().top;
        var revPoints=150;
        if(revTop< windowHeight-revPoints){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize() {
    const usersCountElement = document.getElementById('usersCount');
    const labsCountElement = document.getElementById('labsCount');
    const statsContainer = document.querySelector('.stats');
    statsContainer.classList.add('fade-in');
    setTimeout(() => {
        const usersCount = getRandomInt(1000, 5000);
        const labsCount = getRandomInt(usersCount + 1, 10000);
        usersCountElement.textContent = usersCount;
        labsCountElement.textContent = labsCount;
        statsContainer.classList.remove('fade-in');
    }, 500);
}

// Call the randomize function after a delay
setTimeout(randomize, 1000);


function pageMode(){
    var regButton=document.getElementById('regButton');
    var logButton=document.getElementById('logButton');

    regButton.addEventListener("click",()=>{
        localStorage.setItem("mode",1);
        window.location.href='../html/login-register.html';
    });
    logButton.addEventListener("click",()=>{
        localStorage.setItem("mode",2);
        window.location.href='../html/login-register.html';
    });
}

pageMode();