import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import currencies from "./Currencies";

function App() {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState("Euro");
  const [buyCurrency, setBuyCurrency] = useState("Złoty");
  const [transactionResult, setTransactionResult] = useState("Brak");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const result = calculateResult(transactionAmount, sellCurrency, buyCurrency);
    setTransactionResult(`${result} ${getCurrency(buyCurrency).resultText}`);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setTransactionAmount("");
    setTransactionResult("Brak");
    setSellCurrency("");
    setBuyCurrency("");
  };

  const getRate = (sellCurrency, buyCurrency) => {
    const saleRate = getCurrency(sellCurrency).rate;
    const buyRate = getCurrency(buyCurrency).rate;
    return saleRate / buyRate;
  };

  const calculateResult = (transactionAmount, sellCurrency, buyCurrency) => {
    return (transactionAmount * getRate(sellCurrency, buyCurrency)).toFixed(2);
  };

  const getCurrency = (currency) => {
    return currencies.find(({ name }) => name === currency)
  };

  return (
    <Container>
      <Header title="Internetowy kantor walut" />
      <Form
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        currencies={currencies}
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