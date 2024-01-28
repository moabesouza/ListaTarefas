import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FooterContainer } from './styles';
import { Baseboard } from '../../components/Baseboard';
import { Task } from '../../components/Task2';
import { HeaderSearch } from '../../components/HeaderSearch';
import { EmptyTask } from '../../components/EmptyTask';
import { useTaskContext } from '../../context/taskContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export function List() {
  const { filteredTasks, updateTasks } = useTaskContext();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        console.log('Carregando tarefas...');
        const storedTasks = await AsyncStorage.getItem('tasks');
        console.log('Tarefas armazenadas:', storedTasks);

        const loadedTasks = storedTasks ? JSON.parse(storedTasks) : [];
        console.log('Tarefas carregadas:', loadedTasks);

        updateTasks(loadedTasks);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    loadTasks();
  }, [updateTasks]);

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderSearch />     
      <Scroll showsVerticalScrollIndicator={false}>   
        <ContentContainer>
          {filteredTasks.length === 0 ? (
            <EmptyTask text="Você não possui nenhuma tarefa cadastrada!" />
          ) : (
            filteredTasks.map((tarefa) => (
              <Task key={tarefa.id} taskId={tarefa.id} />
            ))
          )}
        </ContentContainer>
      </Scroll>
      <FooterContainer>
        <Baseboard />
      </FooterContainer>
    </Container>
  );
}
