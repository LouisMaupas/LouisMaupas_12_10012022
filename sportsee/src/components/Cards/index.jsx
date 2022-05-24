import styled from "styled-components";
import PropTypes from "prop-types";

// styled-component
const CardLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fbfbfb;
  width: 195px;
  height: 124px;
  border-radius: 5px;
  margin-bottom: 39px;
  padding: 0 0.75rem;
  > div .card__value {
    font-weight: bold;
    font-size: 20px;
    color: black;
  }
  > div .card__type {
    font-size: 14px;
    color: #74798C;
;
  }
`;

// Component
/**
 * Generate Card component
 * @param {*} param0
 * @returns { HTMLElement } the card
 */
function Card({ image, value, type }) {
  return (
    <CardLabel>
      <div>
        <img src={image} alt="icon" />
      </div>
      <div>
        <div className="card__value">
          {" "}
          {value} <span>{type === "Calories" ? "kCal" : "g"}</span>
        </div>
        <div className="card__type"> {type} </div>
      </div>
    </CardLabel>
  );
}

// Proptypes https://fr.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Card.propTypes = {
  image: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
};

Card.defaultProps = {
  image:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  value: 999,
  type: "Macro-nutriment",
};

export default Card;
