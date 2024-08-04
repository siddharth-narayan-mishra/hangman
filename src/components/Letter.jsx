import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const classname =
    "border-2 border-white border-t-0 border-l-0 border-r-0 w-4 uppercase flex justify-center items-center"

const Letter = ({ letter, guessed, gameOver, setGuessedLetters }) => {
    const [hasBeenGuessed, setHasBeenGuessed] = useState(false)

    useEffect(() => {
        if (gameOver) {
            setHasBeenGuessed(false)
        }
    }, [gameOver])
    
    useEffect(() => {
        if (guessed) {
            setHasBeenGuessed(true)
            setGuessedLetters((prevGuessedLetters) => prevGuessedLetters + 1)
        }
    }, [guessed, setGuessedLetters])


    return (
        <div className={hasBeenGuessed ? "border-b-0 " + classname : classname}>
            {hasBeenGuessed ? letter : ""}
        </div>
    )
}

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    guessed: PropTypes.bool.isRequired,
    gameOver: PropTypes.bool.isRequired,
    setGuessedLetters: PropTypes.func.isRequired,
}

export default Letter
