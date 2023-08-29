import AreaBox from "./areaBox";
import WeatherBox from "./weatherBox";

function DisplayTab(){
    return(
        <div id="displayBox">
            <AreaBox />
            <WeatherBox />
        </div>
    );
//end
};

export default DisplayTab;