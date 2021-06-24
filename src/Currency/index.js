import { List, Item, Label, Input, RadioText, Image } from "./styled";

const Currency = ({ currencies, name, sellFieldset, sellCurrency, setSellCurrency, buyCurrency, setBuyCurrency }) => (
  <List>
    {currencies.map(currency => (
      <Item key={currency.id}>
        <Label>
          <Input
            type="radio"
            name={name}
            value={sellCurrency}
            required
            checked={currency.name === (sellFieldset ? sellCurrency : buyCurrency)}
            onChange={() => (sellFieldset ? setSellCurrency : setBuyCurrency)(currency.name)}
          />
          <RadioText>{currency.name}</RadioText>
          <Image
            src={currency.image}
            alt={currency.altText}
          />
        </Label>
      </Item>
    ))}
  </List>
);

export default Currency;