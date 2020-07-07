export interface sample {
    sth: any
}

export default abstract class Punto2D {//superclase de Punto3D
    constructor(protected x: number, protected y: number) { }
    coordenadas(): void {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    }
    get X(): number {
        return this.x
    }
    set X(x: number) {
        this.x = x
    }

    get Y(): number {
        return this.y
    }
    set Y(y: number) {
        this.y = y
    }
    static findByCoordinates(x: number, y: number): number {
        return Math.random();
    }
    abstract doSth(): string;
}