import "./style.css";

const Currency = ({ currencies, name, sell, sellCurrency, setSellCurrency, buyCurrency, setBuyCurrency }) => (
  <ul className="currency">
    {currencies.map(currency => (
      <li key={currency.id} className="currency__item">
        <label className="currency__label">
          <input
            type="radio"
            name={name}
            value={sellCurrency}
            className="currency__input"
            required
            checked={currency.name === (sell ? sellCurrency : buyCurrency)}
            onChange={({ target }) => (sell ?  setSellCurrency(currency.name) : setBuyCurrency(currency.name))}

          />
          <span className="currency__radioText">{currency.name}</span>
          <img
            className="currency__image"
            src={currency.image}
            alt={currency.altText}
          />
        </label>
      </li>
    ))}
  </ul>
);

export default Currency;