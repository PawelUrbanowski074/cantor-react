import currencies from "../Currencies";
import { FormWrapper, Label, Span, Select, Option, Cash } from "./styled";
import Clock from "../Clock";
import Fieldset from "../Fieldset";
import Buttons from "../Buttons";

const Form = ({
    onFormSubmit,
    onFormReset,
    sellCurrency,
    setSellCurrency,
    buyCurrency,
    setBuyCurrency,
    transactionAmount,
    setTransactionAmount,
    transactionResult
}) => {

    return (
        <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
            <Clock />
            <Fieldset title="Co sprzedajesz:">
                <Label>
                    <Span>Wybierz walutę:</Span>
                    <Select
                        value={sellCurrency}
                        onChange={({ target }) => setSellCurrency(target.value)}
                    >
                        {currencies.map((currencyArray => (
                            <Option
                                key={currencyArray.short}
                                value={currencyArray.short}
                            >
                                {currencyArray.name}
                            </Option>
                        )))}
                    </Select>
                </Label>
                <Label>
                    <Span>Kwota:</Span>
                    <Cash
                        value={transactionAmount}
                        onChange={({ target }) => setTransactionAmount(target.value)}
                        type="number"
                        min="0"
                        step="0.1"
                        required
                        placeholder="Wpisz kwotę..."
                    />
                </Label>
            </Fieldset>
            <Fieldset title="Co kupujesz:">
                <Label>
                    <Span>Wybierz walutę:</Span>
                    <Select
                        value={buyCurrency}
                        onChange={({ target }) => setBuyCurrency(target.value)}
                    >
                        {currencies.map((currencyArray => (
                            <Option
                                key={currencyArray.short}
                                value={currencyArray.short}
                            >
                                {currencyArray.name}
                            </Option>
                        )))}
                    </Select>
                </Label>
                <Label>
                    <Span>Do wypłaty:</Span>
                    <Cash
                        value={transactionResult}
                        disabled
                    />
                </Label>
            </Fieldset>
            <Buttons />
        </FormWrapper>
    );
};

export default Form;