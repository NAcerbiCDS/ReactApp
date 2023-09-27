import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <CounterContainer stock={5} />
    </>
  );
}

export default App;