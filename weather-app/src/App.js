import { useState, useEffect } from 'react';
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
  const [search, setSearch] = useState("new-york");
  const [display, setDisplay] = useState("New York");
  const [pic, setPic] = useState("new-york");

  const [change, setChange] = useState(true)

  useEffect(()=>{
    fetch(`https://api.teleport.org/api/urban_areas/slug:${search}/images/`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.photos[0].image.web);
        setPic(data.photos[0].image.web);
    });
  }, [change]);

  return (
    <div className={background}>
      <DisplayTab 
      display={display}
      background={background}
      search={search}
      pic={pic}/>

      <SearchBox 
      change={change}
      setChange={setChange}
      setBackground={setBackground} 
      background={background}
      search={search}
      setSearch={setSearch}
      setDisplay={setDisplay}
      />
      <MoreInfo background ={background}/>
    </div>
  );
}

export default App;
