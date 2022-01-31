import React, { useState } from 'react';

export default function Form({ idx }) {
  const [toggle, SetToggle] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleToggle = (e) => {
    SetToggle((toggle) => {
      return {
        ...toggle,
        [e.target.id]: !toggle[e.target.id],
      }
    });
  }

  return <>
    <label htmlFor={`height${idx}`}>Altura: </label>
    <input id={`height${idx}`} name='height' type="number" />

    <label htmlFor={`width${idx}`}>Largura: </label>
    <input id={`width${idx}`} type="number" />

    <label htmlFor={`check${idx}`}>Contem portas ou janelas?</label>
    <input onChange={ handleToggle } id={`check${idx}`}  type='checkbox' />

    <div style={{ display: toggle[`check${idx}`] ? 'block' : 'none' }}>
      <label  htmlFor={`port${idx}`}>Numero de portas: </label>
      <select id={`port${idx}`} name="port">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor={`window${idx}`}>Numero de janelas: </label>
      <select id={`window${idx}`} name="window">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </>;
}
