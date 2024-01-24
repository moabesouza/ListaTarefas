import React, { useState } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { StyledTextArea } from './styles'; 

interface TextareaProps extends TextInputProps {
  placeholder: string;
  onTextChange?: (text: string) => void;
  containerStyle?: ViewStyle; 
}

export function Textarea({ placeholder, onTextChange, containerStyle, ...rest }: TextareaProps) {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  return (
    <>
      <StyledTextArea
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        multiline 
        numberOfLines={4} 
        style={containerStyle} 
        {...rest}
      />
    </>
  );
}
