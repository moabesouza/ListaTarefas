import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { HeaderStyle, SearchInputContainer, SearchInput, SearchIcon, ButtonsContainer, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle, ClearFilterButton, ButtonFilter, ButtonText, TextTitle } from './styles';
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

  const [isModalTipoVisible, setIsModalTipoVisible] = useState(false);
  const [isModalStatusVisible, setIsModalStatusVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<IStatus | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<ITipo | null>(null);
  const [modalTipoOptions, setModalTipoOptions] = useState<ITipo[]>([]);
  const [modalStatusOptions, setModalStatusOptions] = useState<IStatus[]>([]);


  const toggleModalTipo = () => {
    setIsModalTipoVisible(!isModalTipoVisible);
  };

  const toggleModalStatus = () => {
    setIsModalStatusVisible(!isModalStatusVisible);
  };

  const handleOptionSelectTipo = (option: ITipo) => {
    console.log(`Tipo selecionado: ${option.descricao}`);
    setSelectedTipo(option);
    toggleModalTipo();
  };

  const handleOptionSelectStatus = (option: IStatus) => {
    console.log(`Status selecionado: ${option.descricao}`);
    setSelectedStatus(option);
    toggleModalStatus();
  };

  const clearFilter = () => {
    setSelectedStatus(null);
    setSelectedTipo(null);
  };

  const filterByTipo = () => {
    setModalTipoOptions(TipoData);
    toggleModalTipo();
    setSelectedStatus(null);

  };

  const filterByStatus = () => {
    setModalStatusOptions(StatusData);
    toggleModalStatus();
    setSelectedTipo(null);
  };

  const showAll = () => {
    setFilteredTasks(tasks);
    setSelectedTipo(null);
    setSelectedStatus(null);
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

  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <View>
      <HeaderStyle>
      <SearchInputContainer style={{ borderColor: isInputFocused || searchQuery.trim() !== '' ? '#646FD4' : '#ccc', borderWidth: 1, borderRadius: 5 }}>
  <SearchIcon icon={faSearch} />
  <SearchInput
    placeholder="Buscar"
    value={searchQuery}
    onChangeText={(text: string) => setSearchQuery(text)}
    onFocus={() => setIsInputFocused(true)}
    onBlur={() => setIsInputFocused(false)}
  />
</SearchInputContainer>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ButtonsContainer>
            <TextTitle>Filtrar por: </TextTitle>

            <ButtonFilter onPress={filterByTipo} style={{ backgroundColor: selectedTipo ? '#646FD4' : 'transparent' }}>
              <ButtonText style={{ color: selectedTipo ? '#FFF' : '#646FD4' }}>Tipo</ButtonText>            
            </ButtonFilter>

            <ButtonFilter onPress={filterByStatus} style={{ backgroundColor: selectedStatus ? '#646FD4' : 'transparent' }}>
              <ButtonText style={{ color: selectedStatus ? '#FFF' : '#646FD4' }}>Status</ButtonText>            
            </ButtonFilter>

            <ButtonFilter onPress={showAll} style={{ backgroundColor: selectedStatus || selectedTipo ? 'transparent' : '#646FD4', borderColor: '#646FD4' }}>
              <ButtonText style={{ color: selectedStatus || selectedTipo ? '#646FD4' : '#FFF' }}>Todos</ButtonText>
            </ButtonFilter>
          </ButtonsContainer>
        </ScrollView>
      </HeaderStyle>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalTipoVisible}
        onRequestClose={toggleModalTipo}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Filtrar por tipo</ModalTitle>
              <CloseOptionsButton onPress={toggleModalTipo}>
                <FontAwesomeIcon icon={faCircleXmark} size={20} color="#333" />
              </CloseOptionsButton>
            </ModalHeader>
            <FlatList
              data={modalTipoOptions}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionSelectTipo(item)}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalStatusVisible}
        onRequestClose={toggleModalStatus}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Filtrar por status</ModalTitle>
              <CloseOptionsButton onPress={toggleModalStatus}>
                <FontAwesomeIcon icon={faCircleXmark} size={20} color="#333" />
              </CloseOptionsButton>
            </ModalHeader>
            <FlatList
              data={modalStatusOptions}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionSelectStatus(item)}>
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


