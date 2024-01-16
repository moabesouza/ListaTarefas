// components/tasks/Task.tsx
import React from "react";
import { Text, View } from "react-native";
import { Container, ContainerSecondary, ContainerEnd, IconsPoint, TaskText } from "./styles";
import { Entypo, Feather } from '@expo/vector-icons';
import { ITarefa } from "../../interfaces/tarefa";
import { getStatusDescription, getTipoDescription } from "../../Data/tarefa";

interface TaskProps {
  data: ITarefa;
}

export const Task: React.FC<TaskProps> = ({ data }) => {
  const statusColor = getStatusColor(data.status);

  console.log("Status:", data.status);

  return (
    <Container style={{ backgroundColor: statusColor }}>
      <ContainerSecondary>
        <TaskText>{data.nome}</TaskText>
        <IconsPoint>
          <Entypo name="dots-three-horizontal" size={20} color="black" />
        </IconsPoint>
      </ContainerSecondary>
      <ContainerEnd>
        <Feather name="info" size={15} color={statusColor} style={{ marginTop: -30, marginRight: 5 }} />
        <Text style={{ color: '#4E8D7C', marginTop: -30 }}>
          {getStatusDescription(data.status)} - {getTipoDescription(data.tipo)}
        </Text>
      </ContainerEnd>
    </Container>
  );
};

function getStatusColor(statusId: string): string {
  switch (statusId) {
    case '1':
      return '#9747FF';
    case '2':
      return '#FF004B';
    case '3':
      return '#FBA13A';
    case '4':
      return '#00D43B';
    case '5':
      return '#FBFF47';
    default:
      return '#000000';
  }
};
