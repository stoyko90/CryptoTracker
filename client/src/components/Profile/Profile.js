import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Profile() {

  const authToken = localStorage.getItem('jwToken');
  const URL = 'http://localhost:3300/profile';
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + authToken
      }
    })
    .then(response => response.json())
    .then(data => setCryptos(data))
  }, []);


  return (
    <div>
      <table>
        <tr>
          <th>Asset</th>
          <th>Amount</th>
        </tr>
      {cryptos.map(crypto => {
        return (
          <tr key={crypto._id}>
            <td>{crypto.asset}</td>
            <td>{crypto.amount}</td>
          </tr>
          )})
      } 
      </table>
    </div>
  )
}