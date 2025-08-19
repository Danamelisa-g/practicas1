//Crea una variable llamada nombre que almacene tu nombre y muestra en consola el mensaje 
// "Hola, [nombre]!". Usa concatenaciones.
let nombre ="ana";
console.log("hola," + nombre + "!");//hola ana
//Tienes dos variables con valores diferentes.
//  Debes intercambiar sus valores sin usar una variable temporal.
let x= 5;
let y= 10;
[x,y]=[y,x];
console.log("x:", x);//10
console.log("y:", y);//5

//Declara dos constantes base y altura y calcula el área de un rectángulo
//  (base * altura), sin usar funciones.
const base = 5;
const altura =10;
console.log(base*altura);//50

//3
let precio=100;
let descuento=20;
let preciofinal=precio -(precio * descuento)/100;
console.log(preciofinal);//80

//4
let m=10;
let n=7;
console.log(m>n);//true


//5
let llueve=true;
let paraguas=false;
console.log(llueve && paraguas);//false
console.log(llueve || paraguas);//true


//6
let tengoDinero=false;
let tengoTiempo=true;
console.log(tengoDinero || tengoTiempo);//true


//7
console.log(miVariable);
var miVariable ="hola mundo";
console.log(miVariable);


//8
const num1=10;
const num2=5;

console.log("suma:", num1 + num2);
console.log("resta:", num1 - num2);
console.log("mulpicacion:", num1 * num2);
console.log("divison:", num1/ num2);


//9
let num=5;

console.log(num++);
console.log(num);
console.log(++num);
console.log(num--);


//10
let edad =20;
if(edad >= 18){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}

//11
let nota =85;
if(nota >=90){
    console.log("excelente");
}else if (nota >=70){
    console.log("aprobado");
}else{
    console.log("reprobado");
}