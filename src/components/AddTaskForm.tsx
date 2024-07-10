import { useEffect, useRef, useState } from "react";

interface AddTaskFormProps {
  addTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  /*
  ** PLEASE SEE BELOW **
  as I said in the interview, this is a hacky way to focus on the input using useRef and useEffect,
  when user first opens the website. The input will be focused automatically

  */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); //
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border text-black border-gray-300 p-2 flex-grow outline-none"
        placeholder="Add new task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
