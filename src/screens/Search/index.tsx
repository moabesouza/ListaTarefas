import React, { useContext } from 'react';

import { useState } from "react";
import { FlatList, Text } from "react-native";
import { Task } from "../../components/Task";
import { Baseboard } from '../../components/Baseboard';
import { HeaderStyle, Header, SearchInputContainer, SearchInput, SearchIcon, EllipsisIcon, ButtonAdd, FlatListContainer, TelaDeTarefaVazia } from './styles';
import { AntDesign } from '@expo/vector-icons';

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

const TASKS = [
  {
    id: 1,
    title: "Pagar farmácia",
    done: false,
  },
  {
    id: 2,
    title: "Trabalhar em Projeto X",
    done: false,
  },
  {
    id: 3,
    title: "Pagar Contas",
    done: false,
  },
];

export function Search() {
  
  const [tasks, setTasks] = useState("");
  const [taskName, setTaskName] = useState("");
  const [count, setCount] = useState(3);

  function handleAddNewTask(title: string) {
    const newTask = {
      id: count,
      title,
      done: false,
    };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  }

  return (
    <HeaderStyle>
      <Header>
        <SearchInputContainer>
          <SearchIcon name="search1" />
          <SearchInput placeholder="Adcionar nova tarefa" value={taskName} onChangeText={setTaskName}/>
        </SearchInputContainer>
        <ButtonAdd onPress={() => handleAddNewTask(taskName)}>
          <EllipsisIcon name="ellipsis-v" />
        </ButtonAdd>
      </Header>

      <FlatListContainer>
        <FlatList
          style={{
            flex: 0.7,
            paddingTop: 32,
          }}
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: TaskProps }) => (
            <Task id={item.id} title={item.title} done={item.done} key={item.id} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 16,
            paddingBottom: 32,
          }}
          ListEmptyComponent={
            <>
              <TelaDeTarefaVazia> 
                <AntDesign style={{ marginTop: 25 }} name="profile" size={35} />
                <Text style={{ marginTop: 12 }}>Você não possui nenhuma tarefa</Text>
                 <Text>cadastrada ainda !</Text>
              </TelaDeTarefaVazia>
              
            </>
          }
        />
    </FlatListContainer>

    <Baseboard/>

    </HeaderStyle>
  );
  
}
