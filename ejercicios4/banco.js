class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Fondos insuficientes");
        }
    }

    mostrarSaldo() {
        console.log(`Saldo de ${this.titular}: $${this.saldo}`);
    }
}

const cuenta = new CuentaBancaria("maria", 200);
cuenta.depositar(70);
cuenta.retirar(40);
cuenta.mostrarSaldo();