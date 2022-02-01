import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
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

`;

export { SectionCards, Wrapper, SingleCard, Button };