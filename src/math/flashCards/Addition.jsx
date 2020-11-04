import React from "react";
import Question from "./Question";
import Result from "./Result";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createQuestion = () => {
  const left = getRandomInt(12);
  const right = getRandomInt(12);

  return ({left, right, operator: "+", result: left + right})
};

const Addition = () => {
  const [question, setQuestion] = React.useState(createQuestion());
  const [state, setState] = React.useState("question");
  const [result, setResult] = React.useState(0);

  switch (state) {
    case "question":
      return <Question left={question.left} right={question.right} operator={question.operator} onAnswer={x => {setResult(x); setState("result");}} />
    case "result":
      return <Result result={result} expected={question.result} onDone={() => {setQuestion(createQuestion()); setState("question");}} />
      default:
        return <div>You shouldn't see this...</div>
  }
}

export default Addition;
