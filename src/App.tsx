import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect( () => console.log(counter, 'modified'), [counter])

  return (
    <>
      <h1>Bonjour</h1>
      <h2>Comptage: {counter}</h2>
      <Button 
        classTitle={["Btn-base","Btn-type1"]}
        typeBtn="submit"
        onBtnClick={ () => console.log("Je submit !") }
      >
        Bingo !
      </Button>
      <Button 
        classTitle={["Btn-base","Btn-type2"]}
        typeBtn="reset"
        onBtnClick={ 
          () => {
            setCounter(0)
            console.log("Je reset")
          } 
        }
      >
        Reset
      </Button>
      <Button 
        classTitle={["Btn-base","Btn-type3"]}
        typeBtn="button"
        onBtnClick={
          () => {
            setCounter(counter + 1)
            console.trace(counter);
          }
        }
      >
        +1
      </Button>
      <Button 
        classTitle={["Btn-base","Btn-type4"]}
        typeBtn="button"
        onBtnClick={
          () => {
            setCounter(counter - 1)
            console.trace(counter);
          }
        }
      >
        -1
      </Button>
    </>
  );
};

export default App;
