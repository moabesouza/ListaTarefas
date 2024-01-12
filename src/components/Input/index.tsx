// components/Input/index.tsx
import React from 'react';
import { StyledInput } from './styles';

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return (
    <>
      <StyledInput placeholder={placeholder} />
    </>
  );
}
