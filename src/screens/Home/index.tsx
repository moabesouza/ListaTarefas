import { StatusBar } from 'expo-status-bar';
import { Button } from "../../components/Button";
import { Container, Scroll,ButtonContainer } from "./styles";
import { Baseboard } from '../../components/Baseboard';

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      {/*<Baseboard/>*/}
      <Scroll>
        {/* Conteúdo da tela */}
      </Scroll>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Container>
  );
}


