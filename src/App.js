import React from "react";
import Form from "./components/Form";
import Loggin from "./components/Loggin";
import EffectHook from "./components/EffectHook";
import WindowTracker from "./components/WindowTracker";
export default function App() {
  const [mensaje, setMensaje] = React.useState(["a", "b"]);

  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevState) => {
      return prevState ? false : true;
    });
  }
  console.log(show);

  return (
    <>
      <button onClick={toggle}>Toggle Window Cracker</button>
      {show == true && <WindowTracker />}
    </>
  );
}
