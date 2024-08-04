import { useState } from "react"
import Hangman from "./components/Hangman"
import Hint from "./components/Hint"
import IncorrectGuesses from "./components/IncorrectGuesses"
import Word from "./components/Word"
import wordList from "./words"
import { useEffect } from "react"
import GameOver from "./components/GameOver"

function App() {
    const [object, setObject] = useState({ word: "", hint: "" })
    const [pressedKey, setPressedKey] = useState("")
    const [incorrectGuesses, setIncorrectGuesses] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [win, setWin] = useState(false)
    const [wrongGuesses, setWrongGuesses] = useState([])

    const gameInit = () => {
        setObject(wordList[Math.floor(Math.random() * wordList.length)])
        setPressedKey("")
        setIncorrectGuesses(0)
        setWin(false)
        setWrongGuesses([])
        setGameOver(false)
    }

    useEffect(() => {
        if (!gameOver) {
            gameInit()
        }
    }, [gameOver])

    useEffect(() => {
        if (win) {
            setGameOver(true)
        }
    }, [win])

    useEffect(() => {
        console.log(wrongGuesses)
    }, [wrongGuesses])


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (/^[a-zA-Z]$/.test(event.key)) {
                const lowerCaseKey = event.key.toLowerCase()
                setPressedKey(lowerCaseKey)

                if (!object.word.includes(lowerCaseKey)) {
                    setIncorrectGuesses(
                        (prevIncorrectGuesses) => prevIncorrectGuesses + 1
                    )
                    setWrongGuesses([...wrongGuesses, lowerCaseKey])
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [object.word,wrongGuesses])

    useEffect(() => {
        if (incorrectGuesses>=6) {
            setGameOver(true)
        }
    }, [incorrectGuesses])

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex justify-center items-center w-3/5 bg-zinc-900 rounded-lg shadow shadow-zinc-800">
                <Hangman incorrectGuesses={incorrectGuesses} />
                <div className="flex flex-col items-center w-1/2 gap-4 relative mx-4">
                    <Word
                        word={object.word}
                        guess={pressedKey}
                        gameOver={gameOver}
                        setWin={setWin}
                    />
                    <Hint hint={object.hint} />
                    <IncorrectGuesses
                        incorrectGuesses={incorrectGuesses}
                        wrongGuesses={wrongGuesses}
                    />
                    {gameOver ? (
                        <GameOver
                            setGameOver={setGameOver}
                            win={win}
                            word={object.word}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
