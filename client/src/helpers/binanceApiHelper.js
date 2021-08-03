export default function fetchFunc(url, symbols, setSymbols) {

  return setInterval(() => {
    for(let i = 0; i < symbols.length; i++) {
      fetch(url + symbols[i])
      .then(response => response.json())
      .then(data => setSymbols[i](data));
    }
  }, 30000)
} 