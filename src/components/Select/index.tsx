// components/Select/index.tsx
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyledSelect, SelectText } from './styles';

export function Select() {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <StyledSelect>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <SelectText>{selectedValue}</SelectText>
    </StyledSelect>
  );
}
