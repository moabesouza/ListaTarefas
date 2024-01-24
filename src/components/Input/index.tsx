
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { StyledInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  onTextChange?: (text: string) => void;
}

export function Input({ placeholder, onTextChange, ...rest }: InputProps) {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  return (
    <>
      <StyledInput
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        {...rest}
      />
    </>
  );
}
