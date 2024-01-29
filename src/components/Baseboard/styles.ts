
import styled from "styled-components/native";

export const MainFooter = styled.View`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 25px;
`;

export const SecondaryFooter = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #FFF;
`;

export const ButtonCenter = styled.TouchableOpacity`
  border-radius: 30px;
  align-items: center;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
  margin-top: -50px; 
  
`;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
  margin-top: -50px;  
`;