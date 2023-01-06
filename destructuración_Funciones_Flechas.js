//Función Flecha
//const Mensaje = (nombre) =>{
  //console.log("Hola mundo");
//  return "Hola "+ nombre;
//}
//Cuando solo se recive un paametro (nombre) y se retorna en una sola linea se quita return
const Mensaje = nombre => ("Hola "+ nombre);//los parentesis son opcioales 
//const resultado = Mensaje("Allan");
console.log(Mensaje("Allan"));

/////template string 
const numero = (num1, num2) => `el numero es: ${num1 + num2}`
console.log(numero(10, 20));

///Destructuraciion de objetos nos permite ingresar a las propiedades especificas de un arreglo

const mascotas = {
  nombre: 'perro',
  edad: 10,
  vivo: true,
  razas: ['peludo','negro']
}

const nombres = mascotas.razas[1];
console.log(nombres);

const {nombre, edad } = mascotas;

console.log(nombre, edad);



const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};

const {twitter, facebook} = wes.links.social;

console.log(twitter+" /n "+facebook);