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

  
  return (
    <Container>
      <Header title="Internetowy kantor walut" />
      <Form transactionAmount={transactionAmount} setTransactionAmount={setTransactionAmount} >
        <Fieldset title="Co sprzedajesz:">
          <Currency
            currencies={currencies}
            name="sell"
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
          />
          <Prize title="Do wypłaty:" extraContent={<Output />} />
        </Fieldset>
        <Buttons />
      </Form>
    </Container>
  );
}

export default App;
