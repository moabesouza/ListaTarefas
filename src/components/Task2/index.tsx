import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { Container, ContainerSecondary, ContainerEnd, IconsPoint, TaskText, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle } from './styles';
import { Entypo, Feather } from '@expo/vector-icons';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTaskContext } from '../../context/taskContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { getStatusColor, getStatusDescription, getTipoDescription } from '../../utils/statusUtils';
import { statusEnum, tipoEnum } from '../../Enum/enums';


type TaskProps = {
  taskId: number; 
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Task: React.FC<TaskProps> = ({ taskId }) => {
  const { isModalVisible, toggleModal, selectTask, deleteTask, getTaskById } = useTaskContext();
  const navigation = useNavigation<NavigationProp>();

  const task = getTaskById(taskId);

  if (!task) {
    return null;
  }

  const statusColor = getStatusColor(task.status as statusEnum);

  

  const handleEdit = () => {
    console.log("Editar option selected");
    selectTask(task);
    toggleModal();
    navigation.navigate('Edit'); 
  };

  const handleDelete = async () => {
    console.log("Deleting task with id:", task.id);
    await deleteTask(task.id);
    console.log("Task deleted");
    toggleModal();
  };

  return (
    <Container style={{ backgroundColor: statusColor }}>
      <ContainerSecondary>
        <TaskText>{task.nome}</TaskText>
        <IconsPoint>
          <TouchableOpacity onPress={toggleModal}>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </IconsPoint>
      </ContainerSecondary>
      <ContainerEnd>
        <Feather name="info" size={15} color={statusColor} style={{ marginTop: -30, marginRight: 5 }} />
        <Text style={{ color: '#4E8D7C', marginTop: -30 }}>
          {getStatusDescription(task.status as statusEnum)} - {getTipoDescription(task.tipo as tipoEnum)}
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
