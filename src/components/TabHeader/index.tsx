import React, {useState} from 'react';
import {Container, HeaderButtons, HeaderUp} from './styles';
import ButtonHeader from './ButtonHeader';

const TabHeader: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  return (
    <Container>
      <HeaderUp />

      <HeaderButtons>
        <ButtonHeader
          onPress={() => setSelectedButton(1)}
          selectedButton={selectedButton}
          id={1}
          title="TODOS"
        />
        <ButtonHeader
          onPress={() => setSelectedButton(2)}
          selectedButton={selectedButton}
          id={2}
          title="PENDENTE"
        />
        <ButtonHeader
          onPress={() => setSelectedButton(3)}
          selectedButton={selectedButton}
          id={3}
          title="ENTREGUES"
        />
      </HeaderButtons>
    </Container>
  );
};

export default TabHeader;
