import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F6F8FC;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const FormContainer = styled.View`
  margin-bottom: 16px;
  border-width: 1px;  
  border-color: #ccc;  
  border-radius: 25px; 
  background-color: #fff;  
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px; 
  border-bottom-color: #ccc;
  padding: 15px; 
  
`;

export const RowContainerEnd = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px; 
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #4E8D7C;
  font-weight: bold;
 
  paddingRight: 10px; 
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #333;

`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;