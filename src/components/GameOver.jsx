import PropTypes from "prop-types"

const GameOver = ({setGameOver,win,word}) => {
  return (
      <div className="absolute -top-16 left-0 w-full h-60 flex justify-center items-center flex-col bg-zinc-900 gap-4">
          {win ? "You Guessed It!" : "Game Over!"}
          <div>The correct word was &ldquo;{word}&rdquo;</div>
          <div
              className="bg-white text-black rounded-md p-2 w-fit font-semibold hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
              onClick={() => {
                  setGameOver(false)
              }}
          >
              Play Again
          </div>
      </div>
  )
}

GameOver.propTypes = {
    setGameOver : PropTypes.func.isRequired,
    win: PropTypes.bool.isRequired,
    word:PropTypes.string.isRequired
}

export default GameOver
