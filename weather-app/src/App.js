import './App.css';
import './style/displayTab.css';
import './style/moreInfo.css';
import './style/weeklyBox.css';
import DisplayTab from './Components/displayTab';
import MoreInfo from './Components/moreInfo';

function App() {
  return (
    <div className="App">
      <DisplayTab />
      <MoreInfo />
    </div>
  );
}

export default App;
