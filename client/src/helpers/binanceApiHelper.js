export default function fetchFunc(symbols, setSymbols) {
    for(let i = 0; i < symbols.length; i++) {
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=' + symbols[i])
      .then(response => response.json())
      .then(data => setSymbols[i](data));
    }
  
} 