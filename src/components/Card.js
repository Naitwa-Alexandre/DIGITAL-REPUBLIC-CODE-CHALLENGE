import React from 'react';
import Form from './Form';
import { SingleCard } from './styles';

export default function Card({idx}) {
  return <SingleCard>
    <h2>Parede {idx}</h2>
    <Form idx={ idx } />
  </SingleCard>;
}
