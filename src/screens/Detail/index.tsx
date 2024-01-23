import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FooterContainer } from './styles';
import { Baseboard } from '../../components/Baseboard';
import { Graph } from '../../components/Graph';
import { Table } from '../../components/Table';
import { Header } from '../../components/Header';

export function Detail() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Dashboard"/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
        <Table/>
        <Graph/>
        </ContentContainer>
     
       
   
      </Scroll>
      <FooterContainer>
        <Baseboard />
      </FooterContainer>
    </Container>
  );
}
