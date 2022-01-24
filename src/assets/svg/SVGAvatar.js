import React from "react";

export default function SVGAvatar() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
        <rect width="36" height="36" rx="72" fill="white"></rect>
      </mask>
      <g mask="url(#mask__beam)">
        <rect width="36" height="36" fill="#f85931"></rect>
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          transform="translate(8 8) rotate(94 18 18) scale(1.1)"
          fill="#009989"
          rx="6"
        ></rect>
        <g transform="translate(4 4) rotate(4 18 18)">
          <path d="M13,20 a1,0.75 0 0,0 10,0" fill="white"></path>
          <rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
          <rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
        </g>
      </g>
    </svg>
  );
}
