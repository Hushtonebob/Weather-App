import AreaBox from "./areaBox";
import WeatherBox from "./weatherBox";

function DisplayTab({ background, display, citySearch, pic}){
    return(
        <div id={`${background}displayBox`}>
            <AreaBox 
            display={display}
            background={background}
            pic={pic}/>
            <WeatherBox
            background={background}
            />
        </div>
    );
//end
};

export default DisplayTab;