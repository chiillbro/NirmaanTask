import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../hooks/useTasks";

interface TaskListProps {
  tasks: Task[];
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  editTask,
  deleteTask,
  toggleTask,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl">No tasks yet 😑</h1>
          <p className="text-gray-500">
            Add a task by providing a title in the input field and press Enter
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
