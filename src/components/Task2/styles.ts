import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 93px;
  justify-content: center;
  align-items: center;
  background-color: #FF004B;
  border-radius: 20px;
  padding-bottom: 10%;
  margin-bottom: 30px;
`;

export const ContainerSecondary = styled.SafeAreaView`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContainerEnd = styled.SafeAreaView`
  width: 100%;
  height: 30px;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  padding: 0 15px;
`;

export const TaskText = styled.Text`
  font-size: 21px;
  font-weight: 500;
  padding: 0 16px;
`;

export const IconsPoint = styled.TouchableOpacity`
  width: 56px;
  height: 596px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
