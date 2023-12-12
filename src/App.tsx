import ListGroup from "./components/ListGroup";

function App() {
  let items = ["shen", "irelia", "xin zhao", "tchembas"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Personages" onSelectItem={handleSelectItem}/></div>
}

export default App;