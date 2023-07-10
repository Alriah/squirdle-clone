import './Guesses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faCheck, faArrowRight, faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons'

function Guesses({ pokemonToBeGuessedData, guessesData, guesses }) {
    return (
        <div>
            {guesses[0] !== undefined && <div className='indicators'>
                    <div className='indicator-gen'>Gen</div>
                    <div className='indicator-type1'>Type1</div>
                    <div className='indicator-type2'>Type2</div>
                    <div className='indicator-weight'>Weight</div>
                    <div className='indicator-height'>Height</div>
                </div>}
            {guessesData.map((pokemon, i) => {
                const name = pokemon.name
                let actualName = ""
                
                if (name === "great-tusk" ||
                    name === "scream-tail" ||
                    name === "brute-bonnet" ||
                    name === "flutter-mane" ||
                    name === "slither-wing" ||
                    name === "sandy-shocks" ||
                    name === "iron-treads" ||
                    name === "iron-bundle" ||
                    name === "iron-hands" ||
                    name === "iron-jugulis" ||
                    name === "iron-moth" ||
                    name === "iron-thorns" ||
                    name === "iron-valiant" ||
                    name === "roaring-moon" ||
                    name === "walking-wake" ||
                    name === "iron-leaves" ||
                    name === "tapu-bulu" ||
                    name === "tapu-fini" ||
                    name === "tapu-koko" ||
                    name === "tapu-lele" ||
                    name === "type-null") {
                        actualName = `${name[0].toUpperCase()}${name.slice(1)}`.split('-')[0]+' '+
                        name.split('-')[1][0].toUpperCase()+name.split('-')[1].slice(1)
                } else if (name === "wo-chien" ||
                    name === "chien-pao" ||
                    name === "ting-lu" ||
                    name === "chi-yu" ||
                    name === "porygon-z" ||
                    name === "nidoran-f" ||
                    name === "nidoran-m") {
                        actualName = `${name[0].toUpperCase()}${name.slice(1)}`.split('-')[0]+'-'+
                        name.split('-')[1][0].toUpperCase()+name.split('-')[1].slice(1)
                } else if (name === "mr-mime" ||
                    name === "mr-rime") {
                        actualName = `${name[0].toUpperCase()}${name.slice(1)}`.split('-')[0]+'. '+
                        name.split('-')[1][0].toUpperCase()+name.split('-')[1].slice(1)
                } else if (name === "mime-jr") {
                    actualName = `${name[0].toUpperCase()}${name.slice(1)}`.split('-')[0]+' '+
                    name.split('-')[1][0].toUpperCase()+name.split('-')[1].slice(1)+'.'   
                } else {
                    actualName = `${name[0].toUpperCase()}${name.slice(1)}`.split('-')[0]
                }

                return <div key={i} className='guess-container'>
                    <div className='guess-gen'>
                        <div className={`guess-circle ${pokemonToBeGuessedData.gen === pokemon.gen ?
                            "guess-correct" : "guess-blue" }`}>{
                                pokemonToBeGuessedData.gen === pokemon.gen ?
                                <FontAwesomeIcon className='icon' icon={faCheck} /> :
                                pokemonToBeGuessedData.gen < pokemon.gen ?
                                <FontAwesomeIcon className='icon' icon={faChevronDown} /> :
                                <FontAwesomeIcon className='icon' icon={faChevronUp} />
                        }</div>
                    </div>
                    <div className='guess-type1'>
                        <div className={`guess-circle ${pokemonToBeGuessedData.type1 === pokemon.type1 ?
                        "guess-correct" :
                        pokemonToBeGuessedData.type2 === pokemon.type1 ?
                        "guess-half" : "guess-wrong"}`}>{
                            pokemonToBeGuessedData.type1 === pokemon.type1 ?
                            <FontAwesomeIcon className='icon' icon={faCheck} /> :
                            pokemon.type1 === pokemonToBeGuessedData.type2 ?
                            <FontAwesomeIcon className='icon' icon={faArrowRight} /> :
                            <FontAwesomeIcon className='icon' icon={faX} />
                        }</div>
                    </div>
                    <div className='guess-type2'>
                        <div className={`guess-circle ${pokemonToBeGuessedData.type2 === pokemon.type2 ?
                        "guess-correct" :
                        pokemonToBeGuessedData.type1 === pokemon.type2 ?
                        "guess-half" : "guess-wrong"}`}>{
                            pokemonToBeGuessedData.type2 === pokemon.type2 ?
                            <FontAwesomeIcon className='icon' icon={faCheck} /> :
                            pokemon.type2 === pokemonToBeGuessedData.type1 ?
                            <FontAwesomeIcon className='icon' icon={faArrowLeft} /> :
                            <FontAwesomeIcon className='icon' icon={faX} />
                        }</div>
                    </div>
                    <div className='guess-weight'>
                        <div className={`guess-circle ${pokemonToBeGuessedData.weight === pokemon.weight ?
                            "guess-correct" : "guess-blue" }`}>{
                                pokemonToBeGuessedData.weight === pokemon.weight ?
                                <FontAwesomeIcon className='icon' icon={faCheck} /> :
                                pokemonToBeGuessedData.weight < pokemon.weight ?
                                <FontAwesomeIcon className='icon' icon={faChevronDown} /> :
                                <FontAwesomeIcon className='icon' icon={faChevronUp} />
                        }</div>
                    </div>
                    <div className='guess-height'>
                        <div className={`guess-circle ${pokemonToBeGuessedData.height === pokemon.height ?
                            "guess-correct" : "guess-blue" }`}>{
                                pokemonToBeGuessedData.height === pokemon.height ?
                                <FontAwesomeIcon className='icon' icon={faCheck} /> :
                                pokemonToBeGuessedData.height < pokemon.height ?
                                <FontAwesomeIcon className='icon' icon={faChevronDown} /> :
                                <FontAwesomeIcon className='icon' icon={faChevronUp} />
                        }</div>
                    </div>
                    <div className='guess-name'>
                        <p className='accent'>{actualName}</p>
                        <ul className='tooltip'>
                            <li><b>Gen</b>: {pokemon.gen}</li>
                            <li><b>Type 1</b>: {`${pokemon.type1[0].toUpperCase()}${pokemon.type1.slice(1)}`}</li>
                            <li><b>Type 2</b>: {`${pokemon.type2[0].toUpperCase()}${pokemon.type2.slice(1)}`}</li>
                            <li><b>Weight</b>: {pokemon.weight/10}kg</li>
                            <li><b>Height</b>: {pokemon.height/10}m</li>
                        </ul>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Guesses