import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, TextButton} from './styles';

interface ButtonHeaderProps extends TouchableOpacityProps {
  selectedButton: number;
  id: number;
  children?: React.ReactNode;
  title?: string;
}

const ButtonHeader = ({
  id,
  title,
  selectedButton,
  ...rest
}: ButtonHeaderProps) => {
  return (
    <Button {...rest} activeOpacity={0.9} selected={selectedButton === id}>
      <TextButton selected={selectedButton === id}>{title}</TextButton>
    </Button>
  );
};

export default ButtonHeader;
