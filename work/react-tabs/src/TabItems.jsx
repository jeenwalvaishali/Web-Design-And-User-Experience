import React from "react";


const TabItems = ({id, title, activeTab, setActiveTab }) => {

 const tabClick = () => {
   setActiveTab(id);
 };

 const handleKeyPress = (event) => {
  if(event.key === "Tab"){
      setActiveTab(id);
  }
}

return (
   <li tabIndex="0" onKeyPress={tabClick} onKeyDown={handleKeyPress} onClick={tabClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabItems;