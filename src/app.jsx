import First from "./components/first";
import Second from "./components/second";
import WithParams from "./components/WithParams";
import React from "react";
import "./index.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <First />

      <Second />

      <WithParams
        title="Situação do aluno"
        aluno="ian"
        min={0}
        max={10} />

    </>
  );
};
