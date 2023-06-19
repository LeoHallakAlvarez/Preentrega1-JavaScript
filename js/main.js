//alert()//

const MIN_SPEED = 10;
const MAX_SPEED = 100;


let velocidadMeteoro = 200;
let velocidadEnmascarado = 200;

while (velocidadMeteoro > 0 && velocidadEnmascarado > 0) {

    let disminucionMeteoro = parseInt(Math.random()*(MAX_SPEED - MIN_SPEED) + MIN_SPEED);
    let disminucionEnmascarado = parseInt(Math.random()*(MAX_SPEED - MIN_SPEED ) + MIN_SPEED);

    //console.log("meteoro sobrepasa con velocidad de " + disminucionMeteoro);//
    //console.log("enmascarado pierde velocidad de " + disminucionEnmascarado);//

    //velocidadMeteoro = velocidadMeteoro - disminucionEnmascarado;//
    velocidadMeteoro -= disminucionEnmascarado

    //velocidadEnmascarado = velocidadEnmascarado - disminucionMeteoro;//
    velocidadEnmascarado -= disminucionMeteoro



    if (velocidadMeteoro === velocidadEnmascarado) {
        disminucionEnmascarado -= velocidadMeteoro;
        disminucionMeteoro -= velocidadEnmascarado;
    } else if (velocidadMeteoro > velocidadEnmascarado) {
        disminucionEnmascarado -= velocidadMeteoro;
    } else {
        disminucionMeteoro -= velocidadEnmascarado;
    }



    console.log("-------------------------------------------------");


    console.log("velocidad Meteoro " + velocidadMeteoro);
    console.log("velocidad Enmascarado " + velocidadEnmascarado);
}
