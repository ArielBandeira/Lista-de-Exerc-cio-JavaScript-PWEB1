
var iniciar = document.querySelector("#iniciar");
var zerar = document.querySelector("#zerar");
var parar = document.querySelector("#parar");
var tempo = document.getElementById("tempo").value;
tempo = parseInt(tempo);
var cont;

iniciar.onclick = function() {
    cont = setInterval(function() { inicio() }, 1000);
}

zerar.onclick = function() {
  document.getElementById("tempo").value = 0;
  tempo = 0;
}

parar.onclick = function() {
    clearInterval(cont);
}

function inicio() {
  tempo = eval(tempo + 1);
  document.getElementById("tempo").value = tempo;
}
