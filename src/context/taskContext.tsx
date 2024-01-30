import React, { createContext, useContext, useState, ReactNode, useEffect, Dispatch, SetStateAction  } from 'react';
import { ITarefa } from "../interfaces/tarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface TaskContextProps {
  isModalVisible: boolean;
  toggleModal: (taskId?: number | undefined) => void;
  selectedTask: ITarefa | null;
  selectTask: (task: ITarefa) => void;
  selectedTaskId: number | null;
  deleteTask: (taskId: number) => void;
  addTask: (newTask: ITarefa) => Promise<void>;
  tasks: ITarefa[];
  getTaskById: (taskId: number) => ITarefa | undefined;
  updateTask: (updatedTask: ITarefa) => void;
  updateTasks: (updatedTasks: ITarefa[]) => void;
  filteredTasks: ITarefa[];
  setFilteredTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>;
  
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
  const [tasks, setTasks] = useState<ITarefa[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<ITarefa[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  const updateTasks = async (updatedTasks: ITarefa[]) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error updating tasks in AsyncStorage:', error);
    }
  };
  
  const sortTasksByStatus = (tasksToSort: ITarefa[]) => {
    return tasksToSort.sort((a, b) => Number(a.status) - Number(b.status));
  };
  
  const updateTask = async (updatedTask: ITarefa) => {
    try {
      const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
      setTasks(updatedTasks);
      await updateTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw error;
    }
  };

  const toggleModal = (taskId?: number) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTaskId(taskId ?? null);
  };

  const selectTask = (task: ITarefa) => {
    setSelectedTask(task);
  };

  const deleteTask = async (taskId: number) => {
    const updatedTasks = tasks.filter((tarefa) => tarefa.id !== taskId);
    setTasks(updatedTasks);
    await updateTasks(updatedTasks);
  };

  const addTask = async (newTask: ITarefa): Promise<void> => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      const tasks: ITarefa[] = storedTasks ? JSON.parse(storedTasks) : [];

      setTasks((prevTasks) => [...prevTasks, newTask]);

      const updatedTasks = [...tasks, newTask];
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
      throw error;
    }
  };

  const getTaskById = (taskId: number): ITarefa | undefined => {
    return tasks.find((task) => task.id === taskId);
  };

  const contextValue: TaskContextProps = {
    isModalVisible,
    selectedTask,
    tasks: sortTasksByStatus(tasks),
    toggleModal,
    selectTask,
    selectedTaskId,
    deleteTask,
    addTask,
    updateTask,
    updateTasks,
    getTaskById,
    filteredTasks,
    setFilteredTasks,
  };

  return (
    <InternalTaskContext.Provider value={contextValue}>
      {children}
    </InternalTaskContext.Provider>
  );
};


