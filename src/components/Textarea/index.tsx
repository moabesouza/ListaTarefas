// components/Input/index.tsx
import React, { useState } from 'react';
import {StyledTextArea } from './styles';

interface TextareaProps {
  placeholder: string;
}

export function Textarea({ placeholder }: TextareaProps) {
  return (
    <>
      <StyledTextArea placeholder={placeholder} />
      </>
  );
}

// components/Textarea/index.tsx
