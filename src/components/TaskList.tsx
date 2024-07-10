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
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
