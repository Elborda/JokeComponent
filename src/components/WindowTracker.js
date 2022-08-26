import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth((prevState) => {
        return (prevState = window.innerWidth);
      });
    });
  }, []);

  return <h3>Window width: {windowWidth}</h3>;
}
