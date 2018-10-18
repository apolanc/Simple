import React, { Fragment } from "react";
import propTypes from "prop-types";
import { ListItem } from "../../../common";

const Row = ({ left, right }) => (
  <Fragment>
    <span>{left}</span>
    <span style={{ float: "right" }}>{right}</span>
  </Fragment>
);

Row.propTypes = {
  left: propTypes.string.isRequired,
  right: propTypes.string.isRequired
};

const OwnerList = ({ owners }) => (
  <div className="list-group">
    {owners.map(o => (
      <ListItem
        key={o.id}
        title={<Row left={o.name} right={`${o.percent} ${o.role}`} />}
        desc={<Row left={o.email} right={o.phone} />}
      />
    ))}
  </div>
);

OwnerList.propTypes = {
  owners: propTypes.arrayOf(propTypes.object).isRequired
};

export default OwnerList;
