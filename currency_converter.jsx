const { useState, useMemo } = React;

export function CurrencyConverter() {

  const [num, setNum] = useState(1);
  const [start, setStart] = useState("USD");
  const [target, setTarget] = useState("EUR");

  const currencyCategories = [
    "USD",
    "EUR",
    "GBP",
    "JPY"
  ];

  const exchangeRate = {
    "USD": 1,
    "EUR": 1.1638,
    "GBP": 1.3455,
    "JPY": 157.55
  };

  const amounts = useMemo(() => {
    const result = num / exchangeRate[start];
    return result;
  }, [num, start]);


  return (
    <div id="currency-converter">
      <h1 id="title">Currency Converter</h1>
      <h3>{start} to {target} Conversion</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <label>Start Currency:
        <select
          value={start}
          onChange={(e) => setStart(e.target.value)}
        >
          {currencyCategories.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </label>
      <label>Target Currency:
        <select
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        >
          {currencyCategories.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </label>
      <h3 id="result">
        Converted Amount: {(amounts * exchangeRate[target]).toFixed(2)} {target}
      </h3>
    </div>
  );
}
