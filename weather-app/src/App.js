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
  const [weGood, setWeGood] = useState("we good");
  const [num, setNum] = useState(0);



  const timer = (cities, setNum, setPic) => {
    let num = 0;
    const intervalId = setInterval(() => {
      if (num >= cities.length) {
        num = 0;
      }
      setNum(num);
      setPic(cities[num]);
      console.log("time");
      num++;
    }, 5000); // Change pic every 5 seconds
  
    return intervalId;
  }
  
  useEffect(() => {
    let intervalId;
  
    fetch(`https://api.teleport.org/api/urban_areas/slug:${search}/images/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("not good");
        }
        return res.json();
      })
      .then((data) => {
        clearInterval(intervalId); // Stop the timer on a successful request
        setPic(data.photos[0].image.web);
        setWeGood("we good");
        console.log(weGood);
      })
      .catch((error) => {
        alert("Please try again");
        setDisplay("Please try again");
        setWeGood(error);
  
        // Reset the timer on a bad request
        clearInterval(intervalId);
        intervalId = timer(cities, setNum, setPic);
      });

      fetch('https://api.weatherapi.com/v1/forecast.json?key=278b3e92510e4fc1983200527232109&q=New-York&days=7&aqi=no&alerts=no')
      .then(res=>res.json())
      .then(data=>console.log(data))
  
    // Clear the interval on unmount
    return () => {
      clearInterval(intervalId);
    };
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
