import React, {useState} from 'react';
import { render } from "react-dom";
import { SuccessModal } from "./lib";

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1>Success Modal</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <SuccessModal open={open} setOpen={setOpen} />
    </div>
  );
}

render(<App />, document.getElementById("root"));
