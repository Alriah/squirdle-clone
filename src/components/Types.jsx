import { useEffect, useState } from 'react'
import './Types.css'

function Types({ guessesData, pokemonToBeGuessedData }) {
    const [guessesTypes, setGuessesTypes] = useState([])
    
    useEffect(() => {
        let guessesTypesArr = []

        guessesData.map((pokemon) => {
            guessesTypesArr.push(pokemon.type1, pokemon.type2)
        })
        setGuessesTypes(guessesTypesArr)
    }, [guessesData])

    function findType(type) {
        if(guessesTypes.indexOf(type) != -1) {
            if(type === pokemonToBeGuessedData.type1 || type === pokemonToBeGuessedData.type2) {
                return `${type}-found`
            } else {
                return `${type}-notfound`
            }
        } else {
            return null
        }
    }

    return (
        <div className="types-container">
            <span className={`type type-normal ${findType("normal")}`}>Normal</span>         
            <span className={`type type-fire ${findType("fire")}`}>Fire</span>    
            <span className={`type type-water ${findType("water")}`}>Water</span>    
            <span className={`type type-grass ${findType("grass")}`}>Grass</span>    
            <span className={`type type-electric ${findType("electric")}`}>Electric</span>    
            <span className={`type type-ice ${findType("ice")}`}>Ice</span>
            <br />    
            <br />
            <span className={`type type-fighting ${findType("fighting")}`}>Fighting</span>    
            <span className={`type type-poison ${findType("poison")}`}>Poison</span>    
            <span className={`type type-ground ${findType("ground")}`}>Ground</span>    
            <span className={`type type-flying ${findType("flying")}`}>Flying</span>    
            <span className={`type type-psychic ${findType("psychic")}`}>Psychic</span>    
            <span className={`type type-bug ${findType("bug")}`}>Bug</span>
            <br /> 
            <br />   
            <span className={`type type-rock ${findType("rock")}`}>Rock</span>    
            <span className={`type type-ghost ${findType("ghost")}`}>Ghost</span>    
            <span className={`type type-dark ${findType("dark")}`}>Dark</span>    
            <span className={`type type-dragon ${findType("dragon")}`}>Dragon</span>    
            <span className={`type type-steel ${findType("steel")}`}>Steel</span>    
            <span className={`type type-fairy ${findType("fairy")}`}>Fairy</span>    
            <span className={`type type-none ${findType("none")}`}>Single-Type</span>    
        </div>
    )
}

export default Types