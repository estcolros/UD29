function reloj() {
    horacompleta = new Date();
    var horas = horacompleta.getHours();
    var minutos = horacompleta.getMinutes();
    var segundos = horacompleta.getSeconds();
    document.getElementById("horas").innerHTML = horas + ":";
    document.getElementById("minutos").innerHTML = minutos + ":";
    document.getElementById("segundos").innerHTML = segundos;
    setTimeout("reloj()", 1000)
}