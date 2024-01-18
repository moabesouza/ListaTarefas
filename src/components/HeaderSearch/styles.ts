import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Platform } from 'react-native';

export const HeaderStyle = styled.View`
  height: 110px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 15px;
  background-color: #FFF;
  align-items: center;
  flex-direction: row;
  padding-top: ${Platform.OS === 'android' ? 56 : 16}px; 
`;

export const SearchInputContainer = styled.View`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  background-color: #EEE;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 12px; 
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: #999;
  margin-right: 10px;
`;

export const EllipsisIcon = styled(FontAwesomeIcon).attrs({
  size: 22,
})`
  color: #999;
  margin-left: 20px; 
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
