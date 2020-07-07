import { header } from './components/header';
import { Punto3D } from './classes/punto-3d';
import { dogResponse } from './types/dogApi.type';
import { Rectangulo } from './classes/rectangulo'
// const msg: string = 'holaa';
// document.write(header);
// console.log(msg);

// const mapPlanetToSeconds = {
//     "Earth": 31557600,
//     "Mercury": 7600000,
// }

// const getSpacialAge = (seconds: number, planet: string): number => {
//     switch (planet) {
//         case "Earth":
//             return seconds / 31557600;
//         case "Mercury":
//             return seconds / 7600000;

//         default:
//             return seconds / 31557600;
//     }
// }
// console.log(getSpacialAge(1000000000, 'Earth'));
const initialLocation = new Punto3D(56, 0, 0);
// initialLocation.coordenadas();
// console.log(Punto3D.findByCoordinates(2, 4))
console.log(initialLocation);
// fetch('https://random.dog/woof.json')
//     .then(res => res.json())
//     .then((res: dogResponse) => {
//         const img = document.createElement('img');
//         img.setAttribute('src', res.url);
//         img.style.height = '600px';
//         document.body.append(img);
//     })
const rectangulo = new Rectangulo();
rectangulo.prueba();