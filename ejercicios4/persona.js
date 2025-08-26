class Persona{
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    descripcion(){
        console.log(`me llamo ${this.nombre} tengo ${this.edad} soy ${this.profesion}`)
    }
    esmayorDeEdad(){
        return this.edad >= 18;
    }

}
const p1 = new Persona("ana",24,chef)
p1.presentarse();
console.log(p1.esmayorDeEdad());