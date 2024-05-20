import { useState } from "react";
import { ListButtons } from "components";
import css from "./App.module.css";
const App = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "x", "÷", "%"];

  const [num, setNum] = useState("");

  const handleChangeButtonValue = (newNum) => {
    setNum((prevNum) => prevNum + newNum);
  };

  const handleEqual = () => {
    const list = num.match(/\d+|[^\d\s]/g);
    const listOperands = num.match(/\d+/g);
    const listOperations = num.match(/[+\-x÷%]/g);
    const [num1, num2, ...rest] = listOperands;
    let res = parseFloat(num1) + parseFloat(num2);
    rest.forEach((element) => {
      res += parseFloat(element);
    });
    console.log(res);
  };
  // const operand1 = parseFloat(num.match(/\d+|[^\d\s]/g)[0]);
  // const operation = num.match(/\d+|[^\d\s]/g)[1];
  // const operand2 = parseFloat(num.match(/\d+|[^\d\s]/g)[2]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>{num}</h1>
      <ListButtons
        listNumbers={numbers}
        listOperations={operations}
        onClick={handleChangeButtonValue}
        onResult={handleEqual}
      />
    </div>
  );
};
export default App;
