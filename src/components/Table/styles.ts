import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1; 
`;

export const ContainerRow = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row; 
  justify-content: space-between; 
`;


export const ContainerLine = styled.View`
  flex: 1;
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
  background-color: white;
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
