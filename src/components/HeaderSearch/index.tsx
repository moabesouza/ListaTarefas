import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { HeaderStyle, SearchInputContainer, SearchInput, SearchIcon, EllipsisIcon, ModalContainer, ModalContent, OptionText, CloseOptionsButton, ModalHeader, ModalTitle} from './styles';
import { faSearch, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IStatus } from '../../interfaces/status';
import { StatusData } from "../../Data/status";
export const HeaderSearch = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: IStatus) => {
    console.log(`Opção selecionada: ${option.descricao}`);
    toggleModal();
  };

  return (
    <View>
      <HeaderStyle>
        <SearchInputContainer>
          <SearchIcon icon={faSearch} />
          <SearchInput placeholder="Buscar" />
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
            {StatusData.map((status) => (
              <TouchableOpacity key={status.id} onPress={() => handleOptionSelect(status)}>
                <OptionText>{status.descricao}</OptionText>
              </TouchableOpacity>
            ))}
          </ModalContent>
        </ModalContainer>
      </Modal>

    </View>
  );
};

