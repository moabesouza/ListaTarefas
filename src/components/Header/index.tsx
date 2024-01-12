// components/Header/Header.tsx  
import { HeaderStyle, HeaderTitle, HeaderIconContainer,  } from './styles';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <HeaderStyle>
      <HeaderIconContainer>
      <FontAwesomeIcon icon={faArrowLeft} />
      </HeaderIconContainer>
      <HeaderTitle>Cadastrar Tarefa</HeaderTitle>
    </HeaderStyle>
  );
}
