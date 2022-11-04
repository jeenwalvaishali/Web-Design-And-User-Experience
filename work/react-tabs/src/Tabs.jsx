import { useState } from 'react';
import TabContent from './TabContent';
import TabItems from './TabItems';

function Tabs({ entries }) {

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tabs">
      <ul className="tab__item">
        <TabItems title="Home" id="home" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabItems title="About" id="about" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabItems title="Service" id="service" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabItems title="Privacy" id="privacy" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabItems title="Contact" id="contact" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="tabcontent">
      {Object.keys(entries).map((content) => {
        console.log("here" + entries[content] + content);
             return <TabContent tabindex="0" key={content} id={content} activeTab={activeTab}>
                         <div>{entries[content]}</div>
                       </TabContent>; 
        })}
      </div>
    </div>
    );
  };
  export default Tabs;