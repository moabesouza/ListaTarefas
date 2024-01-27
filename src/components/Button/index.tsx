import { StyledButton, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => void;
  text: string; 
}

export function Button({ onPress, text }: ButtonProps) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
}
