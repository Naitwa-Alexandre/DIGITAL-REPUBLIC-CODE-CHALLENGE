import React from 'react';
import { useGlobalContext } from '../context';

export default function Form({ idx }) {
  const { formState, toggle, handleToggle, handleChange } = useGlobalContext();
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
      <div>
        <label  htmlFor={`port${idx}`}>Numero de portas: </label>
        <select onChange={ handleChange } id={`wall${idx}`} name="port">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div>
        <label htmlFor={`window${idx}`}>Numero de janelas: </label>
        <select onChange={ handleChange } id={`wall${idx}`} name="window">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  </>;
}
