import DarkMode from "./darkMode";
import { useState} from "react";

function SearchBox({ setBackground, background, setDisplay, change,  setChange }){
    
    const [preDisplay, setPreDisplay] = useState("");

    const displaySearch=()=>{
        
        if(preDisplay==="" || preDisplay===" "){
            setDisplay("New York");
        }
        else{
            //capitalize after a space
            setDisplay(preDisplay
            .split(" ")
            .map((word)=>{
                return word
                .charAt(0)
                .toUpperCase() + word.slice(1);
            })
            .join(" "))
            setPreDisplay("");
            setChange(!change);
        };
        //end search
    }


    
    return(
        <div id={`${background}Blam`}>
            <h1 id="searchTitle">City Weather App</h1>
            <div id="searchBars">
                <input id="searchCity" type="type" placeholder="City"
                 onChange={(e)=>{setPreDisplay(e.target.value)}}></input>
            </div>
            <button id={`${background}searchButton`}onClick={()=>displaySearch()}>Search</button>
            <DarkMode
            setBackground={setBackground}
            background={background} />
        </div>
    );
//end
};

export default SearchBox;