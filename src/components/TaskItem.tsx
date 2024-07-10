import React, { useEffect, useRef, useState } from "react";
import { Task } from "../hooks/useTasks";

interface TaskItemProps {
  task: Task;
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editTask,
  deleteTask,
  toggleTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // SAME HERE, WHEN USER CLICKS ON EDIT BUTTON, THE INPUT WILL BE FOCUSED
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, title);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-2 p-2 border-b border-gray-200">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-2"
      />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border text-black outline-none p-1 flex-grow"
        />
      ) : (
        <span className={`flex-grow ${task.completed ? "line-through" : ""}`}>
          {task.title}
        </span>
      )}
      <button onClick={handleEdit} className="bg-yellow-500 text-white p-1">
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white p-1"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
