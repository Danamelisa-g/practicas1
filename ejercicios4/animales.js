class Animales {
    hacerSonido() {
        console.log("sonido de animales");
    }
}

class Perro extends Animales {
    hacerSonido() {
        console.log("Guao guao");
    }
}

class Gato extends Animales {
    hacerSonido() {
        console.log("miau");
    }
}

// instancias con nombres distintos
const miPerro = new Perro();
const miGato = new Gato();

miPerro.hacerSonido(); // Guao guao
miGato.hacerSonido();  // miau