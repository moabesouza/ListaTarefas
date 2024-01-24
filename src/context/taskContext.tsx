import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ITarefa } from "../interfaces/tarefa";
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
