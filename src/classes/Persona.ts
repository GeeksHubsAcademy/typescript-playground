
interface Programador {
    rol: string;
    getRol(): string;
}
interface Pianista {
    instrumentoFavorito: string;
    getInstrumentoFavorito(): string;
    setInstrumentoFavorito(instrumento: string): void;
}


class Persona implements Programador, Pianista {

    constructor(public rol: string, public instrumentoFavorito: string) {
    }
    getInstrumentoFavorito(): string {
        return this.instrumentoFavorito
    }

    setInstrumentoFavorito(instrumento: string): void {
        this.instrumentoFavorito = instrumento;
    }
    getRol(): string {
        return this.rol;
    }
}