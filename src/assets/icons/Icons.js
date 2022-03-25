import React from "react";
import PropTypes from "prop-types";
import iconPath from "../icons/IconsLib";

const Icon = ({ size, color, icon, className, viewBox }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox={viewBox}
      stroke="currentColor"
      width={`${size}px`}
      height={`${size}px`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        fill={color}
        d={iconPath[icon]}
      />
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: "#000000",
  viewBox: "0 0 24 24",
  className: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
