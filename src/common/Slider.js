import React, { Fragment } from "react";
import Slider, { createSliderWithTooltip, Handle } from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";

const sliderWithTooltip = createSliderWithTooltip;
const Percent = sliderWithTooltip(Slider);
const Handie = Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handie value={value} {...restProps} />
    </Tooltip>
  );
};

const PRequirementsSlider = () => (
  <Fragment>
    <Percent
      min={0}
      max={100}
      tipFormatter={value => `${value}%`}
      handle={handle}
    />
  </Fragment>
);

export default PRequirementsSlider;
