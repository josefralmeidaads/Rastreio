import { Dimensions, TextProps, TouchableOpacity,TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '../../themes/theme';

interface ButtonProps extends TouchableOpacityProps {
  selected?: boolean
}

interface TextPropss extends TextProps {
  selected?: boolean;
}

export const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  width: ${Dimensions.get("screen").width}px;
  height: 100px;
`;

export const HeaderUp = styled.View`
  flex: 1;
`;

export const HeaderButtons = styled.View`
  flex: 1;
  flex-direction: row;
`;


