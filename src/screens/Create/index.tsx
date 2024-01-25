import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FormContainer, InputLabel, ButtonContainer } from './styles';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TipoData } from '../../Data/tipo';
import { StatusData } from '../../Data/status';
import { useTaskContext } from '../../context/taskContext';
import { ITarefa } from '../../interfaces/tarefa';

export function Create() {
  const { addTask } = useTaskContext();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState<ITarefa[]>([]); 

  const handleCreateTask = async () => {
    try {
      const newTask: ITarefa = {
        id: Date.now(),
        nome: taskName,
        tipo: selectedTipo,
        status: selectedStatus,
        descricao: taskDescription,
      };

      await addTask(newTask);

    
      setTasks((prevTasks) => [...prevTasks, newTask]);

      setTaskName('');
      setSelectedStatus('');
      setSelectedTipo('');
      setTaskDescription('');

      console.log('Tarefa adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Cadastrar Tarefa"/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <FormContainer>
            <InputLabel>Tarefa</InputLabel>
            <Input
              placeholder="Digite a tarefa"
              value={taskName}
              onChangeText={(text) => setTaskName(text)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Status</InputLabel>
            <Select
              options={[...StatusData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={selectedStatus}
              onValueChange={(itemValue) => setSelectedStatus(itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Tipo</InputLabel>
            <Select
              options={[...TipoData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={selectedTipo}
              onValueChange={(itemValue) => setSelectedTipo(itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Descrição</InputLabel>
            <Textarea
              placeholder="Digite a descrição"
              value={taskDescription}
              onChangeText={(text) => setTaskDescription(text)}
            />
          </FormContainer>
        </ContentContainer>

        <ButtonContainer>
          <Button onPress={handleCreateTask}  />
        </ButtonContainer>
      </Scroll>
    </Container>
  );
}
