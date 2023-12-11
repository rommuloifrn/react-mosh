//import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["shen", "irelia", "xin zhao"];
  //items = [];

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  // pra deixar o código mais ocmpacto, pode-se atribuir um pedaço de código a uma variável e depois utiliza-la no retorno:
  const message = items.length === 0 ? <p>no item found</p> : null;

  // se for querer fazer condicionais baseadas em outros valores em uma parte da renderização, é melhor usar funções:
  const getMessage = () => {
    return items.length === 0 ? <p>no item found</p> : null;
  };

  return (
    // o react interpreta tags vazias como Fragment
    // otherwise: <Fragment>
    <>
      <h1>aaaaa</h1>
      {/* outra forma de aplicar a mesma lógica: */}
      {/* items.length === 0 && <p>no item found</p> */}
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} onClick={handleClick} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
