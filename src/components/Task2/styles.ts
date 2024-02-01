import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #FF004B;
  border-radius: 20px;
  padding-bottom: 5%;
  margin-bottom: 30px;
`;

export const ContainerSecondary = styled.SafeAreaView`
  width: 100%;
  height: 31px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContainerEnd = styled.SafeAreaView`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  padding: 0 15px;
`;

export const TaskText = styled.Text`
  font-size: 21px;
  font-weight: 500;
  padding: 0 16px;
`;

export const IconsPoint = styled.TouchableOpacity`
  width: 56px;
  height: 596px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 10px;
`;

export const CloseOptionsButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 10px;
`;


export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 100%;  
  padding-bottom: 10px;  
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButtonText = styled.Text`
  color: blue; 
`;

export const OptionText = styled.Text`
  font-size: 16px;
  padding-vertical: 10px;
`;

export const EditButton = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
`;

export const DeleteButton = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
`;