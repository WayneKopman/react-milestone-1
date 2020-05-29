import React, { useState } from "react";
import "./App.css";
import useForm from "./useForm";
import validateForm from "./validateForm";

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validateForm
  );

  function submit() {
    console.log("Submitted Successfully");
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label htmlFor="password">Password*</label>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
