import React from "react";
import Tabs from "./components/Tabs";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <Tabs />
    </div>
  );
};

export default App;
