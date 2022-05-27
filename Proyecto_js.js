function telefono_Alerta () {
    return window.alert("La cantidad de dígitos ingresados es inferior a 11");
}
var obtenerDatos = function() {
    var numeroTelefonico = document.getElementById("telefono").value;
    var aux = numeroTelefonico.length;
    if(aux <= 10) {
        telefono_Alerta();
        document.getElementById("telefono").focus();
    }
}



