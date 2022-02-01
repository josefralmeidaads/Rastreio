import React from 'react';
import {Text} from 'react-native';
import IconSend from '../../assets/send.svg';

import {AdditionalTexts, Container, ProductInformation} from './styles';

const CardOrder: React.FC = () => {
  return (
    <Container>
      <IconSend width={30} height={30} fill="#02786a" />

      <ProductInformation>
        <Text>Product_Name</Text>
        <Text>Status</Text>
        <Text>Code</Text>
      </ProductInformation>

      <AdditionalTexts>
        <Text>Product_Name</Text>
        <Text>Last_att</Text>
        <Text>Days</Text>
      </AdditionalTexts>
    </Container>
  );
};

export default CardOrder;
