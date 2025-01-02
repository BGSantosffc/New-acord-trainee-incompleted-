let acorde = document.getElementById("acordeTocar");
let sustenido = document.getElementById("sustenido");
let intervalo = document.getElementById("intervalo");
let maiores = document.getElementById("maiores")
let menores = document.getElementById("menores")
let numAcorde
let sustenidoAtivada = true;
let MaioresAtivada = true;
let MenoresAtivada = true;


let tempointervalo = prompt("Qual será o intervalo? (min 1s | max 10s)")
if(tempointervalo == null){
  tempointervalo = 5
}
while(isNaN(tempointervalo) && tempointervalo != null  || tempointervalo != null & tempointervalo > 10 || tempointervalo != null & tempointervalo  < 1) {
  tempointervalo = prompt("Qual será o intervalo? (min 1s | max 10s)")
}

function trocarAcorde(){

  if(MaioresAtivada == true && MenoresAtivada == true && sustenidoAtivada == true){
    numAcorde = Math.floor(Math.random() * 25) + 1
    if(numAcorde == 1){
      acorde.innerHTML = "C"
    }
    if(numAcorde == 2){
      acorde.innerHTML = "D"
    }
    if(numAcorde == 3){
      acorde.innerHTML = "E"
    }
    if(numAcorde == 4){
      acorde.innerHTML = "F"
    }
    if(numAcorde == 5){
      acorde.innerHTML = "G"
    }
    if(numAcorde == 7){
      acorde.innerHTML = "A"
    }
    if(numAcorde == 8){
      acorde.innerHTML = "B"
    }
    if(numAcorde == 9){
      acorde.innerHTML = "Cm"
    }
    if(numAcorde == 10){
      acorde.innerHTML = "Dm"
    }
    if(numAcorde == 11){
      acorde.innerHTML = "Em"
    }
    if(numAcorde == 12){
      acorde.innerHTML = "Fm"
    }
    if(numAcorde == 13){
      acorde.innerHTML = "Gm"
    }
    if(numAcorde == 14){
      acorde.innerHTML = "Am"
    }
    if(numAcorde == 15){
      acorde.innerHTML = "Bm"
    }
    if(numAcorde == 16){
      acorde.innerHTML = "C#"
    }
    if(numAcorde == 17){
      acorde.innerHTML = "D#"
    }
    if(numAcorde == 18){
      acorde.innerHTML = "F#"
    }
    if(numAcorde == 19){
      acorde.innerHTML = "G#"
    }
    if(numAcorde == 20){
      acorde.innerHTML = "A#"
    }
    if(numAcorde == 21){
      acorde.innerHTML = "C#m"
    }
    if(numAcorde == 22){
      acorde.innerHTML = "D#m"
    }
    if(numAcorde == 23){
      acorde.innerHTML = "F#m"
    }
    if(numAcorde == 24){
      acorde.innerHTML = "G#m"
    }
    if(numAcorde == 25){
      acorde.innerHTML = "A#m"
    }
    
  }
    //Maiores on / Menores on / Sustenido off
  if(MaioresAtivada == true && MenoresAtivada == true && sustenidoAtivada == false){
      numAcorde = Math.floor(Math.random() * 15) + 1
      if(numAcorde == 1){
        acorde.innerHTML = "C"
      }
      if(numAcorde == 2){
        acorde.innerHTML = "D"
      }
      if(numAcorde == 3){
        acorde.innerHTML = "E"
      }
      if(numAcorde == 4){
        acorde.innerHTML = "F"
      }
      if(numAcorde == 5){
        acorde.innerHTML = "G"
      }
      if(numAcorde == 7){
        acorde.innerHTML = "A"
      }
      if(numAcorde == 8){
        acorde.innerHTML = "B"
      }
      if(numAcorde == 9){
        acorde.innerHTML = "Cm"
      }
      if(numAcorde == 10){
        acorde.innerHTML = "Dm"
      }
      if(numAcorde == 11){
        acorde.innerHTML = "Em"
      }
      if(numAcorde == 12){
        acorde.innerHTML = "Fm"
      }
      if(numAcorde == 13){
        acorde.innerHTML = "Gm"
      }
      if(numAcorde == 14){
        acorde.innerHTML = "Am"
      }
      if(numAcorde == 15){
        acorde.innerHTML = "Bm"
      }
    

    }
  //Maiores on / Menores off / Sustenido off
  if(MaioresAtivada == true && MenoresAtivada == false && sustenidoAtivada == false){
      numAcorde = Math.floor(Math.random() * 8) + 1
      if(numAcorde == 1){
        acorde.innerHTML = "C"
      }
      if(numAcorde == 2){
        acorde.innerHTML = "D"
      }
      if(numAcorde == 3){
        acorde.innerHTML = "E"
      }
      if(numAcorde == 4){
        acorde.innerHTML = "F"
      }
      if(numAcorde == 5){
        acorde.innerHTML = "G"
      }
      if(numAcorde == 7){
        acorde.innerHTML = "A"
      }
      if(numAcorde == 8){
        acorde.innerHTML = "B"
      }
  


    }
  }

sustenido.addEventListener("click", desativarSustenidos)

function desativarSustenidos(){
  if(sustenidoAtivada == true){
    sustenidoAtivada = false;
  
    sustenido.innerHTML = "Ativar Sustenidos"
    return 
  }
  if(sustenidoAtivada == false){
    sustenidoAtivada = true;
  
    sustenido.innerHTML = "Desativar Sustenidos"
  }
}

menores.addEventListener("click", desativarMenores)

function desativarMenores(){
  if(MenoresAtivada == true){
    MenoresAtivada = false;

    menores.innerHTML = "Ativar Menores"
    return 
  }
  if(MenoresAtivada == false){
    MenoresAtivada = true;

    sustenido.innerHTML = "Desativar Menores"
  }
}

setInterval(trocarAcorde, tempointervalo * 1000)
  
