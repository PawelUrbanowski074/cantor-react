import { useState } from "react";
import { useApiRates } from "./useApiRates";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";

function App() {
  const ApiData = useApiRates();

  const [transactionAmount, setTransactionAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState("EUR");
  const [buyCurrency, setBuyCurrency] = useState("PLN");
  const [transactionResult, setTransactionResult] = useState("Brak");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const result = calculateResult(transactionAmount, sellCurrency, buyCurrency);
    const resultText = `${result}  ${buyCurrency}`;
    setTransactionResult(resultText);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setTransactionAmount("");
    setTransactionResult("Brak");
    setSellCurrency("EUR");
    setBuyCurrency("PLN");
  };

  const getCurrency = (currency) => {
    return ApiData.rates[currency];
  };

  const getRate = (sellCurrency, buyCurrency) => {
    const saleRate = getCurrency(sellCurrency);
    const buyRate = getCurrency(buyCurrency);
    console.log(buyRate + " " + saleRate);
    return  buyRate / saleRate ;
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

        rates={ApiData.rates}
        state={ApiData.state}
        date={ApiData.date}
      />
    </Container>
  );
}

export default App;