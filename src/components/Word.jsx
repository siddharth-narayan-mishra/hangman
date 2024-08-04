import { useState, useEffect } from "react"
import Letter from "./Letter"
import PropTypes from "prop-types"

const Word = ({ word, guess, gameOver, setWin }) => {
    const [guessedLetters, setGuessedLetters] = useState(0)

    useEffect(() => {
        if (gameOver) {
            setGuessedLetters(0)
        }
    }, [gameOver])

    useEffect(() => {
        if (guessedLetters == word.length) {
            setWin(true)
        }
    }, [guessedLetters, word.length, setWin])

    return (
        <div className="flex gap-2">
            {word.split("").map((letter, index) => (
                <Letter
                    key={index}
                    letter={letter}
                    guessed={letter === guess}
                    gameOver={gameOver}
                    setGuessedLetters={setGuessedLetters}
                />
            ))}
        </div>
    )
}

Word.propTypes = {
    word: PropTypes.string.isRequired,
    guess: PropTypes.string,
    gameOver: PropTypes.bool.isRequired,
    setWin: PropTypes.func.isRequired,
}

export default Word
