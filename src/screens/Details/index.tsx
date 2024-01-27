import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, FormContainer, RowContainer, Label, Value, RowContainerEnd, ButtonContainer} from './styles';
import { Header } from '../../components/Header';
import { useTaskContext } from '../../context/taskContext';
import { statusEnum, tipoEnum } from '../../Enum/enums';
import { getStatusDescription, getTipoDescription } from '../../utils/statusUtils';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation';
import {Button} from '../../components/Button'


export function Details() {
  const { selectedTask } = useTaskContext();
  const navigation = useNavigation<NavigationProp>();
  useEffect(() => {
  }, [selectedTask]);
  const handleEditTask = () => {
   
    navigation.navigate('Edit');
  };
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Detalhes da Tarefa"/>
      <Scroll showsVerticalScrollIndicator={false}>
        <FormContainer>
          <RowContainer>
            <Label>Tarefa:</Label>
            <Value>{selectedTask?.nome}</Value>
          </RowContainer>

          <RowContainer>
            <Label>Status:</Label>
            <Value>{getStatusDescription(selectedTask?.status as statusEnum)}</Value>
          </RowContainer>

          <RowContainer>
            <Label>Tipo:</Label>
            <Value>{getTipoDescription(selectedTask?.tipo as tipoEnum)}</Value>
          
          </RowContainer>

          <RowContainerEnd>
            <Label>Descrição:</Label>
            <Value>{selectedTask?.descricao}</Value>
          </RowContainerEnd>
            
        </FormContainer>
        <ButtonContainer>
          <Button onPress={handleEditTask} text="Editar"/>
        </ButtonContainer>
      </Scroll>
    </Container>
  );
}
