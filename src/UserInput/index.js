import "./style.css";

const UserInput = ({ transactionAmount, setTransactionAmount }) => {
    return (
        <input
            value={transactionAmount}
            onChange={({ target }) => setTransactionAmount(target.value)}
            className="cash"
            type="number"
            min="0"
            step="0.1"
            required
        />
    )
};

export default UserInput;