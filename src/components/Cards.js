import React from 'react';
import { useGlobalContext } from '../context';
import Card from './Card';
import { Button } from './styles';
import { SectionCards, WrapperCards } from './styles';

const numberOfWall = process.env.REACT_APP_NUMBER_OF_WALLS || 4;

const arrayWalls = Array.from({length: Number(numberOfWall)}, (_, i) => i + 1);


function Cards() {
  const { handleClick } = useGlobalContext();

  return (
    <WrapperCards>
      <SectionCards>
        {arrayWalls.map((idx) => <Card key={ idx } idx={ idx } />)}
      </SectionCards>
      <Button onClick={ handleClick }>
        Gerar resultado
      </Button>
    </WrapperCards>
  );
}

export default Cards;