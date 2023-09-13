import DarkMode from "./darkMode";

function SearchBox({ setBackground, background }){
    return(
        <div id={`${background}Blam`}>
            <h1 id="searchTitle">Another Weather App</h1>
            <div id="searchBars">
                <input id="searchCity" type="type" placeholder="City"></input>
                <input id="searchState" type="type" placeholder="State"></input>
            </div>
            <button id={`${background}searchButton`} onClick={()=>console.log("Blam!")}>Search</button>
            <DarkMode
            setBackground={ setBackground }
            background={ background } />
        </div>
    );
//end
};

export default SearchBox;