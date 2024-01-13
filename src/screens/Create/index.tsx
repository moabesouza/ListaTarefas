
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Scroll, ContentContainer, FormContainer, InputLabel, ButtonContainer } from './styles';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TipoData } from '../../Data/tipo';
import { StatusData } from '../../Data/status';

export function Create() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title="Cadastrar Tarefa"/>
      <Scroll showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <FormContainer>
            <InputLabel>Tarefa</InputLabel>
            <Input placeholder="Digite a tarefa"/>
          </FormContainer>

          <FormContainer>
            <InputLabel>Status</InputLabel>
            <Select
              options={[...StatusData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={selectedStatus}
              onValueChange={(itemValue) => setSelectedStatus(itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Tipo</InputLabel>
            <Select
              options={[...TipoData]}
              labelExtractor={(item) => item.descricao}
              valueExtractor={(item) => item.id.toString()}
              selectedValue={selectedTipo}
              onValueChange={(itemValue) => setSelectedTipo(itemValue)}
            />
          </FormContainer>

          <FormContainer>
            <InputLabel>Descrição</InputLabel>
            <Textarea placeholder="Digite a descrição"/>
          </FormContainer>
        </ContentContainer>

        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </Scroll>
    </Container>
  );
}
