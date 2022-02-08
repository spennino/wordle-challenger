import React, { useState } from 'react'

const Button = props => {
  return (
    <button 
      className={props.styleName}
      onClick={() => props.onPress(props.value)}>
      {props.value}
    </button>
  )
}

const App = () => {
  const [letters, setLetters] = useState("");
  const [newGameCode, setNewGameCode] = useState("");

  function addLetter(letter) {
    if (letters.length < 5) {
      setLetters(letters + letter);
    }
  }

  function removeLetter() {
    if (letters.length > 0) {
      setLetters(letters.substr(0,letters.length-1));
    }
  }

  function createGame() {
    if (letters.length === 5) {

    }
  }

  return (
    <div className="game">
      <header>
        <h1>WORDLE CHALLENGER</h1>
      </header>
      <p>Pick a challenge word:</p>
      <div className="board-container">
        <div className="board">
          <div className="letter-row">
            <div className="letter">{letters[0]}</div>
            <div className="letter">{letters[1]}</div>
            <div className="letter">{letters[2]}</div>
            <div className="letter">{letters[3]}</div>
            <div className="letter">{letters[4]}</div>
          </div>
        </div>
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          <Button value="q" onPress={addLetter}></Button>
          <Button value="w" onPress={addLetter}></Button>
          <Button value="e" onPress={addLetter}></Button>
          <Button value="r" onPress={addLetter}></Button>
          <Button value="t" onPress={addLetter}></Button>
          <Button value="y" onPress={addLetter}></Button>
          <Button value="u" onPress={addLetter}></Button>
          <Button value="i" onPress={addLetter}></Button>
          <Button value="o" onPress={addLetter}></Button>
          <Button value="p" onPress={addLetter}></Button>
        </div>
        <div className="keyboard-row">
          <div className="half"></div>
          <Button value="a" onPress={addLetter}></Button>
          <Button value="s" onPress={addLetter}></Button>
          <Button value="d" onPress={addLetter}></Button>
          <Button value="f" onPress={addLetter}></Button>
          <Button value="g" onPress={addLetter}></Button>
          <Button value="h" onPress={addLetter}></Button>
          <Button value="j" onPress={addLetter}></Button>
          <Button value="k" onPress={addLetter}></Button>
          <Button value="l" onPress={addLetter}></Button>
          <div className="half"></div>
        </div>
        <div className="keyboard-row">
          <Button value="enter" onPress={createGame} styleName="one-and-a-half"></Button>
          <Button value="z" onPress={addLetter}></Button>
          <Button value="x" onPress={addLetter}></Button>
          <Button value="c" onPress={addLetter}></Button>
          <Button value="v" onPress={addLetter}></Button>
          <Button value="b" onPress={addLetter}></Button>
          <Button value="n" onPress={addLetter}></Button>
          <Button value="m" onPress={addLetter}></Button>
          <Button value="delete" onPress={removeLetter} styleName="one-and-a-half"></Button>
        </div>
      </div>
    </div>
  )
}

export default App
