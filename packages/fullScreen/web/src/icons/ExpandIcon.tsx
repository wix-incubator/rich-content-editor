/* eslint-disable max-len */
import React from 'react';

const ExpandIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
    <g fill="none" fillRule="evenodd">
      <path fill={props.backgroundColor} d="M0 0H60V60H0z" />
      <g fill={props.foregroundColor}>
        <path
          d="M4.333 15.167H5.413V27.084H4.333z"
          transform="translate(17 17) rotate(45 4.873 21.125)"
        />
        <path d="M26 8h-1V1h-7V0h8v8z" transform="translate(17 17)" />
        <path
          d="M20.583 -1.083H21.665999999999997V10.834H20.583z"
          transform="translate(17 17) rotate(45 21.125 4.875)"
        />
        <path d="M0 26v-8h1v7h7v1H0z" transform="translate(17 17)" />
      </g>
    </g>
  </svg>
);

export default ExpandIcon;
