import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, FlatList } from 'react-native';
import { HeaderStyle, SearchInputContainer, SearchInput, SearchIcon, EllipsisIcon, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle, ClearFilterButton } from './styles';
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IStatus } from '../../interfaces/status';
import { StatusData } from '../../Data/status';
import { ITarefa } from '../../interfaces/tarefa';
import { useTaskContext, TaskContextProps } from '../../context/taskContext';

export const HeaderSearch = () => {
  const { tasks, setFilteredTasks } = useTaskContext() as TaskContextProps;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<IStatus | null>(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: IStatus) => {
    console.log(`Opção selecionada: ${option.descricao}`);
    setSelectedStatus(option); 
    toggleModal();
  };

  const clearFilter = () => {
    setSelectedStatus(null);
    toggleModal();
  };

  useEffect(() => {
    const filterTasks = () => {
      let filteredTasks = tasks;

      if (selectedStatus) {
        filteredTasks = filteredTasks.filter((task) => task.status === selectedStatus.id);
      }

      filteredTasks = filteredTasks.filter((task) =>
        task.nome.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredTasks(filteredTasks);
    };

    filterTasks();
  }, [searchQuery, selectedStatus, tasks, setFilteredTasks]);
  
  return (
    <View>
      <HeaderStyle>
        <SearchInputContainer>
          <SearchIcon icon={faSearch} />
          <SearchInput
            placeholder="Buscar"
            value={searchQuery}
            onChangeText={(text: string) => setSearchQuery(text)}
          />
        </SearchInputContainer>
        <TouchableOpacity onPress={toggleModal}>
          <EllipsisIcon icon={faEllipsisV} />
        </TouchableOpacity>
      </HeaderStyle>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Filtrar por Status</ModalTitle>
              <CloseOptionsButton onPress={toggleModal}>
                <FontAwesomeIcon icon={faCircleXmark} size={20} color="#333" />
              </CloseOptionsButton>
            </ModalHeader>
            <FlatList
              data={StatusData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionSelect(item)}>
                  <OptionText>{item.descricao}</OptionText>
                </TouchableOpacity>
              )}
            />
            <ClearFilterButton onPress={clearFilter}>
              <OptionText>Limpar Filtro</OptionText>
            </ClearFilterButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};
