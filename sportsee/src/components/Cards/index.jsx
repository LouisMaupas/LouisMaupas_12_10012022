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

export default Card