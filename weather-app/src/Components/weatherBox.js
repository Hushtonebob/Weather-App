

function WeatherBox({ background }){
return(
    <div>     
        <div id={`${background}numbers`}>
            <div id="highNum">10</div>
            <div id="lowNum">20</div>
            <div id="currentNum">30</div>
        </div>       
        <div id={`${background}weatherBox`}>
            <h1 id={`${background}high`}>High</h1>
            <h1 id={`${background}low`}>Low</h1>
            <h1 id={`${background}current`}>Temp</h1>
        </div>
    </div>
);
//end
};

export default WeatherBox;