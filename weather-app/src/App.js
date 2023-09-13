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

  return (
    <div className={background}>
      <DisplayTab background={background} />
      <SearchBox setBackground={setBackground} background={background}/>
      <MoreInfo background ={background}/>
    </div>
  );
}

export default App;
