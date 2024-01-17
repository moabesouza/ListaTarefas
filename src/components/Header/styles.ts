import styled from 'styled-components/native';

export const HeaderStyle = styled.View`
  width: 100%;
  height: 110px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 15px;
  background-color: #FFF;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  flex: 1;
`;

export const HeaderIconContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const HeaderIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
