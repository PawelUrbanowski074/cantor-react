import { SelectWrapper, Option } from "./styled.js";

const Select = ({currency, setCurrency, rates}) => {
    return (
        <SelectWrapper
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
        >
            {Object.keys(rates).map((currencyArray) => (
                <Option
                    key={currencyArray}
                    value={currencyArray}
                >
                    {currencyArray}
                </Option>
            ))}
        </SelectWrapper>
    );
};

export default Select;