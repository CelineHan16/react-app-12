// import { useState } from "react";
import Example3 from "./Example3";

function Example2(props) { 
  // Spread Operator
  return (
    <div>
      <Example3 {...props} />
    </div>
  );
}

export default Example2;