import './App.css';
import './style/displayTab.css';
import './style/moreInfo.css';
import './style/searchBox.css';
import DisplayTab from './Components/displayTab';
import MoreInfo from './Components/moreInfo';
import SearchBox from './Components/searchBox';

function App() {
  return (
    <div className="App">
      <DisplayTab />
      <MoreInfo />
      <SearchBox />
    </div>
  );
}

export default App;
