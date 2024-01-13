import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const HeaderStyle = styled.View`
  height: 110px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 15px;
  background-color: #FFF;
  align-items: center;
  flex-direction: row;
  
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
  size:22, 
})`
  color: #999;
  margin-left: 20px; 
`;


