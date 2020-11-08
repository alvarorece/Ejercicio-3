"use strict";
class CalculadoraBasica {
    _pantalla = '';
    _recienResuelta = false;
    memoria = 0;
    constructor(caja) {
        this._caja = caja;
    }
    /**
     * @param {string} valor
     */
    set pantalla(valor) {
        this._recienResuelta = false;
        this._pantalla = valor;
        this._caja.value = valor;
    }
    get pantalla() {
        return this._pantalla;
    }
    digito(n) {
        if (this._recienResuelta) {
            this.pantalla = '';
        }
        this.pantalla += n;
    }
    suma() {
        this.pantalla += '+';
    }
    resta() {
        this.pantalla += '-';
    }
    punto() {
        this.pantalla += '.';
    }
    multiplicacion() {
        this.pantalla += '*';
    }
    division() {
        this.pantalla += '/';
    }
    mrc() {
        this.pantalla = this.memoria;
        this._recienResuelta = true;
    }
    mMenos() {
        this.memoria -= this.igual();
    }
    mMas() {
        this.memoria += this.igual();
    }
    borrar() {
        this.pantalla = '';
    }
    igual() {
        const valor = this._evaluar();
        this.pantalla = valor;
        this._recienResuelta = true;
        return valor;
    }
    _evaluar() {
        try {
            return Number(eval(this.pantalla));
        }
        catch (error) {
            this.pantalla = 'Error';
        }
    }

}
const calculadora = new CalculadoraBasica(document.getElementById('pantalla'));