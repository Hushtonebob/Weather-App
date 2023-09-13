import AreaBox from "./areaBox";
import WeatherBox from "./weatherBox";

function DisplayTab({ background }){
    return(
        <div id={`${background}displayBox`}>
            <AreaBox 
            background={background}/>
            <WeatherBox
            background={background} />
        </div>
    );
//end
};

export default DisplayTab;