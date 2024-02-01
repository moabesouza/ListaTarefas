import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyledSelect } from './styles';
import { ViewStyle } from 'react-native';

interface SelectProps<T> {
  options: T[];
  labelExtractor: (item: T) => string;
  valueExtractor: (item: T) => string;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  style?: ViewStyle;
}

export function Select<T>({
  options,
  labelExtractor,
  valueExtractor,
  selectedValue,
  onValueChange,
  style,
}: SelectProps<T>) {
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const handleFocus = () => {
    setIsSelectFocused(true);
  };

  const handleBlur = () => {
    setIsSelectFocused(false);
  };

  const borderColor = isSelectFocused ? '#646FD4' : '#ccc';

  return (
    <StyledSelect borderColor={borderColor} style={style}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <Picker.Item label="--- Selecione ---" value="" />
        {options.map((option, index) => (
          <Picker.Item key={index} label={labelExtractor(option)} value={valueExtractor(option)} />
        ))}
      </Picker>
    </StyledSelect>
  );
}
