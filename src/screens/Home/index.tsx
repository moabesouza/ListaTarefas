import { StatusBar } from 'expo-status-bar';
import { Container, Scroll,ButtonContainer } from "./styles";
import { Baseboard } from '../../components/Baseboard';

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      
      <Scroll>
        
      </Scroll>
      <Baseboard/>
    </Container>
  );
}


