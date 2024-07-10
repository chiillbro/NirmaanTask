import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import useTasks from "../hooks/useTasks";

interface TabContentProps {
  tabId: string;
}

const TabContent: React.FC<TabContentProps> = ({ tabId }) => {
  const { tasks, addTask, editTask, deleteTask, toggleTask } = useTasks(tabId);

  return (
    <div>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default TabContent;
