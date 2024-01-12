// components/Header/styles.ts
import styled from 'styled-components/native';

export const HeaderStyle = styled.View`
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
  position: absolute; 
  left: 0; 
  right: 0;
  align-self: center;
`;


export const HeaderIconContainer = styled.View`
  width: 24px;
  height: 24px; 
  margin-right: 10px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;


export const HeaderIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
