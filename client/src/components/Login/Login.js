import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Login() {

  const [user, setUser] = useState({userName: '', password: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setUser(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3300/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type='text' id='userName' name='userName' placeholder='username' value={user.userName} onChange={handleChange} /><br/>
        <label>Password: </label>
        <input type='password' id='password' name='password' placeholder='password' value={user.password} onChange={handleChange} /><br/>
        <input type='submit' value='Log In'/>
      </form>
    </div>
  )
}