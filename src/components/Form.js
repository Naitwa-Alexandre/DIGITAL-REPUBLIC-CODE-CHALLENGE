import React, { useState } from 'react';

export default function Form({ idx }) {
  
  const [toggle, SetToggle] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const [formState, setFormState] = useState({
    wall1: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall2: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall3: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall4: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
  });

  const handleToggle = (e) => {
    SetToggle((toggle) => {
      return {
        ...toggle,
        [e.target.id]: !toggle[e.target.id],
      }
    });
  }

  const handleChange = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = Number(e.target.value);

    setFormState(state => {
      return {
        ...state,
        [id]: {
          ...state[id],
          [name]: value
        }
      }
    });
  }

  return <>
    <div>
      <label htmlFor={`wall${idx}`}>Altura: </label>
      <input value={formState[`wall${idx}`].height} onChange={ handleChange } id={`wall${idx}`} name='height' type="number" />
    </div>

    <div>
      <label htmlFor={`wall${idx}`}>Largura: </label>
      <input value={formState[`wall${idx}`].width}  onChange={ handleChange } id={`wall${idx}`} type="number" name='width' />
    </div>

    <div>
      <label htmlFor={`check${idx}`}>Contem portas ou janelas?</label>
      <input onChange={ handleToggle } id={`check${idx}`}  type='checkbox' />
    </div>

    <div style={{ display: toggle[`check${idx}`] ? 'flex' : 'none' }}>
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
