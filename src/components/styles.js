import styled from 'styled-components';

const WrapperCards = styled.div`
  margin-top: 100px;
`
const SectionCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 400px;
  background: red;
`;

const SingleCard = styled.article`
  border: 3px solid black;
  width: 300px;
  height: 350px;

`

export { SectionCards, WrapperCards, SingleCard };