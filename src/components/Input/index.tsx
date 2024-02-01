import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { StyledInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  onTextChange?: (text: string) => void;
}

export function Input({ placeholder, onTextChange, ...rest }: InputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <StyledInput
        style={{
          borderColor: isInputFocused || text.trim() !== '' ? '#646FD4' : '#ccc',
          borderWidth: 1,
          borderRadius: 5,
        }}
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </>
  );
}
