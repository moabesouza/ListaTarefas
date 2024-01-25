import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ITarefa } from "../interfaces/tarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

interface TaskContextPropsSearch {
  task: TaskProps;
  tasks: TaskProps[];
  selectTask: (task: TaskProps) => void;
  clearTask: () => void;
  createTask: (title: string) => void;
}

interface TaskProviderPropsSearch {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextPropsSearch>({
  task: { id: 0, title: "", done: false },
  tasks: [],
  selectTask: () => {},
  clearTask: () => {},
  createTask: () => {},
});



function TaskProviderSearch({ children }: TaskProviderProps) {
  const [task, setTask] = useState<TaskProps>({} as TaskProps);
  const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);
  const [count, setCount] = useState<number>(0);

  async function storeTasks(tasks: TaskProps[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível salvar as tarefas");
    }
  }

  async function loadTasks() {
    try {
      const tasks = await AsyncStorage.getItem("@tasks");
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível carregar as tarefas");
    }
  }

  function createTask(title: string) {
    const newTask = {
      id: count,
      title,
      done: false,
    };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  }

  function selectTask(task: TaskProps) {
    setTask(task);
  }

  function clearTask() {
    setTask({} as TaskProps);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ task, selectTask, clearTask, createTask, tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProviderSearch;






interface TaskContextProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  selectedTask: ITarefa | null;
  selectTask: (task: ITarefa) => void;
}

export const InternalTaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(InternalTaskContext);
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider');
  }
  return context;
};

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ITarefa | null>(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectTask = (task: ITarefa) => {
    setSelectedTask(task);
  };

  const contextValue: TaskContextProps = {
    isModalVisible,
    toggleModal,
    selectedTask,
    selectTask,
  };

  return (
    <InternalTaskContext.Provider value={contextValue}>
      {children}
    </InternalTaskContext.Provider>
  );
};
