import React, {useState, useEffect} from 'react';

export default function Register() {

  const [user, setUser] = useState({name: '', userName: '', password: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setUser(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });    
  }

  function handleSubmit(e) {
    e.preventDefault();

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='name' >Name: </label>
        <input type='text' id='name' name='name' value={user.name} onChange={handleChange} /><br/>
        <label for='userName' >Username: </label>
        <input type='text' id='userName' name='userName' value={user.userName} onChange={handleChange} /><br/>
        <label for='password' >Password: </label>
        <input type='text' id='password' name='password' value={user.password} onChange={handleChange} /><br/>
      </form>
    </div>
  )
}