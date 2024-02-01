
import styled from "styled-components/native";

export const MainFooter = styled.View`
  width: 100%;
  height: 70px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 25px;
  elevation: 10; 
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
  zIndex: 1;
  
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
  margin-top: -60px; 
  
`;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
  margin-top: -60px;  
`;

export const IndicatorLine = styled.View`
  position: absolute;
  width: 2px;
  height: 50px;
  background-color: red;
  top: -60px;
  left: 50%;
  margin-left: -1px;
`;