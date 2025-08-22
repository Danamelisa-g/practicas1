class persona{
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    deswcripcion(){
        console.log(`me llamo ${this.nombre} tengo ${this.edad} soy ${this.profesion}`)
    }
    esmayorDeEdad(){
        return this.edad >= 18;
    }

}