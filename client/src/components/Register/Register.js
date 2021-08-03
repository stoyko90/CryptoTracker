import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Register() {

  const [user, setUser] = useState({name: '', userName: '', password: ''});
  const [submitted, setSubmitted] = useState(false);

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
    fetch('http://localhost:3300/register', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        setSubmitted(true);
        return response.json()
      })
      .then(data => console.log(data))
   
  }

  if (submitted) {
    return <Redirect to='/login'/>
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' id='name' name='name' placeholder='name' value={user.name} onChange={handleChange} /><br/>
        <label>Username: </label>
        <input type='text' id='userName' name='userName' placeholder='username' value={user.userName} onChange={handleChange} /><br/>
        <label>Password: </label>
        <input type='password' id='password' name='password' placeholder='password' value={user.password} onChange={handleChange} /><br/>
        <input type='submit' value='Create account'/>
      </form>
    </div>
  )
}