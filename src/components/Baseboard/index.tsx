import { Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ButtonRight, ButtonLeft, ButtonCenter, MainFooter, SecondaryFooter } from "./styles";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Create: undefined;
  Detail: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Create'>;

export function Baseboard() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <MainFooter>
      <ButtonCenter onPress={() => navigation.navigate('Create')}>
        <AntDesign name="pluscircle" size={60} color="#646FD4" />
      </ButtonCenter>
      <SecondaryFooter>
        <ButtonLeft onPress={() => navigation.navigate('Detail')}>
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
