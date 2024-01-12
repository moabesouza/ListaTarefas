// screens/Create/index.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FormContainer, InputLabel, ButtonContainer } from './styles';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';  
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Create() {
  return (   
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
         
          <FormContainer>
            <InputLabel>Tarefa</InputLabel>
            <Input />
          </FormContainer> 
        
          <FormContainer>
            <InputLabel>Status</InputLabel>
           <Select/>
          </FormContainer>  

          <FormContainer>
            <InputLabel>Tipo</InputLabel>
           <Select/>
          </FormContainer>  

          <FormContainer>
           <InputLabel>Descrição</InputLabel>   
           <Textarea/>    
          </FormContainer>
       
        </ContentContainer>

        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </Scroll>
      
    </Container>
  );
}
