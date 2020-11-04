import React from "react";

const Result = ({result, expected, onDone}) => {
  React.useEffect(() => {
    const timeout = setTimeout(onDone, 3000);

    return () => clearTimeout(timeout);
  })

  return <div>{result === expected ? "RIGHT!!!!" : "Wrong :(" }</div>
}

export default Result;
