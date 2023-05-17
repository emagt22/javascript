function suma(a,b){
    let s;
    s =  a+b;
    return s;
}

function promedio(num,cant){
    let prom;
    prom = num/cant;
    return prom;
}

function mensajePromedio(prom, nombre){
    alert("El promedio de la materia " + nombre + " es de "+ prom);
}

var materia = prompt("Nombre de la Materia?")
let cantNotas = prompt("Cantidad de Notas a ingresar?");
let nota=0;
let sum=0;

if(cantNotas > 0){
    for (let index = 1; index <= cantNotas; index++) {
        if(nota < 0){
            alert("Error, la nota no puede ser negativa. Volver a empezar");
        }
        nota = parseInt(prompt("Ingrese la " + index + " nota: "));
        alert(sum);  
        sum = suma(sum,nota);   
        alert(sum);  
    }

    mensajePromedio(parseFloat(promedio(sum,cantNotas)),materia);
}
else{
    alert("Por favor ingrese un valor de cantidad positiva");
}