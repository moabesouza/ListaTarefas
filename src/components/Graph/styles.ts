import styled from "styled-components/native";

export const Container = styled.View`
marginLeft: 10px;
marginRight: 10px;
backgroundColor: white;
padding: 10px;
borderRadius: 25px;
marginTop: 20px;
borderBottomWidth: 1px;
borderBottomColor: #ddd;
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
