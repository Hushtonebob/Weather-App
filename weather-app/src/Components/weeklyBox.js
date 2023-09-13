

function WeeklyBox({background}){
    return(
        <div id={`${background}weekBox`}>
            <h2 id="day">Monday</h2>
            <div id="weekTemps">
                <div id="weekHigh">High:100</div>
                <div id="weekLow">Low:150</div>
                <div id="weekRain">Rain:100%</div>
            </div>
        </div>
    );
//end
};

export default WeeklyBox;