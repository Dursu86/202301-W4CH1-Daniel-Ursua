import "./App.css";
import { gentlemock } from "../../mocks/gentlemock";
import { Gentleman } from "../gentlemen/gentleman";
import { Header } from "../header/header";
import { Button } from "../button/button";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      {gentlemock.map((elem, i) => (
        <Gentleman
          key={i}
          name={elem.name}
          status={elem.status}
          profession={elem.profession}
          twitter={elem.twitter}
          picture={elem.picture}
          alternativeText={elem.alternativeText}
        ></Gentleman>
      ))}
    </div>
  );
}

export default App;
