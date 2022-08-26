import React from "react";

export default function Loggin() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmedPassword: "",
    wantJoin: false,
  });

  function onHandle(event) {
    const { value, name, checked, type } = event.target;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function enviar(event) {
    event.preventDefault();
    if (user.password == user.confirmedPassword) {
      console.log("Correctoo!");
    } else {
      console.log("Contraseñas no concuerdan");
      return;
    }
    if (user.wantJoin) {
      console.log("Gracias por suscribirte al newsletter");
    }
    console.log(user, user.password);
  }

  return (
    <div className="form--container">
      <form className="formulario" onSubmit={enviar}>
        <input
          type="email"
          placeholder="email"
          onChange={onHandle}
          name="email"
          value={user.email}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={onHandle}
        ></input>
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmedPassword"
          onChange={onHandle}
          value={user.confirmedPassword}
        ></input>
        <div>
          <input
            type="checkbox"
            onChange={onHandle}
            id="join"
            name="wantJoin"
            checked={user.wantJoin}
          ></input>
          <label htmlFor="join">I want to join the newsletter</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
