
import { Container, ContainerLine, ContainerRow, TaskRow, TaskNum, TaskText, TaskTextNum } from "./styles";
import { Entypo, MaterialIcons, FontAwesome  } from '@expo/vector-icons';
export function Table() {
  return (
    <Container>
    
      <ContainerRow>
        <ContainerLine>
          <TaskRow>
            <Entypo name="suitcase" size={30} color="#FBA13A" />
            <TaskNum>
              <TaskText>Trabalho</TaskText>
              <TaskTextNum>5</TaskTextNum>  
            </TaskNum>
          </TaskRow>
          <TaskRow>
            <MaterialIcons name="menu-book" size={30} color="#9747FF" />
            <TaskNum>
              <TaskText>Estudo</TaskText>
              <TaskTextNum>10</TaskTextNum>
            </TaskNum>
          </TaskRow>
        </ContainerLine>
      </ContainerRow>

      <ContainerRow>
        <ContainerLine>
        <TaskRow>
          <FontAwesome name="heartbeat" size={30} color="#FF004B" />
          <TaskNum>
            <TaskText>Saúde</TaskText>
            <TaskTextNum>3</TaskTextNum>
          </TaskNum>
          </TaskRow>
          <TaskRow>
          <MaterialIcons name="attach-money" size={30} color="#00D43B" />
            <TaskNum>
              <TaskText>Pagamento</TaskText>
              <TaskTextNum>2</TaskTextNum>
            </TaskNum>
          </TaskRow>
        </ContainerLine>
      </ContainerRow>
  
    </Container>
  );
}
