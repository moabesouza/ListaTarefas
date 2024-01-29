import styled from "styled-components/native";
import { Platform } from "react-native";

export const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 39px;
 
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 25px;
  background-color: #646FD4;
  ${Platform.OS === "android" ? "elevation: 4;" : "shadowColor: #000; shadowOffset: { width: 0, height: 4 }; shadowOpacity: 0.25; shadowRadius: 4;"}
`;

export const ButtonText = styled.Text`
  color: #FFF;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 88% */
`;
