// screens/List/index.tsx

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FooterContainer } from './styles';
import { Baseboard } from '../../components/Baseboard';
import { HeaderSearch } from '../../components/HeaderSearch';

export function List() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderSearch/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          
        </ContentContainer>
      </Scroll>
      <FooterContainer>
        <Baseboard />
      </FooterContainer>
    </Container>
  );
}
