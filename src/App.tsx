import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

const App: React.FC = () => {
  const { tasks, addTask, editTask, deleteTask, toggleTask } = useTasks();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
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

export default App;
