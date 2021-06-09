import Input from "./Input";
import Output from "./Output";
import Currency from "./Currency";
import Header from "./Header";
import Prize from "./Prize";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header title="Internetowy kantor walut" />
      <Form>
        <Fieldset title="Co sprzedajesz:">
          <Currency />
          <Prize title="Kwota:" extraContent={<Input />} />
        </Fieldset>
        <Fieldset title="Co kupujesz:">
          <Currency />
          <Prize title="Do wypłaty:" extraContent={<Output />} />
        </Fieldset>
        <Buttons />
      </Form>
    </Container>
  );
}

export default App;
