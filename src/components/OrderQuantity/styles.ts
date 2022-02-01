import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 4px;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
`;
export const TextQuantityOrder = styled.Text`
  color: ${props => props.theme.colors.white};
`;
