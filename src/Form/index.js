import "./style.css";
import Clock from "../Clock";
import Fieldset from "../Fieldset";
import Currency from "../Currency";
import Prize from "../Prize";
import UserInput from "../UserInput";
import Output from "../Output";

const Form = ({ onFormSubmit, onFormReset, currencies, sellCurrency, setSellCurrency, buyCurrency, setBuyCurrency, transactionAmount, setTransactionAmount, transactionResult }) => {
    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            <Clock/>
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
                <Prize
                    title="Do wypłaty:" 
                    extraContent={<Output transactionResult={transactionResult} />} 
                />
            </Fieldset>
        </form>
    );
};

export default Form;