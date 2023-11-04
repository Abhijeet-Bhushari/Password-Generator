function generate(){
    
}

loginForm = document.getElementById('login-form');

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