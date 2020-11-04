import React from "react";
import {Button, Form} from "react-bootstrap"

const Question = ({operator, left, right, onAnswer}) => {
  const [value, setValue] = React.useState();

return (
<div>
  {left} {operator} {right} = 
  <Form.Control type="number" value={value} onChange={evt => setValue(evt.target.value)} />
  <Button onClick={() => onAnswer(parseInt(value))}>Answer</Button>
</div>)
}

export default Question;
