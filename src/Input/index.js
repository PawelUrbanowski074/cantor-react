import "./style.css";

const Input = () => (
    <input 
        className="cash" 
        type="number" 
        min="0" 
        step="0.1" 
        required 
    />
);

export default Input;