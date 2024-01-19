import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { Container, ContainerSecondary, ContainerEnd, IconsPoint, TaskText, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle } from "./styles";
import { Entypo, Feather } from '@expo/vector-icons';
import { ITarefa } from "../../interfaces/tarefa";
import { getStatusDescription, getTipoDescription } from "../../Data/tarefa";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Task = ({ data }: { data: ITarefa }) => {
  const statusColor = getStatusColor(data.status);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: string) => {
    console.log(`Opção selecionada: ${option}`);
    toggleModal();
  };

  const handleEdit = () => {
    console.log("Editar option selected");  
    toggleModal();
  };

  const handleDelete = () => {
    console.log("Excluir option selected");
    toggleModal();
  };

  return (
    <Container style={{ backgroundColor: statusColor }}>
      <ContainerSecondary>
        <TaskText>{data.nome}</TaskText>
        <IconsPoint>
          <TouchableOpacity onPress={toggleModal}>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </IconsPoint>
      </ContainerSecondary>
      <ContainerEnd>
        <Feather name="info" size={15} color={statusColor} style={{ marginTop: -30, marginRight: 5 }} />
        <Text style={{ color: '#4E8D7C', marginTop: -30 }}>
          {getStatusDescription(data.status)} - {getTipoDescription(data.tipo)}
        </Text>
      </ContainerEnd>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Opções</ModalTitle>
              <CloseOptionsButton onPress={toggleModal}>
                <FontAwesomeIcon icon={faCircleXmark} size={20} color="#333" />
              </CloseOptionsButton>
            </ModalHeader>
            <TouchableOpacity onPress={handleEdit}>
              <OptionText>Detalhes</OptionText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEdit}>
              <OptionText>Editar</OptionText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <OptionText>Excluir</OptionText>
            </TouchableOpacity>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

function getStatusColor(statusId: string): string {
  switch (statusId) {
    case '1':
      return '#9747FF';
    case '2':
      return '#FF004B';
    case '3':
      return '#FBA13A';
    case '4':
      return '#00D43B';
    case '5':
      return '#FBFF47';
    default:
      return '#000000';
  }
}
