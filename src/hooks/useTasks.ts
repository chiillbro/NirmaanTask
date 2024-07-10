import { useState, useEffect } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const useTasks = (tabId: string) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = sessionStorage.getItem(`tasks_${tabId}`);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    sessionStorage.setItem(`tasks_${tabId}`, JSON.stringify(tasks));
  }, [tasks, tabId]);

  const addTask = (title: string) => {
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title, completed: false },
    ]);
  };

  const editTask = (id: string, title: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      const completedTasks = updatedTasks.filter((task) => task.completed);
      const incompleteTasks = updatedTasks.filter((task) => !task.completed);
      return [...incompleteTasks, ...completedTasks];
    });
  };

  return { tasks, addTask, editTask, deleteTask, toggleTask };
};

export default useTasks;
