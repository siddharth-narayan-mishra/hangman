import PropTypes from "prop-types"
import IncorrectGuess from "./IncorrectGuess"

const IncorrectGuesses = ({incorrectGuesses,wrongGuesses}) => {
  return (
      <>
          <div>
              Incorrect Guesses:{" "}
              <span className="text-red-500">{incorrectGuesses}/6</span>
          </div>

          <div className="flex gap-2">
              {wrongGuesses.map((item,idx)=>(
              <IncorrectGuess key={idx} letter={item} />
              ))}
          </div>
      </>
  )
}

IncorrectGuesses.propTypes = {
    incorrectGuesses: PropTypes.number.isRequired,
    wrongGuesses: PropTypes.array.isRequired
}

export default IncorrectGuesses
