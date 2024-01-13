import React from 'react';
import { HeaderStyle, HeaderTitle, HeaderIconContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderIconContainer>
        <FontAwesomeIcon icon={faArrowLeft} />
      </HeaderIconContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderStyle>
  );
}
