//alert()//


let velocidadMeteoro = 200;
let velocidadEnmascarado = 200;

let disminucionMeteoro = Math.random()*100;
let disminucionEnmascarado = Math.random()*100;

console.log("meteoro sobrepasa con velocidad de "+ disminucionMeteoro);
console.log("enmascarado pierde velocidad de " + disminucionEnmascarado);

//velocidadMeteoro = velocidadMeteoro - disminucionEnmascarado;//
velocidadMeteoro-=disminucionEnmascarado

//velocidadEnmascarado = velocidadEnmascarado - disminucionMeteoro;//
velocidadEnmascarado-=disminucionMeteoro


console.log("-------------------------------------------------")


console.log("velocidad Meteoro " + velocidadMeteoro)
console.log("velocidad Enmascarado "+ velocidadEnmascarado)