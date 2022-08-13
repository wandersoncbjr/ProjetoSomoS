import Botoes from '../Botoes';
import ListaPokemons from '../ListaPokemons';
import './CardPokemons.css'


const CardPokemons = () => {

    return (
        <div className="todos-pokemons">
            <div className="pokemon">
              <ListaPokemons />
            </div>
            <Botoes/>
        </div>
        
        
        
        
        
        )
        
    }
    
export default CardPokemons;