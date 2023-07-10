import './SearchResults.css'


function SearchResults(props) {
    return (
        <div className="search-results">
            {document.activeElement === document.getElementById("input") && props.inputData && props.searchResults.map((pokemon) => {
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

                return (
                    <div className="result" key={pokemon.id} onClick={() => {
                            props.setInputData("")
                            props.setGuesses((prev) => {
                                return [...prev, name]
                            })
                        }}>
                            <p className="result-name">{actualName}</p>
                            {props.info && <p className="result-info">{`Gen ${pokemon.gen}, ${pokemon.type1[0].toUpperCase()}${pokemon.type1.slice(1)}`}/{`${pokemon.type2[0].toUpperCase()}${pokemon.type2.slice(1)}`}, {pokemon.weight/10}kg, {pokemon.height/10}m</p>}
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults