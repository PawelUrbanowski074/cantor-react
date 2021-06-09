import "./style.css";

const Fieldset = ({ title, children }) => (
    <fieldset className="fieldset">
        <legend className="fieldset__legend">{title}</legend>
        {children}
    </fieldset>
);

export default Fieldset;