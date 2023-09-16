
function AreaBox({ background, display, pic }){

    return(
        <div id="topBox">
            <img id="bg" alt="" src={pic}></img>
            <div id={`${background}areaBox`}>
                <h1 id="city">{display}</h1>
            </div>
        </div>
    );
//end
};

export default AreaBox;