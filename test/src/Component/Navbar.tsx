import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderTab = (tabName: string, displayName: string) => (
    <li
      key={tabName}
      onClick={() => {
        handleTabClick(tabName);
        navigate(tabName === "Home" ? "/" : `/${tabName}`);
      }}
      style={{
        color: activeTab === tabName ? "blue" : "gray",
        cursor: "pointer",
      }}
    >
      {displayName}
    </li>
  );

  return (
    <div className="nav">
      <ul>
        {renderTab("Home", "Home")}
        {renderTab("Test", "Test")}
      </ul>
    </div>
  );
}

export default Navbar;
