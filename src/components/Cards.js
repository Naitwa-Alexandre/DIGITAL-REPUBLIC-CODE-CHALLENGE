import React from 'react';
import Card from './Card';
import { SectionCards, WrapperCards } from './styles';

const numberOfWall = process.env.REACT_APP_NUMBER_OF_WALLS || 4;

const arrayWalls = Array.from({length: Number(numberOfWall)}, (_, i) => i + 1)

function Cards() {
  return (
    <WrapperCards>
      <SectionCards>
        {arrayWalls.map((idx) => <Card key={ idx } idx={ idx } />)}
      </SectionCards>
    </WrapperCards>
  );
}

export default Cards;