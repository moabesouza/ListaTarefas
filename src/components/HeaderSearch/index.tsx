import React from 'react';
import { HeaderStyle, SearchInputContainer, SearchInput, SearchIcon, EllipsisIcon } from './styles';
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function HeaderSearch() {
  return (
    <HeaderStyle>
    
      <SearchInputContainer>
        <SearchIcon icon={faSearch} />
        <SearchInput placeholder="Buscar" />
      </SearchInputContainer>
      <EllipsisIcon icon={faEllipsisV} />
    </HeaderStyle>
  );
}