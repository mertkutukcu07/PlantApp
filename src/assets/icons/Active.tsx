import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';
const ActiveIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
      fill="white"
      stroke="#28AF6E"
      strokeWidth={8}
    />
    <Mask
      id="mask0_1_1114"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={-1}
      y={-1}
      width={26}
      height={26}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="white"
        stroke="white"
      />
    </Mask>
    <G mask="url(#mask0_1_1114)" />
  </Svg>
);
export default ActiveIcon;
