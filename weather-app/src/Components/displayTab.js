
function DisplayTab(){
    return(
        <div id="displayBox">
            <div id="tint"></div>
            <img id="bg" alt="" src="https://media.istockphoto.com/id/1288752517/photo/phoenix-arizona-skyline-at-dusk.jpg?s=612x612&w=0&k=20&c=xwce_mDkYYfD4XfY5MZf73GMUL9HD2a6RNuW8nbUWlI="></img>
            <div id="weatherBox">
                <h1 id="high">High: Hot</h1>
                <img id="highIcon" alt="" src=""></img>
                <h1 id="low">Low: Not as hot</h1>
                <img id="lowIcon" alt="" src=""></img>
                <h1 id="humid">Humid: Wet</h1>
                <img id="humidIcon" alt="" src=""></img>
            </div>
            <div id="areaBox">
                <h1 id="city">Phoenix</h1>
                <h2 id="state">Arizona</h2>
            </div>

        </div>
    );
//end
};

export default DisplayTab;