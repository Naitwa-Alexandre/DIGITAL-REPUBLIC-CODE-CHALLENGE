import { useGlobalContext } from "../context";
import { ResultWraper } from './styles';

function Results() {
  const { result, error } = useGlobalContext();
  return (
    <ResultWraper>
      { error || <p>A sua reforma vai precisar de {result}L de tinta</p>}
    </ResultWraper>
  );
}

export default Results;