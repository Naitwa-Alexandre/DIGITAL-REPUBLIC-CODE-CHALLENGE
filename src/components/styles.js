import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 32px;
`
const SectionCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const SingleCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 3px solid black;
  width: 300px;
  height: 350px;
  align-items: center;
  div {    
    width: 300px;
    flex-wrap: wrap;
  }

`
const Button = styled.button`
  margin-top: 32px;
  width: 200px;
  height: 32px;
  font-size: 16px;
`;

const ResultWraper = styled.div`
  margin-top: 52px;
  font-size: 22px;
`

export { SectionCards, Wrapper, SingleCard, Button, ResultWraper };