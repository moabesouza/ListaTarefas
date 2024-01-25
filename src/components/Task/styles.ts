import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  background-color: #9747FF;
  border-radius: 20px;
  overflow: hidden;
`;

export const TaskText = styled.Text`
  padding-top: 30px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
`;
export const TaskTextStatus = styled.Text`
  color: grey;
  font-size: 16px;
  font-weight: 500;
  padding-left: 12px;
`;

export const TaskDelete = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  justify-content: start;
  align-items: center;
`;

export const ContainerSecondary = styled.SafeAreaView`
  width: 100%;
  height: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
`;

export const ContainerEnd = styled.SafeAreaView`
  width: 80%;
  height: 40%;
  align-items: end;
  position: absolute;
  font-size: 18px;
  font-weight: 500;
  padding-left: 14px;
`;