import styled from "styled-components";
import PropTypes from 'prop-types';


// styled-component
const CardLabel = styled.div`
  background: #FBFBFB;
  width: 258px;
  Height: 124px;
  border-radius: 5px;
  > div .card__value {
    font-weight: bold;
    font-size: 20px
  }
  > div .card__type {
    font-size: 14px
  }
`

// Component
/**
 * Generate cards
 * @param {*} param0 
 * @returns { HTMLElement } the card
 */
function Card({image, value, type}) {
  return (
      <CardLabel>
        <div>
          <img src={image}>
          </img>
        </div>
        <div>
          <div className="card__value"> {value} <span>{type === 'Calories' ? 'kCal' : 'g'}</span></div>
          <div className="card__type"> {type} </div>
        </div>
      </CardLabel>
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