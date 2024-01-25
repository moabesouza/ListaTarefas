import { Platform } from "react-native";
import styled from "styled-components/native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const HeaderStyle = styled.View`
  flex: 1;
  border-radius: 20px;
  padding: 15px;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
  align-items: center;
  justify-content: center;
  flex-direction: center;
`;

export const Header = styled.View`
  flex: 0.17;
  border-radius: 20px;
  background-color: #F4F8FB;
  align-items: center;
  flex-direction: row;  
`;

export const SearchInputContainer = styled.View`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  background-color: #EEE;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 12px; 
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export const SearchIcon = styled(AntDesign)`
  color: #999;
  margin-right: 10px;
`;

export const EllipsisIcon = styled(FontAwesome).attrs({
  size:22, 
})`
  color: #999;
  margin-left: 20px; 
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 30px;
`;

export const FlatListContainer = styled.View`
  flex:1;
  margin-bottom: 15px;
  gap: 10px;
  padding-top: 16px;
  padding-bottom: 5px;
`;

export const TelaDeTarefaVazia = styled.View`
    border-radius: 30px;
    background-color: #f6f8fc;
    box-shadow: rgba(0, 0, 0, 0.40) 1px 1px 30px;
    align-items: center;
    width: 350px;
    height: 150px;
    overflow: "hidden";
`;