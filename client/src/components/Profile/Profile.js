import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Profile() {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InN0b3lrbzkwIiwiaWF0IjoxNjI4MDM0MzI4LCJleHAiOjE2MjgwNTU5Mjh9.1_w3CkRhMJrHPNQy_TJN-31Z0jzMOrRR4YWPqDugHw0';

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