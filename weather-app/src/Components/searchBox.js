import DarkMode from "./darkMode";
import { useState} from "react";

function SearchBox({ 
    setBackground,
    background,
    setDisplay,
    change,
    setChange,
    setSearch
}){
    
    const [preDisplay, setPreDisplay] = useState("");
    
    const displaySearch=()=>{
        
        if(preDisplay==="" || preDisplay===" "){
            setDisplay("Please try again");
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
        };

        //end displaysearch
    }

    const citySearch=()=>{
        setSearch(
        preDisplay
        .toLowerCase()
        .replaceAll(" ", "-"))
 
    }

    const search =()=>{
        
        displaySearch();
        citySearch();
        setChange(!change);
    }


    
    return(
        <div id={`${background}Blam`}>
            <h1 id="searchTitle">City Weather App</h1>
            <div id="searchBars">
                <input id="searchCity" type="type" placeholder="City"
                 onChange={(e)=>{setPreDisplay(e.target.value)}}></input>
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