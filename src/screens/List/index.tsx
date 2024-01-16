
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FooterContainer } from './styles';
import { Baseboard } from '../../components/Baseboard';
import { Task } from '../../components/Task2'; 
import { HeaderSearch } from '../../components/HeaderSearch';
import { tarefaData } from '../../Data/tarefa';

export function List() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderSearch/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          {tarefaData.map((tarefa) => (
            <Task key={tarefa.id} data={tarefa} />
          ))}
        </ContentContainer>
      </Scroll>
      <FooterContainer>
        <Baseboard />
      </FooterContainer>
    </Container>
  );
}
