import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  width: ${Dimensions.get('screen').width}px;
  height: 100px;
`;

export const HeaderUp = styled.View`
  flex: 1;
`;

export const HeaderButtons = styled.View`
  flex: 1;
  flex-direction: row;
`;
