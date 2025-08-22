class Rectangulo {
    constructor(base ,altura){
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return 2 *(this.base + this.altura);
    }
    esCuadrado(){
        return this.base === this.altura;
    }
}
const R1 = new Rectangulo(6,10);
console.log(R1.area());
console.log(R1.perimetro());
console.log(R1.esCuadrado());