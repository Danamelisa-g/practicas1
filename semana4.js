//creacion de objectos
//literales por medio de llaves 
const persona ={
    nombre: "Juan", //string o clave
    edad: 30,
    profesion: "Ingeniero"};
//niveles privados,publicos y protegidos.
    //molde class 
    class Persona{
        //constructor hay en en las clases
        //configuraciones iniciales
        constructor(nombre,edad,profesion){
            this.nombre = nombre; 
            this.edad = edad;
            this.profesion = profesion;
            this._password = "1234"; //esto es semiprivado
        }
    //funciones o metodos ejemplo (abajo)
    hablar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo la profesion de ${this.profesion}`);
    }
    //ejemplo de la contrasena
    get _password(){
        return this._password;
    }
    set edad(nuevaedad){//especico un parametro
        if(nuevaedad > 0){
            this._edad = nuevaedad;
        } else {
            console.error("La edad debe ser mayor que 0");
        }
    }
}
const kevin = new Persona("kevin", 25, "Disenador"); //parametros - este ejectuta el metdod del constructor

//las classes estandarizan las caracteristicas del objecto 
//esto hace que podamos modificar las caracteristas de otros objectos
console.log(kevin.hablar());
kevin.hablar();


//la barra baja significa que es privado

//herencia de clases
class empleado extends Persona {
    constructor(nombre, edad, profesion, salario) {
        super(nombre, edad, profesion); //super va ejectur el lo que hay en personas 
        this.salario = salario;
    }
    estudiar() {
        console.log(`${this.nombre} está estudiando.`);
    }
}