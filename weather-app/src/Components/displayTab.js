import AreaBox from "./areaBox";
import WeatherBox from "./weatherBox";

function DisplayTab({ background, display }){
    return(
        <div id={`${background}displayBox`}>
            <AreaBox 
            display={display}
            background={background}/>
            <WeatherBox
            background={background}
            />
        </div>
    );
//end
};

export default DisplayTab;