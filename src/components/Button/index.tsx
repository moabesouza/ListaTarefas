
import { StyledButton, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => void;
}

export function Button({ onPress }: ButtonProps) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>Salvar</ButtonText>
    </StyledButton>
  );
}
