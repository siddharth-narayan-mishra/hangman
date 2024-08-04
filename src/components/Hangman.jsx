import PropTypes from "prop-types"

const Hangman = ({incorrectGuesses}) => {
    return (
        <div className="h-80 w-60 border-2 border-white border-r-0 border-b-0 relative m-20">
            <div className="border-[.1rem] border-white w-20 -rotate-45 -translate-x-3 translate-y-[1.6rem]"></div>
            <div className="border-4 border-white w-20 absolute bottom-0 -left-10"></div>
            <div className="border-[.1rem] border-white h-8 w-0 absolute right-0 top-0"></div>

            <div className="flex flex-col items-center w-80 absolute -right-40 top-8">
                {incorrectGuesses>=1?<div className="h-12 w-12 border-2 border-white rounded-full"></div>:""}
                <div className="flex justify-center">
                    {incorrectGuesses>=3?<div className="h-12 border-[.1rem] border-white rotate-45 -translate-x-[.9rem] translate-y-2"></div>:""}
                    {incorrectGuesses>=2?<div className="h-24 border-[.1rem] border-white"></div>:""}
                    {incorrectGuesses>=4?<div className="h-12 border-[.1rem] border-white -rotate-45 translate-x-[.9rem] translate-y-2"></div>:""}
                </div>
                <div className="flex justify-center -translate-y-4">
                    {incorrectGuesses>=5?<div className="h-12 border-[.1rem] border-white rotate-45 -translate-x-[.9rem] translate-y-2"></div>:""}
                    {incorrectGuesses>=6?<div className="h-12 border-[.1rem] border-white -rotate-45 translate-x-[.9rem] translate-y-2"></div>:""}
                </div>
            </div>
        </div>
    )
}

Hangman.propTypes = {
    incorrectGuesses: PropTypes.number.isRequired
}

export default Hangman
