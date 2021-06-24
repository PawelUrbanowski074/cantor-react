import { PrizeWrapper, PrizeText } from "./styled";

const Prize = ({ title, extraContent }) => (
    <PrizeWrapper>
        <PrizeText>{title}</PrizeText>
        {extraContent}
    </PrizeWrapper>
);

export default Prize;