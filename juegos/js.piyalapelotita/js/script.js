document.getElementById(`player`).addEventListener("mouseover", sumarPuntos);

tiempo=60;
puntos=0;
function sumarPuntos(){
puntos++;
document.getElementById("puntos").innerHTML="puntos: <b>"+puntos+"<b>";
  randNum = Math.round(Math.random()*400);
  randNum2 = Math.round(Math.random()*400);
  document.getElementById("player").style.marginTop= randNum + "px";
  document.getElementById("player").style.marginLeft= randNum2 + "px";
}
function restarTiempo(){
   tiempo--;
   document.getElementById("tiempo").innerHTML=" tiempo: "+tiempo; 
}

setInterval(restarTiempo,1000);