import DarkMode from "./darkMode";
import { useState} from "react";

function SearchBox({ setBackground, background, display, setDisplay }){
    
    const [preDisplay, setPreDisplay] = useState("");

    const search=()=>{
        
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
        };
        //end search
    }
    
    return(
        <div id={`${background}Blam`}>
            <h1 id="searchTitle">City Weather App</h1>
            <div id="searchBars">
                <input id="searchCity" type="type" placeholder="City"
                 onChange={(e)=>{
                    setPreDisplay(e.target.value)
                    console.log(preDisplay);
                    }}></input>
            </div>
            <button id={`${background}searchButton`}onClick={()=>search()}>Search</button>
            <DarkMode
            setBackground={setBackground}
            background={background} />
        </div>
    );
//end
};

export default SearchBox;