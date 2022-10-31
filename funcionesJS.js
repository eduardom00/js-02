let miNom="Eduardo Morón Medina";
console.log(miNom);

function miFuncion(){
    let nombre = "Eduardo"
    console.log(nombre);
}
miFuncion();

function funcion1(){
    let valor = 2;
    valor=valor+3;
    return valor;
}
let resultado = funcion1();
console.log("El resultado del valor es: "+ resultado);

function funcion2(){
    let nvalor = 2;
    nvalor+=3;
    console.log(nvalor);
}
funcion2()

let variableGlobal =5;
function funcion3 () {
    let variablelocal ="El valor es: ";
    console.log(variablelocal + variableGlobal);    
}
funcion3()
//Function estandar
function funcion4(valor) {
    let numero = 6;
    numero = numero*valor;
    return numero;
}
let salida = funcion4(2);
console.log("El producto es " + salida);

// Funciones anónimas
let miFuncion0= function (parametro){
    parametro=parametro * 2;
    return parametro;
}
console.log("Llamando a la función anónima "+ miFuncion0(5));

let funcion01 = function (caracteres){
    return "Hola "+ caracteres;
}(" Lunes ");
console.log("El resultado es: "+funcion01);
// Flecha
let suma = (x,y) => {return x+y};
let resultado1 = suma (9,3)
console.log(resultado1);

/*Realizar una funcion (calcularPrecioTotal)
para Calcular el precio total de una compra tomando encuenta 
impuestos = 1.16, gartos de envio = 10, y como parametro el precio
donde 
precioTotal = (precio * impuesto ) + gartosEnvio;

como salida precio Total
precioTotal = calcularPrecioTotal(23.34);*/
//Funcion estándar
function calcularPrecioTotal0(precio) {
    let impuestos1 = 1.16;
    let gastosEnvio = 10;
    let precioTotal0 = (precio*impuestos1)+gastosEnvio;
    return precioTotal0;
}
let precioTotal0=calcularPrecioTotal0(23.34)
console.log(precioTotal0); 
//Funcion Anónima
let calcularPrecioTotal1=function(precio){
    let impuestos = 1.16;
    let gastoEnvio = 10;
    let precioTotal = (precio*impuestos)+gastoEnvio;
    return precioTotal
}
let precioTotal = calcularPrecioTotal1(23.34)
console.log(precioTotal);

//Función flecha
let calcularPrecioTotal2=(precio) => {return (precio*1.16)+10};
let preciototal2 = calcularPrecioTotal2 (23.34)
console.log(preciototal2);
//Incluir impuestos funcion estandar
function calcularPrecioTotal5(precio,impuestos1) {
    let gastosEnvio = 10;
    let precioTotal0 = (precio*(impuestos1)+gastosEnvio);
    return precioTotal0;
}
let precioTotal5=calcularPrecioTotal5(23.34,1.04)
console.log(precioTotal5);
//funcion flecha
let calcularPrecioTotal6=(precio,impuestos) => {return (precio*impuestos)+10};
let preciototal6 = calcularPrecioTotal6 (23.34,1)
console.log(preciototal6);

let miObjeto={
    nombre: "Juan",
    edad: 30
}
let mensaje = "tu nombre es " + miObjeto.nombre
mensaje+= " tienes " + miObjeto.edad+ " años"
console.log(mensaje);