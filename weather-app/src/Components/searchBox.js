

function SearchBox(){
    return(
        <div id="Blam">
            <h1 id="searchTitle">Another Weather App</h1>
            <div id="searchBars">
                <input id="searchCity" type="type" placeholder="City"></input>
                <input id="searchState" type="type" placeholder="State"></input>
            </div>
            <button id="searchButton" onClick={()=>console.log("Blam!")}>Search</button>
        </div>
    );
//end
};

export default SearchBox;