import CardPokemons from "../CardPokemons";
import CardSecundario from "../CardSecundario";
import "./CardMain.css"

function CardMain() {
    return(
        <div className="container">
            <div className="main-card">
                <CardPokemons/>
                <CardSecundario/>
            </div>
        </div>
    )
}

export default CardMain;