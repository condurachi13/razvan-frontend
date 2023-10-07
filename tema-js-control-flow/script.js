
let tip = prompt("Introdu tipul mijlocului de transport. ex: motocicleta, autobuz, masina, atv, tractor")
let cc = prompt("Introdu capacitatea cilindrica");
let totalPlata;
let fractiuni = cc / 200;
let sumaTractor = Math.ceil(fractiuni) * 22;
let sumaAutobuz = Math.ceil(fractiuni) * 28;
let sumaMotorMic = Math.ceil(fractiuni) * 8; 
let sumaMotocicletaMare = Math.ceil(fractiuni) * 9; 
let sumaMotorMediu = Math.ceil(fractiuni) * 22;
let sumaMotorMediuDoi = Math.ceil(fractiuni) * 85;
let sumaMotorMediuTrei = Math.ceil(fractiuni) * 171;
let sumaMotorMare = Math.ceil(fractiuni) * 345;
function impozit(cc){


    if (tip === "tractor") {
        totalPlata = sumaTractor;
    } else if (cc <= 1600  && tip === "masina") {
        totalPlata = sumaMotorMic;
    } else if (cc <= 1600  && tip === "motocicleta") {
        totalPlata = sumaMotorMic;
    } else if (cc > 1600  && tip === "motocicleta") {
        totalPlata = sumaMotocicletaMare;
    } else if (cc <= 1600  && tip === "atv") {
        totalPlata = sumaMotorMic;
    } else if (cc >= 1601  && tip === "atv") {
        totalPlata = sumaMotocicletaMare;
    } else if (tip === "autobuz") {
        totalPlata = sumaAutobuz;
    } else if (cc <= 2000 && cc >= 1601){
        totalPlata = sumaMotorMediu;
    } else if (cc <= 2600 && cc >= 2001){
        totalPlata = sumaMotorMediuDoi;
    } else if (cc <= 3000 && cc >= 2601){
        totalPlata = sumaMotorMediuTrei;
    } else if (cc >= 3001){
        totalPlata = sumaMotorMare;
    } else {
        return alert("Nu ati introdus un numar!")
    }
    console.log(totalPlata)
     return totalPlata;
}
alert(Math.floor(impozit(cc)) + " RON / an pentru " + tip);