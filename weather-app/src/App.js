import { useState } from 'react';
import './App.css';
import './style/displayTab.css';
import './style/moreInfo.css';
import './style/searchBox.css';
import './style/darkMode.css';
import DisplayTab from './Components/displayTab';
import MoreInfo from './Components/moreInfo';
import SearchBox from './Components/searchBox';

function App() {

  const [background, setBackground] = useState("Dark");
  const [citySearch, setCitySearch] = useState("");
  const [display, setDisplay] = useState("New York");

  return (
    <div className={background}>
      <DisplayTab 
      display={display}
      background={background}
      citySearch={citySearch}/>

      <SearchBox 
      setBackground={setBackground} 
      background={background}
      setCitySearch={setCitySearch}
      display={display}
      setDisplay={setDisplay}
      />
      <MoreInfo background ={background}/>
    </div>
  );
}

export default App;
