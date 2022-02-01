import {TextProps, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styled, {css} from 'styled-components/native';
import theme from '../../../themes/theme';

interface ButtonProps extends TouchableOpacityProps {
  selected?: boolean;
}

interface HeaderTextProps extends TextProps {
  selected?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-color: #fff;
  border-width: 2px;
  ${props =>
    props.selected &&
    css`
      border-bottom-color: #000;
    `};
`;

export const TextButton = styled.Text<HeaderTextProps>`
  font-weight: bold;
  ${props =>
    props.selected &&
    css`
      color: #000;
    `};
`;
