import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import currencies from "./Currencies";

function App() {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState(currencies[0].short);
  const [buyCurrency, setBuyCurrency] = useState(currencies[1].short);
  const [transactionResult, setTransactionResult] = useState("Brak");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const result = calculateResult(transactionAmount, sellCurrency, buyCurrency);
    const resultText = `${result} ${getCurrency(buyCurrency).short}`;
    setTransactionResult(resultText);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setTransactionAmount("");
    setTransactionResult("Brak");
    setSellCurrency(currencies[0].short);
    setBuyCurrency(currencies[1].short);
  };

  const getCurrency = (currency) => {
    return currencies.find(({ short }) => short === currency)
  };

  const getRate = (sellCurrency, buyCurrency) => {
    const saleRate = getCurrency(sellCurrency).rate;
    const buyRate = getCurrency(buyCurrency).rate;
    return saleRate / buyRate;
  };

  const calculateResult = (transactionAmount, sellCurrency, buyCurrency) => {
    return (transactionAmount * getRate(sellCurrency, buyCurrency)).toFixed(2);
  };

  return (
    <Container>
      <Header title="Internetowy kantor walut" />
      <Form
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        sellCurrency={sellCurrency}
        setSellCurrency={setSellCurrency}
        buyCurrency={buyCurrency}
        setBuyCurrency={setBuyCurrency}
        transactionAmount={transactionAmount}
        setTransactionAmount={setTransactionAmount}
        transactionResult={transactionResult}
      />
    </Container>
  );
}

export default App;