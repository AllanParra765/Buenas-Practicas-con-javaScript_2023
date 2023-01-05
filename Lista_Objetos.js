console.log('otra cosa');

///var -> let valor (valor cambiante, solo se declara una ves), constant (nunca cambia su valor, se usa con objetos, solo se declara una ves)


let edad = 10;
if(true){
let edad=50;
console.log(edad);
}
edad = 20; 
console.log(edad);
 //Manejo de areglos
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const edades =[10,20,30,'gertrudis','alicia','pancha','15 Rebeca'];
console.log(edades);
edades.push(40);// agrega al final
console.log(edades);
edades.pop();// quita el ultimo
console.log(edades);
edades.shift();//quita el primero 
console.log(edades)
edades.unshift(60,70);// agrega al inicio 
console.log(edades);
edades.splice(2, 0, 500);//splice(2(posición a agregar el nuevo valor), 0 (cero agrega valor 1 sustituye valor), 10(valor a agregar o sustituir))
console.log(edades);
console.log(edades.slice(1,3));//trae los elementos que se requieran sin afectar al arreglo original 1,3 va por el 1 y 2 elemento y en 1, -2 va por el 1 y de el ultimo a el primero el -2 comensando de cero nos trae ese valor 
console.log(edades.join()); //nos permite uni todo lo de un objeto en una sola linea
console.log(edades.sort()); //Permite ordenar los elementos de un arreglo 
console.log(Array.prototype.sort.call(edades));
for(const valor of edades){
  console.log(valor);
}
//Objetos
const persona = {
  nombre: 'Allan',
  edad: 20
} 
console.log(persona.edad);
persona.pais = 'México';
console.log(persona.pais);
///