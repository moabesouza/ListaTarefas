import styled from "styled-components/native";

export const MainFooter = styled.View`
  width: 108%;
  height: 10%;
  margin-top: 170%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #FFF;
`;

export const SecondaryFooter = styled.View`
  width: 108%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #FFF;
`;

export const ButtonCenter = styled.TouchableOpacity`
  border-radius: 30px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
`;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.25;
  align-items: center;
`;
