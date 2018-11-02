import React from "react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline, IoMdCreate } from "react-icons/io";

const MiniCard = ({ onCardClick, content, onEditClick }) => (
  <div
    className="add-card"
    onClick={() => onCardClick()}
    role="button"
    onKeyDown={() => {}}
    tabIndex={-2}
  >
    {content && content.id ? (
      <React.Fragment>
        <div className="header">
          <span>{content.title}</span>
        </div>
        <div className="content">
          <span>{content.email}</span>
          <span>{content.phone}</span>
        </div>
        <div className="footer">
          <span>{content.footerInfoLeft}</span>
          {/* {!content.personalGuarantee ? (
            <div className="badge">PG</div>
          ) : (
            <div className="badge-success">PG</div>
          )} */}
          <i
            className="fa fa-pencil fa-custom"
            role="button"
            onKeyDown={() => undefined}
            tabIndex={-10}
            onClick={() => onEditClick()}
          >
            <IoMdCreate />
          </i>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <i>
          <IoIosAddCircleOutline />
        </i>
        <span>Add Reference</span>
      </React.Fragment>
    )}
  </div>
);

MiniCard.defaultProps = {
  onCardClick: () => undefined,
  onEditClick: () => undefined,
  content: undefined
};

MiniCard.propTypes = {
  onCardClick: PropTypes.func,
  onEditClick: PropTypes.func,
  content: PropTypes.objectOf(PropTypes.any)
};

export default MiniCard;
