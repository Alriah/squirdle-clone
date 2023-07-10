import { useEffect, useState } from 'react'
import SearchResults from './components/SearchResults'
import Guesses from './components/Guesses'
import Types from './components/Types'
import data from './Data'
import './App.css'

function App() {

  const urlPokemonToBeGuessed = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1010) + 1}`
  
  const [pokemonToBeGuessed, setPokemonToBeGuessed] = useState([])
  const [inputData, setInputData] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [guesses, setGuesses] = useState([])
  const [guessesData, setGuessesData] = useState([])
  const [pokemonToBeGuessedData, setPokemonToBeGuessedData] = useState({})
  const [info, setInfo] = useState(true)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [givenUp, setGivenUp] = useState(false)

  useEffect(() => {
    fetch(urlPokemonToBeGuessed)
    .then(res => res.json())
    .then(data => setPokemonToBeGuessed(data))
  }, [])

  useEffect(() => {
    let gen = 0
    let id = pokemonToBeGuessed.id

    if(id) {
      if (id >= 1 && id <= 151) {
        gen = 1
    } else if (id >= 152 && id <= 251) {
        gen = 2
    } else if (id >= 252 && id <= 386) {
        gen = 3
    } else if (id >= 387 && id <= 493) {
        gen = 4
    } else if (id >= 494 && id <= 649) {
        gen = 5
    } else if (id >= 650 && id <= 721) {
        gen = 6
    } else if (id >= 722 && id <= 809) {
        gen = 7
    } else if (id >= 810 && id <= 905) {
        gen = 8
    } else {
        gen = 9
    }}
    
    if (pokemonToBeGuessed.name) {
    setPokemonToBeGuessedData({
      name: pokemonToBeGuessed.name,
      gen: gen,
      type1: pokemonToBeGuessed.types[0].type.name,
      type2: pokemonToBeGuessed.types[1] ? pokemonToBeGuessed.types[1].type.name : 'none',
      weight: pokemonToBeGuessed.weight,
      height: pokemonToBeGuessed.height
    })}
  }, [pokemonToBeGuessed])

  useEffect(() => {
    let guessesArr = []

    guesses.map((pokemon) => {
      for(let i = 0; i < data.length; i++){
        if(pokemon === data[i].name){
          guessesArr.push({
            name: data[i].name,
            gen: data[i].gen,
            type1: data[i].type1,
            type2: data[i].type2,
            weight: data[i].weight,
            height: data[i].height
          })
        }
      }
    })
      setGuessesData(guessesArr)
    }, [guesses])

  useEffect(() => {
    let searchResultsArr = []
    if(inputData) {
      for(let i = 0; i < data.length; i++){
        if(data[i].name.slice(0, inputData.length).indexOf(inputData) != -1 &&
          searchResultsArr.length < 10) {
          searchResultsArr.push(data[i])
        }
      }
      setSearchResults(searchResultsArr)
    }
  }, [inputData])

  useEffect(() => {
    for(let i = 0; i < guesses.length; i++) {
      if(guesses[i] === pokemonToBeGuessedData.name) {
        setGameCompleted(true)
      }
    }
  }, [guesses])

  function handleInputChange(event) {
    setInputData(event.target.value)
  }

  function handleReset() {
    fetch(urlPokemonToBeGuessed)
    .then(res => res.json())
    .then(data => setPokemonToBeGuessed(data))
    .then(setInputData(""))
    .then(setGuesses([]))
    .then(setGivenUp(false))
    .then(setGameCompleted(false))
  }

  function giveUp() {
    if(gameCompleted === false) {
      setGuesses(prev => {
        return [...prev, pokemonToBeGuessedData.name]
      })
      setGivenUp(true)
      setGameCompleted(true)
    } else {
      return null
    }
  }

  const name = pokemonToBeGuessedData.name
  let actualName = ""
  
  if (name) {
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
  }}

  return (
    <div>
      <div className='header'>
        <h1>Squirdle</h1>
        <h2>{"(clone)"}</h2>
        <h3>A Pokémon Wordle-like by <span className='accent'>Ana</span></h3>
        <p>I'm thinking of a Pokémon. Guess which!</p>
      </div>
      <div className='main-section'>
      {guesses[0] === undefined && <p style={{fontSize: 22}}>Make a guess to start</p>}
      <Guesses 
        pokemonToBeGuessedData={pokemonToBeGuessedData}
        guessesData={guessesData}
        guesses={guesses}
      />
      {gameCompleted === false ? <div className='input'>
        <input id="input" placeholder="Who's that Pokémon?" type='text' value={inputData} onChange={handleInputChange} />
        <SearchResults
          info={info}
          inputData={inputData}
          setInputData={setInputData}
          searchResults={searchResults}
          setGuesses={setGuesses}
        />
      </div> : gameCompleted === true && givenUp === false ?
      <p>Congratulations! You found <span className='accent'>{actualName}</span> in {guesses.length === 1 ? `1 try` : `${guesses.length} tries`}! Press the reset button to play again.</p> : <p>The Pokemon was <span className='accent'>{actualName}</span>! Press the reset button to play again.</p>}
      
      {/* {pokemonToBeGuessed.name && <p style={{color: "white"}}>{pokemonToBeGuessed.name}</p>} */}
      <button className="btn-info" onClick={() => setInfo(prev => !prev)}>📝 Pokémon Info {info ? "ON" : "OFF"}</button>
      <div className='buttons'>
      <button className="btn-reset" onClick={handleReset}>Reset</button>
      {gameCompleted === false && <button className="btn-giveup" onClick={giveUp}>Give up</button>}
      </div>
      </div>
      <Types
        guessesData={guessesData}
        pokemonToBeGuessedData={pokemonToBeGuessedData}
      />
    </div>
  )
}

export default App
