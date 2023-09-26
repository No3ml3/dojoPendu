import { useState } from "react";

import "./App.css";

function App() {
  const findName = "elephant";
  let wordArray = findName.split("");
  let underscoreWord = "_ ".repeat(wordArray.length);
  let index = 0;
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);

  const verifcation = () => {
    wordArray.includes(letter)
  };

  const changeResult = () => {
    const pattern = new RegExp(`[${letter}]`, "g");
    const matches = findName.match(pattern);

    for (let i = 0; i < matches.length; i++) {
      index = wordArray.indexOf(letter);
      wordArray = wordArray.splice(index, 1, ".");
      underscoreWord = underscoreWord
        .split("")
        .splice(index, 1, letter)
        .join("");

      console.log({index});
      console.log('wordarray: ' + wordArray);
      console.log('underscoreWord: ' + underscoreWord);
    }
  };

  const handleChange = (event) => {
    setLetter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLetters((array) => [...array, letter]);
    setLetter("");
    verifcation();
    changeResult();
  };

  return (
    <>
      <div>
        <h1>{findName}</h1>
        <h1>{underscoreWord}</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            id="letter"
            name="letter"
            type="text"
            value={letter}
            onChange={handleChange}
          />
          <button>submit a letter</button>
        </form>
        <div>
          {letters.length !== 0
            ? letters.map((a, index) => <p key={index}>{a}</p>)
            : ""}
        </div>
      </div>
    </>
  );
}

export default App;
