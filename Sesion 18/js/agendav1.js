function guardardatos (){
localStorage.nombre = document.getElementById ("nombre").value;
localStorage.movil = document.getElementById ("movil").value;
}

function recuperardatos (){
if ((localStorage.nombre != undefined) && (localStorage.movil != undefined)){
    document.getElementById("datos").innerHTML = "Nombre:" + localStorage.nombre + "<br> num. de celular:" + localStorage.movil;

 } else {
    document.getElementById("datos").innerHTML = "No has ingresado tus datos en la agenda";
    }
}
