
let cc = prompt("Introdu capacitatea cilindrica");
function impozit(cc){
    let totalPlata;
    let fractiuni = cc / 200;
    let sumaMotorMic = Math.ceil(fractiuni) * 8 * 1.15; 
    let sumaMotorMediu = Math.ceil(fractiuni) * 19 * 1.15;
    let sumaMotorMediuDoi = Math.ceil(fractiuni) * 76 * 1.15;
    let sumaMotorMediuTrei = Math.ceil(fractiuni) * 153 * 1.15;
    let sumaMotorMare = Math.ceil(fractiuni) * 308 * 1.15;



    if (cc <= 1000){
        
        totalPlata = sumaMotorMic;
        
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    } else if (cc <= 2000 && cc >= 1601){
        totalPlata = sumaMotorMediu;
    } else if (cc <= 2600 && cc >= 2001){
        totalPlata = sumaMotorMediuDoi;
    } else if (cc <= 3000 && cc >= 2601){
        totalPlata = sumaMotorMediuTrei;
    } else if (cc >= 3001){
        totalPlata = sumaMotorMare;
    } else {
        alert("Nu ati introdus un numar!")
    }
    console.log(totalPlata)
     return totalPlata;
     
}
alert(Math.floor(impozit(cc)));

