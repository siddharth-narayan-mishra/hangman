import PropTypes from "prop-types"

const IncorrectGuess = ({letter}) => {
  return (
    <div className="border-2 border-red-500 rounded-md text-red-500 bg-red-900 w-fit px-2">
        {letter.toUpperCase()}
    </div>
  )
}

IncorrectGuess.propTypes = {
    letter: PropTypes.string
}

export default IncorrectGuess
