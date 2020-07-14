import React, { ReactElement, useState, useCallback } from 'react';
import { Task, Solution } from '@kodifaj/common';

interface TaskProviderProps {
  children?: ReactElement;
  initTask: Task;
}

type Dispatch = (value: Partial<Task>) => void;

export const TaskContext = React.createContext<Task | undefined>(undefined);
export const TaskDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export function useTaskState() {
  const context = React.useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskState must be used within a TaskProvider');
  }
  return context;
}
export function useTaskDispatch() {
  const context = React.useContext(TaskDispatchContext);
  if (context === undefined) {
    throw new Error('useTaskDispatch must be used within a TaskProvider');
  }
  return context;
}

export default function TaskProvider({ children, initTask }: TaskProviderProps): ReactElement {
  const [task, setTask] = useState<Task>(initTask);

  const handleSetTaskState = useCallback(
    (current: Partial<Task>): void => {
      setTask((prev) => ({
        ...prev,
        ...current,
      }));
    },
    [setTask],
  );

  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={handleSetTaskState}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
