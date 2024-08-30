import { TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

interface InputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
}

const Input = ({ leftIcon, ...props }: InputProps) => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: '#3c3c4340',
      }}
      className="flex-row items-center rounded-xl bg-white px-4 py-4 ">
      {leftIcon && <>{leftIcon}</>}

      <TextInput
        className="ml-2"
        {...props}
        placeholderTextColor={'#AFAFAF'}
        style={{
          flex: 1,
          fontSize: 16,
          fontFamily: 'Rubik-Regular',
          color: '#AFAFAF',
        }}
      />
    </View>
  );
};

export default Input;
