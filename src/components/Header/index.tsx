import React from 'react';
import { HeaderStyle, HeaderTitle, HeaderIconContainer, HeaderIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  List: undefined;
  Create: undefined; 
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.navigate('List');
  };

  return (
    <HeaderStyle>
      <HeaderIconContainer onPress={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </HeaderIconContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderStyle>
  );
}
