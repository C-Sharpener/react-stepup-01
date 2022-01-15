import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = (e) => setOpen(!open);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button> */}
      {/* <input /> */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      {/* <button>表示</button> */}
      <button onClick={onClickOpen}>表示</button>
      {/* <ChildArea /> */}
      <ChildArea open={open} />
    </div>
  );
}
