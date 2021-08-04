import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Binance() {

  const authToken = localStorage.getItem('jwToken');

  const [api, setApi] = useState({key: '', secret: ''});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const {name, value} = e.target;
    setApi(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3300/api-manager/binance', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify(api)
    })
    .then(response => {
      setSubmitted(true);
      return response.json()
    })
    .then(data => console.log('Added api'))
  }

  if (submitted) {
    return <Redirect to='/profile'/>
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Key: </label>
        <input type='text' id='key' name='key' placeholder='key' value={api.key} onChange={handleChange} /><br/>
        <label>Secret: </label>
        <input type='text' id='secret' name='secret' placeholder='secret' value={api.secret} onChange={handleChange} /><br/>
        <input type='submit' value='Log In'/>
      </form>
    </div>
  )
}