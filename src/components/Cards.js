import React from 'react';
import { useGlobalContext } from '../context';
import Card from './Card';
import Results from './Results';
import { Button } from './styles';
import { SectionCards, Wrapper } from './styles';

const numberOfWall = process.env.REACT_APP_NUMBER_OF_WALLS || 4;

const arrayWalls = Array.from({length: Number(numberOfWall)}, (_, i) => i + 1);


function Cards() {
  const { handleClick, show } = useGlobalContext();

  return (
    <Wrapper>
      <SectionCards>
        {arrayWalls.map((idx) => <Card key={ idx } idx={ idx } />)}
      </SectionCards>
      <Button onClick={ handleClick }>
        Gerar resultado
      </Button>
      { show && <Results /> }
    </Wrapper>
  );
}

export default Cards;