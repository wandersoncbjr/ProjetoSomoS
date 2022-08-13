import { Container, PokemonLista } from "./styles";
import { useState, useEffect } from "react";


/* const NomePokemons = [
  {nome: "pikachu"},
  {nome: "batma"},
  {nome: "pikahu"}
]
 */
const PokemonList = () => {


  const [NomePokemons, SetNomes] = useState([])
  const [quantidaDePokemons, setquantidaDePokemons] = useState(10)
  const [QualPagina,setQualPagina] =  useState(0)


  const pages = Math.ceil( NomePokemons.length / quantidaDePokemons)


  useEffect(() => {


    const fetchData = async () => {
      const result = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(Response => Response.json())
        .then(data => (data.results)
       )

        SetNomes(result)
        
    }
    fetchData()

  }, [])



  return (
    <Container>
      <h1>Pokemons</h1>
      {NomePokemons.map(NomePokemons => {
        return (
          <PokemonLista>
            <span>{NomePokemons.name}</span>
          </PokemonLista>
        )
      })}
      {pages}
    </Container>
  )

}

export default PokemonList;
