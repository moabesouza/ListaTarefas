import { Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ButtonRight, ButtonLeft, ButtonCenter, MainFooter, SecondaryFooter } from "./styles";

export function Baseboard() {
  return (
    <MainFooter>
      <ButtonCenter>
        <AntDesign name="pluscircle" size={60} color="#646FD4" />
      </ButtonCenter>
      <SecondaryFooter>
        <ButtonLeft>
          <AntDesign name="dashboard" size={25} color="#646FD4" />
          <Text style={{ color: '#646FD4', marginTop: 5 }}>Dashboard</Text>
        </ButtonLeft>
        <ButtonRight>
          <AntDesign name="profile" size={25} color="#646FD4" />
          <Text style={{ color: '#646FD4', marginTop: 5 }}>Tarefas</Text>
        </ButtonRight>
      </SecondaryFooter>
    </MainFooter>
  );
}
