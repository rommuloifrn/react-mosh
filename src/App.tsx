import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["shen", "irelia", "xin zhao", "tchembas"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  //return <div><ListGroup items={items} heading="Personages" onSelectItem={handleSelectItem}/></div>

  return (
    <div>
      <Alert><b>hi man</b></Alert>
      <Button onClick={() => console.log("click'd")} color="primary">mabutto!</Button>
    </div>
  )
}

export default App;