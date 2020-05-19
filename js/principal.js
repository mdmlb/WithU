const programarBtn = document.getElementById("programarBtn");
const citasBtn = document.getElementById("citasBtn");

programarBtn.addEventListener("click",programar);
citasBtn.addEventListener("click",citas);

function programar(){
    window.location.href="programarCitas.html";
}

function citas(){
    window.location.href="verCitas.html";
}