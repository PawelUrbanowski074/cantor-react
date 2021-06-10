import "./style.css";

const Currency = ({ currencies }) => (
  <ul className="currency">
    {currencies.map(currency => (
      <li key={currency.id} className="currency__item">
        <label className="currency__label">
          <input type="radio" name="sell" value={currency.name} className="currency__input" required />
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