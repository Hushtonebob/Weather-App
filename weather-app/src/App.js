import { useState, useEffect } from 'react';
import './App.css';
import './style/displayTab.css';
import './style/moreInfo.css';
import './style/searchBox.css';
import './style/darkMode.css';
import DisplayTab from './Components/displayTab';
import MoreInfo from './Components/moreInfo';
import SearchBox from './Components/searchBox';
import { cities } from './cityArray';




function App() {

  const [background, setBackground] = useState("Dark");
  const [search, setSearch] = useState("new-york");
  const [display, setDisplay] = useState("New York");
  const [pic, setPic] = useState("new-york");
  const [change, setChange] = useState(true);

  const searchBlam=()=>{
    setInterval(()=>{setPic(cities[Math.round(Math.random() * 7)]); 
    setDisplay("Please try again")},10000);
  }

  useEffect(()=>{
    fetch(`https://api.teleport.org/api/urban_areas/slug:${search}/images/`)
    .then(res=>{if(res.ok){
      return res.json();
    }
    throw new Error("Please choose another city, or check spelling."); 
  })
    .then(data=>{
        setPic(data.photos[0].image.web);
    })
    .catch((error)=>{ 
      alert(error); 
      setChange(!change);
    })
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
