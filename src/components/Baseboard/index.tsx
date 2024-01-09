import { Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ButtonRight, ButtonLeft, ButtonCenter, MainFooter, SecondaryFooter } from "./styles";
const bar = require("../../assets/icons/bar.png");
const task = require("../../assets/icons/task.png");


export function Baseboard() {
  return (
      <MainFooter>
          <ButtonCenter>
            <AntDesign name="pluscircle" size={60} color="#646FD4" />
          </ButtonCenter>
          <SecondaryFooter>
            <ButtonLeft>
              <Image source={bar} />
              <Text style={{color: '#646FD4'}}> Dashborard </Text>
            </ButtonLeft>
            <ButtonRight>
              <Image source={task} />
              <Text style={{color: '#646FD4'}}> Tarefas </Text>
            </ButtonRight>
          </SecondaryFooter>
      </MainFooter>
  );
}
