import "./style.css";

const Prize = ({ title, extraContent }) => (
    <label className="prize">
        <span className="prize__text">{ title }</span>
        {extraContent}
    </label>
);

export default Prize;