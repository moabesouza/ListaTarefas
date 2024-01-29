import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F6F8FC;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const FormContainer = styled.View`
  margin-bottom: 4px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  color: #4E8D7C;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px; 
`;