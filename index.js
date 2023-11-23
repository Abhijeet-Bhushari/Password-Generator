function generate(){
    
}

loginForm = document.getElementById('login-form');

imgEl1 = document.getElementById('img1');
imgEl2 = document.getElementById('img2');
imgEl3 = document.getElementById('img3');
imgEl4 = document.getElementById('img4');

function copyPass(passId){
    passEl = document.querySelector(passId);
    navigator.clipboard.writeText(passEl.textContent);
}

imgEl1.addEventListener('click', (e) => {
    copyPass('#pass1');
});
imgEl2.addEventListener('click', (e) => {
    copyPass('#pass2');
});
imgEl3.addEventListener('click', (e) => {
    copyPass('#pass3');
});
imgEl4.addEventListener('click', (e) => {
    copyPass('#pass4');
});



loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let len = document.getElementById('input');
    let n = Number(len.value);
    console.log(typeof(n), n);
    if(n > 20) n = 20;
    let pass1 = "";
    let pass2 = "";
    let pass3 = "";
    let pass4 = "";
    for(let i = 0; i < n; i++){
        pass1 += String.fromCharCode(33 + Math.floor(Math.random() * 93));
    }
    for(let i = 0; i < n; i++){
        pass2 += String.fromCharCode(33 + Math.floor(Math.random() * 93));
    }
    for(let i = 0; i < n; i++){
        pass3 += String.fromCharCode(33 + Math.floor(Math.random() * 93));
    }
    for(let i = 0; i < n; i++){
        pass4 += String.fromCharCode(33 + Math.floor(Math.random() * 93));
    }
    document.getElementById("pass1").textContent = pass1;
    document.getElementById("pass2").textContent = pass2;
    document.getElementById("pass3").textContent = pass3;
    document.getElementById("pass4").textContent = pass4;
})