
function impozit(cc){
    let totalPlata;
    let fractiuni = cc / 200;
    let sumaMotorMic = Math.ceil(fractiuni) * 8 * 1.15; 
    let sumaMotorMediu = Math.ceil(fractiuni) * 19 * 1.15;



    if (cc <= 1000){
        
        totalPlata = sumaMotorMic;
        
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    } else if (cc <= 1600 && cc >= 1001){
        totalPlata = sumaMotorMic;
    }
    console.log(totalPlata)
     return totalPlata;
     
}
impozit(1602);

