import logo from "./logo.svg";
import "./App.css";
import JeuDe from "./components/JeuDe";

function App() {
  return (
    <>
      <JeuDe secret={2} />
      <JeuDe secret={4} />
    </>
  );
}

export default App;
