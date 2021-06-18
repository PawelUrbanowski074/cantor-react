import { useState } from "react";
import UserInput from "./UserInput";
import Output from "./Output";
import Currency from "./Currency";
import Header from "./Header";
import Prize from "./Prize";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Container from "./Container";
import currencies from "./Currencies";
import Clock from "./Clock";

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
      <Form onFormSubmit={onFormSubmit} onFormReset={onFormReset}>
        <Clock />
        <Fieldset title="Co sprzedajesz:">
          <Currency
            currencies={currencies}
            name="sell"
            sellFieldset={true}
            sellCurrency={sellCurrency}
            setSellCurrency={setSellCurrency}
            buyCurrency={buyCurrency}
            setBuyCurrency={setBuyCurrency}
          />
          <Prize
            title="Kwota:"
            extraContent={<UserInput transactionAmount={transactionAmount} setTransactionAmount={setTransactionAmount} />}
          />
        </Fieldset>
        <Fieldset title="Co kupujesz:">
          <Currency
            currencies={currencies}
            name="buy"
            sellFieldset={false}
            sellCurrency={sellCurrency}
            setSellCurrency={setSellCurrency}
            buyCurrency={buyCurrency}
            setBuyCurrency={setBuyCurrency}
          />
          <Prize title="Do wypłaty:" extraContent={<Output transactionResult={transactionResult} />} />
        </Fieldset>
        <Buttons />
      </Form>
    </Container>
  );
}

export default App;