import React, {useState, useEffect} from 'react';
import fetchFunc from '../../helpers/binanceApiHelper';
import { symbols } from '../../helpers/binanceSymbols';
import Register from '../Register/Register';
import { Link } from 'react-router-dom'; 
export default function Home() {

  
  const [btc, setBtc] = useState('');
  const [eth, setEth] = useState('');
  const [bnb, setBnb] = useState('');
  const [ada, setAda] = useState('');
  const [xrp, setXrp] = useState('');
  const [doge, setDoge] = useState('');
  const [dot, setDot] = useState('');
  const [uni, setUni] = useState('');
  const [link, setLink] = useState('');
  const [ltc, setLtc] = useState('');
  const [sol, setSol] = useState('');
  const [xlm, setXlm] = useState('');
  const [vet, setVet] = useState('');
  
  const setSymbols = [setBtc, setEth, setBnb, setAda, setXrp, setDoge, setDot, setUni, setLink, setLtc, setSol, setXlm, setVet];

  useEffect(() => {
    fetchFunc(symbols, setSymbols);
    const interval = setInterval(() => {
      fetchFunc(symbols, setSymbols);

    }, 30000)

    return () => {
      clearInterval(interval);
    }
  },[])  

  return (
    <div>
      <p>{btc.symbol}: {btc.price}</p>
      <p>{eth.symbol}: {eth.price}</p>
      <p>{bnb.symbol}: {bnb.price}</p>
      <p>{ada.symbol}: {ada.price}</p>
      <p>{xrp.symbol}: {xrp.price}</p>
      <p>{doge.symbol}: {doge.price}</p>
      <p>{dot.symbol}: {dot.price}</p>
      <p>{uni.symbol}: {uni.price}</p>
      <p>{link.symbol}: {link.price}</p>
      <p>{ltc.symbol}: {ltc.price}</p>
      <p>{sol.symbol}: {sol.price}</p>
      <p>{xlm.symbol}: {xlm.price}</p>
      <p>{vet.symbol}: {vet.price}</p>
      <Link to="/register">Register</Link><br/>
      <Link to="/login">Log In</Link>
    </div>
  )
}