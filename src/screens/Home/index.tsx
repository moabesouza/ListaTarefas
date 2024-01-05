import { StatusBar } from 'expo-status-bar';
import { Button } from "../../components/Button";
import { Container, Scroll,ButtonContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <Scroll>
        {/* Conteúdo da tela */}
      </Scroll>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Container>
  );
}


