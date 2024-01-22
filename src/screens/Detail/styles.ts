import { Platform } from "react-native";
import styled from 'styled-components/native';

export const ContainerMain = styled.SafeAreaView`
  flex: 1;
  background-color: #F6F8FC;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
  justify-content: end;
  align-items: center;
`;