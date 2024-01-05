import { ButtonText , StyledButton } from "./styles";

export function Button() {
    return (
      <StyledButton onPress={() => console.log("Button pressed")}>
        <ButtonText>Salvar</ButtonText>
      </StyledButton>
    );
}