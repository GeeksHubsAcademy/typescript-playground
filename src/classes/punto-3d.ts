import asd, { sample } from './punto-2d';
//subclase de Punto2D
export class Punto3D extends asd {
    constructor(x: number, y: number, private z: number) {
        super(x, y);
    }
    get Z(): number {
        return this.z;
    }
    set Z(z: number) {
        this.z = z;
    }

    coordenadas(): void {
        console.log('X: ' + this.x, 'Y: ' + this.y, 'Z: ' + this.z);

        // console.log('X: ' + this.getX(), 'Y: ' + this.getY(),'Z: ' + this.z);
    }
    //override (significa sobreescritura del método de la superclase (Punto2D))
    static findByCoordinates(
        x: number,
        y: number,
    ): number {
        return 2;
    }
    doSth() {
        return 'doing sth';
    }
}