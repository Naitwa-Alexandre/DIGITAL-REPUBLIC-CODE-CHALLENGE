import { useGlobalContext } from "../context";

function Results() {
  const { result, error } = useGlobalContext();
  return (
    <div>
      { error || <p>A sua reforma vai precisar de {result}L de tinta</p>}
    </div>
  );
}

export default Results;