import { Cash } from "./styled";

const UserInput = ({ transactionAmount, setTransactionAmount }) => {
    return (
        <Cash
            value={transactionAmount}
            onChange={({ target }) => setTransactionAmount(target.value)}
            type="number"
            min="0"
            step="0.1"
            required
        />
    )
};

export default UserInput;