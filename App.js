import React, { useState } from "react";

function App() {
  // Step 1: create state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2: handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 3: handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(
      `Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  // Step 4: show the form
  return (
    <div style={{ margin: "50px" }}>
      <h2>React Form Handling Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
