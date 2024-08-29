import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  className = 'items-center justify-center rounded-2xl bg-primary py-4',
  textClassName = 'font-rubik-medium text-lg text-white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props} className={className}>
      <Text className={textClassName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
