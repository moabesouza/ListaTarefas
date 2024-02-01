import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FormContainer, InputLabel, ButtonContainer, ErrorMessage } from './styles';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TipoData } from '../../Data/tipo';
import { StatusData } from '../../Data/status';
import { useTaskContext } from '../../context/taskContext';
import { ITarefa } from '../../interfaces/tarefa';
import ModalMessage from 'react-native-toast-message';


export function Edit() {
  const { selectedTask, updateTask } = useTaskContext();
  const [editedTask, setEditedTask] = useState<ITarefa>(
    selectedTask || { id: 0, nome: '', tipo: '', status: '', descricao: '' }
  );
  const [errors, setErrors] = useState({
    nome: '',
    status: '',
    tipo: '',
  });

  useEffect(() => {
    setEditedTask(
      selectedTask || { id: 0, nome: '', tipo: '', status: '', descricao: '' }
    );
    setErrors({ nome: '', status: '', tipo: '' });
  }, [selectedTask]);

  const handleInputChange = (fieldName: keyof ITarefa, value: string) => {
    setEditedTask((prevTask) => ({ ...prevTask, [fieldName]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
  };

  const handleSave = () => {
    if (!editedTask.nome) {
      setErrors((prevErrors) => ({ ...prevErrors, nome: 'Campo obrigatório' }));
      return;
    }
    if (!editedTask.status) {
      setErrors((prevErrors) => ({ ...prevErrors, status: 'Campo obrigatório' }));
      return;
    }
    if (!editedTask.tipo) {
      setErrors((prevErrors) => ({ ...prevErrors, tipo: 'Campo obrigatório' }));
      return;
    }

    ModalMessage.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Tarefa editada com sucesso!',
      visibilityTime: 3000,
      autoHide: true,
    });

    updateTask(editedTask);
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Editar Tarefa" />
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <FormContainer>
            <InputLabel>Tarefa</InputLabel>
            <Input
              placeholder="Digite a tarefa"
              value={editedTask.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
              style={{ borderColor: errors.nome ? 'red' : '#ccc' }}
            />
            <ErrorMessage>{errors.nome}</ErrorMessage>
          </FormContainer>

          <FormContainer>
            <InputLabel>Status</InputLabel>
            <Select
              options={[...StatusData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={editedTask.status}
              onValueChange={(itemValue) => handleInputChange('status', itemValue)}
              style={{ borderColor: errors.status ? 'red' : '#ccc' }}
            />
            <ErrorMessage>{errors.status}</ErrorMessage>
          </FormContainer>

          <FormContainer>
            <InputLabel>Tipo</InputLabel>
            <Select
              options={[...TipoData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={editedTask.tipo}
              onValueChange={(itemValue) => handleInputChange('tipo', itemValue)}
              style={{ borderColor: errors.tipo ? 'red' : '#ccc' }}
            />
            <ErrorMessage>{errors.tipo}</ErrorMessage>
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
        <ModalMessage />
        <ButtonContainer>
          <Button onPress={handleSave} text="Salvar" />
        </ButtonContainer>
      </Scroll>
    </Container>
  );
}
