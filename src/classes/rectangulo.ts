
function Component(params: { selector: string, template: string }) {
    return (target: Function) => {
        const nodo = document.querySelector(params.selector);
        if (nodo) {
            nodo.innerHTML = params.template
        }
    }
}
const showMethodName = (target: any, propertyName: string) => {
    console.log(propertyName)
}
@Component({ selector: 'app-root', template: `<div>Soy un rectángulo</div>` })
export class Rectangulo {
    @showMethodName
    prueba() {
        console.log('Rectángulo');
    }
}
