import { ButtonsWrapper, Button } from "./styled";

const Buttons = () => (
  <ButtonsWrapper>
    <Button type="submit" value="Sprzedaj!" />
    <Button type="reset" value="Zresetuj formularz" />
  </ButtonsWrapper>
);

export default Buttons;