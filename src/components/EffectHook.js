import React from "react";

export default function EffectHook() {
  const [starWars, setStarWars] = React.useState({});
  const [count, setCount] = React.useState(1);

  function sumar() {
    setCount((prevCount) => prevCount + 1);
  }

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWars(data));
  }, [count]);
  console.log(starWars);

  return (
    <div>
      <p>The count is</p>
      <span>{count}</span>
      <button onClick={sumar}>Sumando</button>
    </div>
  );
}
