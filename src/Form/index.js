import "./style.css";

const Form = ({ children, onFormSubmit, onFormReset }) => {
    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            {children}
        </form>
    );
};

export default Form;