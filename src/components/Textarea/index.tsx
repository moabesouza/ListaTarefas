import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { StyledTextArea } from './styles';

interface TextareaProps extends TextInputProps {
  placeholder: string;
  onTextChange?: (text: string) => void;
  containerStyle?: any; 
}

export function Textarea({ placeholder, onTextChange, containerStyle, ...rest }: TextareaProps) {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  const handleFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleBlur = () => {
    setIsTextareaFocused(false);
  };

  const borderColor = isTextareaFocused ? '#646FD4' : '#ccc';

  return (
    <>
      <StyledTextArea
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline
        numberOfLines={4}
        style={{ borderColor, borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10, ...containerStyle }}
        {...rest}
      />
    </>
  );
}
