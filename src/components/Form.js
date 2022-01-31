import React from 'react';

export default function Form({ idx }) {
  return <>
    <label htmlFor={`height${idx}`}>Altura: </label>
    <input id={`height${idx}`} name='height' type="number" />

    <label htmlFor={`width${idx}`}>Largura: </label>
    <input id={`width${idx}`} type="number" />

    <label htmlFor={`check${idx}`}>Contem portas ou janelas?</label>
    <input id={`check${idx}`}  type='checkbox' />
  </>;
}
