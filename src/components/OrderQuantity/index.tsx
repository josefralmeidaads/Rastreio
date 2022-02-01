import React from 'react';
import {Container, TextQuantityOrder} from './styles';

interface IOrderQuantityProps {
  quantity: number;
}

const OrderQuantity = ({quantity}: IOrderQuantityProps) => {
  return (
    <Container>
      <TextQuantityOrder>
        {quantity} {quantity === 1 ? 'encomenda' : 'encomendas'}
      </TextQuantityOrder>
    </Container>
  );
};

export default OrderQuantity;
