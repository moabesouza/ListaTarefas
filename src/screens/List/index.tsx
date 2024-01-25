import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FooterContainer } from './styles';
import { Baseboard } from '../../components/Baseboard';
import { Task } from '../../components/Task2';
import { HeaderSearch } from '../../components/HeaderSearch';
import { useTaskContext } from '../../context/taskContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export function List() {
  const { tasks, updateTasks } = useTaskContext();  

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
          {tasks.map((tarefa) => (
            <Task key={tarefa.id} taskId={tarefa.id} />
          ))}
        </ContentContainer>
      </Scroll>
      <FooterContainer>
        <Baseboard />
      </FooterContainer>
    </Container>
  );
}
