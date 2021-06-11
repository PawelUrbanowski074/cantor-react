import "./style.css";

const Form = ({ children, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            {children}
        </form>
    );
};

export default Form;