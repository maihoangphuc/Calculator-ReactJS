import React, { useState } from "react";
import { TbEqual, TbDivide } from "react-icons/tb";
import { FiPercent, FiMinus, FiPlus, FiX } from "react-icons/fi";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [active, setActive] = useState("");

  const numberWithCommas = Intl.NumberFormat(["ban", "id"]).format(num);
  const numberLength = num.toString().length;

  const inputNum = (e) => {
    setActive("");
    const input = e.target.value;
    if (input === "0" && num === 0) {
      setNum(num);
    } else if (input === "." && num === 0) {
      setNum(num + input);
    } else {
      setNum(num + input);
    }
  };

  const operatorHandler = (operator) => {
    setActive(operator);
    setOperator(operator);
    setOldNum(num);
    setNum(0);
  };

  const clear = () => {
    setActive();
    setNum(0);
    setOldNum(0);
    setOperator("");
  };

  const porcentage = () => {
    setActive("");
    setNum(num / 100);
  };

  const changeSign = () => {
    setActive("");
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const calculate = () => {
    setActive("");
    setOperator("");
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{numberWithCommas}</div>
        <button className="btn light-gray" onClick={clear}>
          {num === 0 && operator === "" ? "AC" : "C"}
        </button>
        <button className="btn light-gray" onClick={changeSign}>
          +/-
        </button>
        <button className="btn light-gray" onClick={porcentage}>
          <FiPercent />
        </button>
        <button
          className={active === "/" ? "btn active-operator" : "btn orange"}
          onClick={() => {
            operatorHandler("/");
          }}
        >
          <TbDivide />
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 7}
        >
          7
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 8}
        >
          8
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 9}
        >
          9
        </button>
        <button
          className={active === "x" ? "btn active-operator" : "btn orange"}
          onClick={() => {
            operatorHandler("x");
          }}
        >
          <FiX />
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 4}
        >
          4
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 5}
        >
          5
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 6}
        >
          6
        </button>
        <button
          className={active === "-" ? "btn active-operator" : "btn orange"}
          onClick={() => {
            operatorHandler("-");
          }}
        >
          <FiMinus />
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 1}
        >
          1
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 2}
        >
          2
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 3}
        >
          3
        </button>
        <button
          className={active === "+" ? "btn active-operator" : "btn orange"}
          onClick={() => {
            operatorHandler("+");
          }}
        >
          <FiPlus />
        </button>
        <button
          className="btn active-gray zero"
          onClick={inputNum}
          value={numberLength === 10 ? "" : 0}
        >
          0
        </button>
        <button
          className="btn active-gray"
          onClick={inputNum}
          value={numberLength === 10 || numberLength === 1 ? "" : "."}
        >
          ,
        </button>
        <button className="btn active-orange orange" onClick={calculate}>
          <TbEqual />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
