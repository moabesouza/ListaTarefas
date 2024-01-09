import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F6F8FC;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  align-items: center;
`;