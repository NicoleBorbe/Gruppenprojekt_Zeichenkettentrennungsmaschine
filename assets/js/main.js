let zeichenkette = document.getElementById("zeichenkette");
let trennung = document.getElementById("trennung");
let davor = document.getElementById("davor");
let danach = document.getElementById("danach");
let vordererTeil = document.getElementById("vordererTeil");
let hintererTeil = document.getElementById("hintererTeil");

function absenden() {

  let x = zeichenkette.value.indexOf(trennung.value);

  if (davor.checked) {
    
    let teil1 = zeichenkette.value.slice(0, x);
    let teil2 = zeichenkette.value.slice(x);
    
    vordererTeil.innerHTML = teil1;
    hintererTeil.innerHTML = teil2;

  } else {

    let y = trennung.value.length;

    let teil1 = zeichenkette.value.slice(0, x + y);
    let teil2 = zeichenkette.value.slice(x + y);
   
    vordererTeil.innerHTML = teil1;
    hintererTeil.innerHTML = teil2;
  }
};
