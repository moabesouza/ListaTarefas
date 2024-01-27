import React, { useState, useEffect } from 'react';
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

export function Edit() {
  const { selectedTask, updateTask } = useTaskContext();
  const [editedTask, setEditedTask] = useState<ITarefa>(selectedTask || { id: 0, nome: '', tipo: '', status: '', descricao: '' });

  useEffect(() => {
    setEditedTask(selectedTask || { id: 0, nome: '', tipo: '', status: '', descricao: '' });
  }, [selectedTask]);

  const handleInputChange = (fieldName: keyof ITarefa, value: string) => {
    setEditedTask((prevTask) => ({ ...prevTask, [fieldName]: value }));
  };

  const handleSave = () => {
    updateTask(editedTask);
   
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Editar Tarefa"/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <FormContainer>
            <InputLabel>Tarefa</InputLabel>
            <Input
              placeholder="Digite a tarefa"
              value={editedTask.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Status</InputLabel>
            <Select
              options={[...StatusData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={editedTask.status}
              onValueChange={(itemValue) => handleInputChange('status', itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Tipo</InputLabel>
            <Select
              options={[...TipoData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={editedTask.tipo}
              onValueChange={(itemValue) => handleInputChange('tipo', itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Descrição</InputLabel>
            <Textarea
              placeholder="Digite a descrição"
              value={editedTask.descricao}
              onChangeText={(text) => handleInputChange('descricao', text)}
            />
          </FormContainer>
        </ContentContainer>

        <ButtonContainer>
          <Button onPress={handleSave} text="Salvar"/>
        </ButtonContainer>
      </Scroll>
    </Container>
  );
}
