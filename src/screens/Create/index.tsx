import { StatusBar } from 'expo-status-bar';
import { Button } from "../../components/Button";
import { Container, Scroll,ButtonContainer } from "./styles";
import { Baseboard } from '../../components/Baseboard';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      {<Input/>}
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


