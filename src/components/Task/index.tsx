import { Text, Image } from "react-native";
import { TaskProps } from "../../screens/Home";
import { Container, ContainerSecondary, ContainerEnd, IconsPoint, TaskText,  } from "./styles";
import { Entypo, Feather } from '@expo/vector-icons';

export function Task({ id, title, done }: TaskProps) {
  return (
    <Container>
      <ContainerSecondary>
        <TaskText>{title}</TaskText>

        <IconsPoint>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </IconsPoint>
      </ContainerSecondary>
      <ContainerEnd>
      <Feather name="info" size={30} color="#FF004B" />
        <Text style={{color: '#4E8D7C'}}> Cancelado </Text>
      </ContainerEnd>
    </Container>
  );
}
