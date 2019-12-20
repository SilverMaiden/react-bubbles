import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({});

  const login = event => {
      event.preventDefault();
      axiosWithAuth().post("http://localhost:5000/api/login", credentials)
      .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.payload);
          props.history.push('/bubblepage');
      })
  }

  const handleChange = event => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
    })
  }


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <h6> Please login to continue</h6>
      <form onSubmit={login} >
        <input
            label="username"
            placeholder="username"
            name="username"
            type="text"
            onChange={handleChange}
        />
        <input
            label="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
        />
        <button> Login </button>
        </form>
    </div>
  );
};

export default Login;
