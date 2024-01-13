
import styled from 'styled-components/native';
import { Baseboard } from '../../components/Baseboard';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F6F8FC;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const ContentContainer = styled.View`
  margin-bottom: 16px;
`;

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  align-items: center;
`;
