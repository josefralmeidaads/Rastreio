import React from 'react';
import CardOrder from '../../components/CardOrder';
import OrderQuantity from '../../components/OrderQuantity';
import TabHeader from '../../components/TabHeader';
import {Container} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <TabHeader />
      <OrderQuantity quantity={1} />

      <CardOrder />
    </Container>
  );
};

export default Main;
