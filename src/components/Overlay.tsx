import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const Overlay = () => {
  return (
    <LinearGradient
      colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
      style={[
        {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 100,
          height: 100,
        },
      ]}
    />
  );
};

export default Overlay;
