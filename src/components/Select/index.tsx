import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyledSelect } from './styles';

interface SelectProps<T> {
  options: T[];
  labelExtractor: (item: T) => string;
  valueExtractor: (item: T) => string;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

export function Select<T>({
  options,
  labelExtractor,
  valueExtractor,
  selectedValue,
  onValueChange,
}: SelectProps<T>) {
  return (
    <StyledSelect>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        <Picker.Item label="---Selecione---" value="" /> 
        {options.map((option, index) => (
          <Picker.Item key={index} label={labelExtractor(option)} value={valueExtractor(option)} />
        ))}
      </Picker>
    </StyledSelect>
  );
}
