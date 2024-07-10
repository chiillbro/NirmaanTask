import React, { useState, useEffect } from "react";
import TabContent from "./TabContent";
import toast from "react-hot-toast";

interface Tab {
  id: string;
  title: string;
}

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>(() => {
    const savedTabs = sessionStorage.getItem("tabs");
    return savedTabs ? JSON.parse(savedTabs) : [{ id: "0", title: "Tab 1" }];
  });
  const [activeTab, setActiveTab] = useState<string>("0");

  useEffect(() => {
    sessionStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  const addTab = (): void => {
    const newTabId = tabs.length.toString();
    const newTab = { id: newTabId, title: `Tab ${tabs.length + 1}` };
    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
    sessionStorage.setItem("tabs", JSON.stringify([...tabs, newTab]));
  };

  const handleRemoveTab = (tabId: string): void => {
    sessionStorage.removeItem(`tasks_${tabId}`);
    setTabs((prevTabs) => {
      const filteredTabs = prevTabs.filter((tab) => tab.id !== tabId);
      sessionStorage.setItem("tabs", JSON.stringify(filteredTabs));

      if (activeTab === tabId) {
        const currentIndex = prevTabs.findIndex((tab) => tab.id === tabId);

        // console.log(currentIndex);
        if (currentIndex > 0) {
          setActiveTab(filteredTabs[currentIndex - 1].id);
        } else {
          setActiveTab(filteredTabs[0].id);
        }
      }

      return filteredTabs;
    });

    toast.success(`Tab ${Number(tabId) + 1} removed successfully!`);
  };

  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` relative p-2 rounded-sm ${
              activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-400"
            }`}
          >
            <p onClick={() => setActiveTab(tab.id)}>{tab.title}</p>

            <p
              onClick={() => handleRemoveTab(tab.id)}
              className={`absolute -right-1 -top-2 bg-white rounded-full w-[14px] h-[20px] text-black ${
                tab.id === "0" ? "hidden" : "flex"
              }  items-center justify-center`}
            >
              X
            </p>
          </button>
        ))}
        <button
          onClick={addTab}
          className="p-2 rounded-sm bg-green-500 text-white"
        >
          New Tab
        </button>
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <TabContent tabId={tab.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
