import { FieldsetWrapper, Legend } from "./styled";

const Fieldset = ({ title, children }) => (
    <FieldsetWrapper>
        <Legend>{title}</Legend>
        {children}
    </FieldsetWrapper>
);

export default Fieldset;