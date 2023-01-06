
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