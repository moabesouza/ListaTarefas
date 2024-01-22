import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 180px;
  flex-direction: column;
  align-items: center;
  background-color: #304163;
  overflow: hidden;
`;

export const ContainerRow = styled.View`
  width: 100%;
  height: 90px;
  background-color: white;
`;

export const ContainerLine = styled.View`
  flex: 1;
  background-color: #A3AED2;
  flex-direction: row;
`;

export const TaskText = styled.Text`
  color: #A3AED0;
  font-size: 16px;
  font-weight: 500;
`;

export const TaskTextNum = styled.Text`
  color: #2B3674;
  font-size: 18px;
  font-weight: 500;
`;

export const TaskRow = styled.TouchableOpacity`
  flex: 1;
  background-color: #F6F8FC;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  margin: 10px;
`;

export const TaskNum = styled.View` 
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-left: 12px;
`;
