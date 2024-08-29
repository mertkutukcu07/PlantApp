import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const CloseIcon = (props: any) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={12} cy={12} r={12} fill="#000" fillOpacity={0.4} />
      <Path
        d="M8.201 16.278a.645.645 0 00.889.005l2.91-2.91 2.905 2.91c.24.24.65.24.889-.005a.64.64 0 00.005-.888l-2.905-2.91 2.905-2.906a.635.635 0 00-.005-.888.64.64 0 00-.889-.005L12 11.59 9.09 8.68a.645.645 0 00-.889.005.643.643 0 00-.005.883l2.91 2.91-2.91 2.916c-.23.229-.239.644.005.883z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CloseIcon;
