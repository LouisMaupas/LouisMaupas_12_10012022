// import style from "./style.css"

function Card({image, value, type}) {
  return (
      <div>
          <img></img>
          <div> {value} </div>
          <div> {type} </div>
      </div>
  )
}

// Proptypes https://fr.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Card.propTypes = {
  image: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
}

Card.defaultProps = {
  image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  value: 999,
  type: 'Macro-nutriment',
}

export default Card