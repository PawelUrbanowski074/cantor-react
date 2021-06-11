import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Currency from "./Currency";
import Header from "./Header";
import Prize from "./Prize";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Container from "./Container";
import currencies from "./Currencies";

function App() {

  const [transactionAmount, setTransactionAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState("Euro");
  const [buyCurrency, setBuyCurrency] = useState("Złoty");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const result = calculateResult(transactionAmount, sellCurrency, buyCurrency);
    
  };

  const getRate = (sellCurrency, buyCurrency) => {
    const saleRate = currencies.find(({ name }) => name === sellCurrency).rate;
    const buyRate = currencies.find(({ name }) => name === buyCurrency).rate;
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
      >
        <Fieldset title="Co sprzedajesz:">
          <Currency
            currencies={currencies}
            name="sell"
            sell={true}
            sellCurrency={sellCurrency}
            setSellCurrency={setSellCurrency}
            buyCurrency={buyCurrency}
            setBuyCurrency={setBuyCurrency}
          />
          <Prize
            title="Kwota:"
            extraContent={<Input transactionAmount={transactionAmount} setTransactionAmount={setTransactionAmount} />}
          />
        </Fieldset>
        <Fieldset title="Co kupujesz:">
          <Currency
            currencies={currencies}
            name="buy"
            sell={false}
            sellCurrency={sellCurrency}
            setSellCurrency={setSellCurrency}
            buyCurrency={buyCurrency}
            setBuyCurrency={setBuyCurrency}
          />
          <Prize title="Do wypłaty:" extraContent={<Output/>} />
        </Fieldset>
        <Buttons />
      </Form>
    </Container>
  );
}

export default App;
