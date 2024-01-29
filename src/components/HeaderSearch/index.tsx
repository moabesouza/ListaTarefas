import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { HeaderStyle, SearchInputContainer, SearchInput, SearchIcon, ButtonsContainer, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle, ClearFilterButton, ButtonFilter, ButtonText } from './styles';
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IStatus } from '../../interfaces/status';
import { ITipo } from '../../interfaces/tipo';
import { StatusData } from '../../Data/status';
import { TipoData } from '../../Data/tipo';
import { useTaskContext, TaskContextProps } from '../../context/taskContext';

export const HeaderSearch = () => {
  const { tasks, setFilteredTasks } = useTaskContext() as TaskContextProps;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<IStatus | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<ITipo | null>(null);
  const [modalOptions, setModalOptions] = useState<Array<IStatus | ITipo>>([]);
  const [buttonText, setButtonText] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: IStatus | ITipo) => {
    console.log(`Opção selecionada: ${option.descricao}`);
    
    if (isTipo(option)) {
      setSelectedTipo(option as ITipo);
      setButtonText('Filtrar por Tipo');
    } else {
      setSelectedStatus(option as IStatus);
      setButtonText('Filtrar por Status');
    }
    
    toggleModal();
  };
  

  const isTipo = (option: IStatus | ITipo): option is ITipo => {
    return (option as ITipo).id !== undefined;
  };

  const clearFilter = () => {
    setSelectedStatus(null);
    setSelectedTipo(null);
    toggleModal();
  };

  const filterByTipo = () => {
    setModalOptions(TipoData);
    setButtonText('Filtrar por Tipo');
    toggleModal();
  };

  const filterByStatus = () => {
    setModalOptions(StatusData);
    setButtonText('Filtrar por Status');
    toggleModal();
  };

  const showAll = () => {
    setFilteredTasks(tasks);

  };

  useEffect(() => {
    const filterTasks = () => {
      let filteredTasks = tasks;

      if (selectedStatus) {
        filteredTasks = filteredTasks.filter((task) => task.status === selectedStatus.id);
      }

      if (selectedTipo) {
        filteredTasks = filteredTasks.filter((task) => task.tipo === selectedTipo.id);
      }

      filteredTasks = filteredTasks.filter((task) =>
        task.nome.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredTasks(filteredTasks);
    };

    filterTasks();
  }, [searchQuery, selectedStatus, selectedTipo, tasks, setFilteredTasks]);

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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ButtonsContainer>
            <Text>Filtrar por: </Text>
           
              <ButtonFilter onPress={filterByTipo}>
                <ButtonText>Tipo</ButtonText>
              </ButtonFilter>
                             
              <ButtonFilter onPress={filterByStatus}>
                <ButtonText>Status</ButtonText>
              </ButtonFilter>
      
              <ButtonFilter onPress={showAll}>
                <ButtonText>Todos</ButtonText>
              </ButtonFilter>
        
          </ButtonsContainer>
        </ScrollView>
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
              <ModalTitle>{buttonText}</ModalTitle>
              <CloseOptionsButton onPress={toggleModal}>
                <FontAwesomeIcon icon={faCircleXmark} size={20} color="#333" />
              </CloseOptionsButton>
            </ModalHeader>
            <FlatList
              data={modalOptions}
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
