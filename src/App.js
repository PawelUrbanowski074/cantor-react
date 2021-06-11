import Input from "./Input";
import Output from "./Output";
import Currency from "./Currency";
import Header from "./Header";
import Prize from "./Prize";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Container from "./Container";

const currencies = [
  {
    id: 1,
    name: "Złoty",
    image: "https://i.postimg.cc/6QY6tWdx/pln.png",
    altText: "flaga Polski",
    rate: 1
  },
  {
    id: 2,
    name: "Euro",
    image: "https://i.postimg.cc/ht0QQq9p/euro.jpg",
    altText: "flaga Europy",
    rate: 4.54
  },
  {
    id: 3,
    name: "Dolar",
    image: "https://i.postimg.cc/sXbMCfrD/usd.png",
    altText: "flaga Stanów Zjednoczonych",
    rate: 3.79
  },
];

function App() {


  return (
    <Container>
      <Header title="Internetowy kantor walut" />
      <Form>
        <Fieldset title="Co sprzedajesz:">
          <Currency
            currencies={currencies}
            name="sell"
          />
          <Prize title="Kwota:" extraContent={<Input />} />
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
