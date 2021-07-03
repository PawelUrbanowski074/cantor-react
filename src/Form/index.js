import { FormWrapper, Label, Span, Select, Option, Cash, ApiStatus } from "./styled";
import Clock from "../Clock";
import Fieldset from "../Fieldset";
import Buttons from "../Buttons";
import Date from "../Date";

const Form = ({
    onFormSubmit,
    onFormReset,
    sellCurrency,
    setSellCurrency,
    buyCurrency,
    setBuyCurrency,
    transactionAmount,
    setTransactionAmount,
    transactionResult,
    rates,
    state,
    date,
}) => {

    return (
        <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
            <Clock />

            {state === "loading" ? (
                <ApiStatus>
                    Trwa ładowanie niezbędnych informacji.
                    <br/> Proszę, zaczekaj chwilę... 
                </ApiStatus>
            ) : state === "error" ? (
                <ApiStatus>
                    Ups... coś poszło nie tak.<br/> 
                    Sprawdź połączenie z internetem, lub spróbuj ponownie później.
                </ApiStatus>
            ) : (
                <>
                    <Fieldset title="Co sprzedajesz:">
                        <Label>
                            <Span>Wybierz walutę:</Span>
                            <Select
                                value={sellCurrency}
                                onChange={({ target }) => setSellCurrency(target.value)}
                            >
                                {Object.keys(rates).map((currencyArray => (
                                    <Option
                                        key={currencyArray}
                                        value={currencyArray}
                                    >
                                        {currencyArray}
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
                                {Object.keys(rates).map((currencyArray => (
                                    <Option
                                        key={currencyArray}
                                        value={currencyArray}
                                    >
                                        {currencyArray}
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
                    <Date date={date}/>
                </>
            )}
        </FormWrapper>
    );
};

export default Form;