import { useState } from "react";

function AreaBox({ background }){

    const [pic, setPic] = useState("");

    fetch("https://api.teleport.org/api/urban_areas/slug:new-york/images/")
    .then(res=>res.json())
    .then(data=>{ 
        console.log(data.photos[0].image.web);
        setPic(data.photos[0].image.web);
    });

    return(
        <div id="topBox">
            <img id="bg" alt="" src={pic}></img>
            <div id={`${background}areaBox`}>
                <h1 id="city">New York</h1>
            </div>
        </div>
    );
//end
};

export default AreaBox;