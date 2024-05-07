import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic1: false,
    topic2: false,
    topic3: false,
    submitted: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      submitted: true
    });
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="topic1"
            checked={formData.topic1}
            onChange={handleChange}
          />
          Topic 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="topic2"
            checked={formData.topic2}
            onChange={handleChange}
          />
          Topic 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="topic3"
            checked={formData.topic3}
            onChange={handleChange}
          />
          Topic 3
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData.submitted && (
        <p>Form submitted successfully!</p>
      )}
    </main>
  );
}

export default App;
