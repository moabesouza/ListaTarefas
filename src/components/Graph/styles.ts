import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  font-family: System; 
`;

export const DataContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const DataItem = styled.View`
  margin-right: 20px;
`;

export const DataLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  font-family: System; 
`;

export const DataValue = styled.Text`
  font-size: 12px;
  color: #333;
  font-family: System; 
`;
