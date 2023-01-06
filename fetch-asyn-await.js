//Fetch
let arrayNombre =[]
fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data => {
//console.log(data.results)
data.results.forEach(Element => {
  arrayNombre.push(Element.name)
console.log(Element.name);
});
//console.log(arrayNombre); 
})
.catch(error => console.log(error));

//async await 
//https://youtu.be/Z4TuS0HEJP8?t=3331
//https://youtu.be/Q3HtXuDEy5s?t=1202
//https://wesbos.com/tips


const obtenerpokemon = async() => {
  try{
    
   const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
   const data = await res.json()
     //console.log(data.results);  
const arrayNombres = data.results.map(poke => poke);//permite crear un arreglo con cierta caracteristica
const filterSinBulvasaur = data.results.filter(poke => poke.name != 'bulbasaur')//Permite filtrar nuestros resultados creando un nuevo arreglo.
//console.log(arrayNombres);
console.log(filterSinBulvasaur);
  }catch(error) {
     console.log(error);
  }
}

obtenerpokemon()