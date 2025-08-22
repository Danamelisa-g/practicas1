class Coches {
    constructor(marca, modelo, year) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
    mostrarInformacion(){
        
        console.log(`tu marca es: ${this.marca} el modelo es ${this.modelo} y su año ${this.year}`)
    }
    antiguo(){
        return this.year < 2000;
    }
    deLujo() {
        const marcasDeLujo = ["mercedes", "bmw", "audi"];
        return marcasDeLujo.includes(this.marca);
    }//include mira las propiedades del carro

}
const carro1 = new Coches("Kia", "rio", 2017);
carro1.mostrarInformacion();
console.log(carro1.antiguo());
console.log(carro1.deLujo());