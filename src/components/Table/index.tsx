import React, { useEffect, useState } from 'react';
import { Container, ContainerLine, ContainerRow, TaskRow, TaskNum, TaskText, TaskTextNum } from "./styles";
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useTaskContext, TaskContextProps } from '../../context/taskContext';
import { tipoEnum, statusEnum } from '../../Enum/enums';

export function Table() {
  const { tasks } = useTaskContext() as TaskContextProps;

  const [taskQuantities, setTaskQuantities] = useState({
    [tipoEnum.Estudo]: 0,
    [tipoEnum.Trabalho]: 0,
    [tipoEnum.Saude]: 0,
    [tipoEnum.Pagamento]: 0,
    [tipoEnum.Outros]: 0,
  });

  useEffect(() => {
    const quantities = {
      [tipoEnum.Estudo]: tasks.filter((task) => task.tipo === tipoEnum.Estudo).length,
      [tipoEnum.Trabalho]: tasks.filter((task) => task.tipo === tipoEnum.Trabalho).length,
      [tipoEnum.Saude]: tasks.filter((task) => task.tipo === tipoEnum.Saude).length,
      [tipoEnum.Pagamento]: tasks.filter((task) => task.tipo === tipoEnum.Pagamento).length,
      [tipoEnum.Outros]: tasks.filter((task) => task.tipo === tipoEnum.Outros).length,
    };

    setTaskQuantities(quantities);
  }, [tasks]);

  return (
    <Container>
      <ContainerRow>
        <ContainerLine>
          <TaskRow>
            <Entypo name="suitcase" size={30} color="#FBA13A" />
            <TaskNum>
              <TaskText>Trabalho</TaskText>
              <TaskTextNum>{taskQuantities[tipoEnum.Trabalho]}</TaskTextNum>
            </TaskNum>
          </TaskRow>
          <TaskRow>
            <MaterialIcons name="menu-book" size={30} color="#9747FF" />
            <TaskNum>
              <TaskText>Estudo</TaskText>
              <TaskTextNum>{taskQuantities[tipoEnum.Estudo]}</TaskTextNum>
            </TaskNum>
          </TaskRow>
        </ContainerLine>
      </ContainerRow>

      <ContainerRow>
        <ContainerLine>
          <TaskRow>
            <FontAwesome name="heartbeat" size={30} color="#FF004B" />
            <TaskNum>
              <TaskText>Saúde</TaskText>
              <TaskTextNum>{taskQuantities[tipoEnum.Saude]}</TaskTextNum>
            </TaskNum>
          </TaskRow>
          <TaskRow>
            <MaterialIcons name="attach-money" size={30} color="#00D43B" />
            <TaskNum>
              <TaskText>Pagamento</TaskText>
              <TaskTextNum>{taskQuantities[tipoEnum.Pagamento]}</TaskTextNum>
            </TaskNum>
          </TaskRow>          
        </ContainerLine>
      </ContainerRow>

      <ContainerRow>
        <ContainerLine>
          <TaskRow>
            <FontAwesome name="star" size={30} color="#146A90" />
            <TaskNum>
              <TaskText>Outros</TaskText>
              <TaskTextNum>{taskQuantities[tipoEnum.Outros]}</TaskTextNum>
            </TaskNum>
          </TaskRow>                
        </ContainerLine>
      </ContainerRow>
    </Container>
  );
}
