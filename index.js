//Fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data => {
  console.log(data.results)
data.results.forEach(Element => {
console.log(Element.name);
});
})
.catch(error => console.log(error));

//async await
//https://youtu.be/Z4TuS0HEJP8?t=3331
//https://youtu.be/Q3HtXuDEy5s?t=1202

const obtenerpokemon = async => {
  try{

  }catch(error) {

  }
}