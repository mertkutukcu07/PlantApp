import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ProfileIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({
  width = 25,
  height = 25,
  color = '#BDBDBD',
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.9521 11.772C15.3362 11.772 17.4084 9.7698 17.4084 7.16274C17.4084 4.58696 15.3362 2.67859 12.9521 2.67859C10.568 2.67859 8.49578 4.62867 8.49578 7.18359C8.49578 9.7698 10.5568 11.772 12.9521 11.772ZM5.47661 21.4286H20.4165C21.6085 21.4286 22.3215 20.9072 22.3215 20.0416C22.3215 17.3511 18.723 13.6387 12.941 13.6387C7.17002 13.6387 3.57153 17.3511 3.57153 20.0416C3.57153 20.9072 4.28455 21.4286 5.47661 21.4286Z"
      fill={color}
    />
  </Svg>
);

export default ProfileIcon;
