import "./style.css";


const Form = ({ children, transactionAmount, setTransactionAmount }) => {

    
    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log(transactionAmount);
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            {children}
        </form>
    );
};

export default Form;