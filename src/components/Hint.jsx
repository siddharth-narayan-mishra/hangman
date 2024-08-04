import PropTypes from "prop-types"

const Hint = ({hint}) => {
  return (
    <div className="text-center">
        Hint: {hint}
    </div>
  )
}

Hint.propTypes = {
    hint: PropTypes.string.isRequired
}

export default Hint
