import "./style.css";

const Currency = () => (
  <ul className="currency">
    <li className="currency__item">
      <label className="currency__label">
        <input type="radio" name="sell" value="zloty" className="currency__input" required />
        <span className="currency__radioText">Złotówki</span>
        <img
          className="currency__image"
          src="https://i.postimg.cc/6QY6tWdx/pln.png"
          alt="flaga Polski"
        />
      </label>
    </li>
    <li className="currency__item">
      <label className="currency__label">
        <input type="radio" name="sell" value="euro" className="currency__input" />
        <span className="currency__radioText">Euro</span>
        <img
          className="currency__image"
          src="https://i.postimg.cc/ht0QQq9p/euro.jpg"
          alt="flaga Europy"
        />
      </label>
    </li>
    <li className="currency__item">
      <label className="currency__label">
        <input type="radio" name="sell" value="dolar" className="currency__input" />
        <span className="currency__radioText">Dolar</span>
        <img
          className="currency__image"
          src="https://i.postimg.cc/sXbMCfrD/usd.png"
          alt="flaga Stanów Zjednoczonych"
        />
      </label>
    </li>
  </ul>
);

export default Currency;