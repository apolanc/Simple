import React from "react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";

const MiniCard = ({ onCardClick }) => (
  <div
    className="add-card"
    onClick={() => onCardClick()}
    role="button"
    onKeyDown={() => {}}
    tabIndex={-2}
  >
    <i>
      <IoIosAddCircleOutline />
    </i>
    <span>Add Reference</span>
  </div>
);

MiniCard.defaultProps = {
  onCardClick: () => undefined
};

MiniCard.propTypes = {
  onCardClick: PropTypes.func
};

export default MiniCard;
