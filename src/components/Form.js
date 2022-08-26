import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <textarea
          value={formData.comments}
          onChange={handleChange}
          name="comments"
        />
        <input
          type="checkbox"
          id="isChecked"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        ></input>
      </form>
    </div>
  );
}
