import {useState} from 'react';

function DarkMode({ setBackground, background }){

    const [dark, setDark] = useState("darkMode");
    const [icon, setIcon] = useState("darkIcon");
    const [wordBox, setWordBox] = useState("darkWordBox")
    const [word, setWord] = useState("Light Mode");

    const lightSwitch=()=>{
        dark === "darkMode" ? setDark("lightMode") : setDark("darkMode");
        icon === "darkIcon" ? setIcon("lightIcon") : setIcon("darkIcon");
        wordBox === "darkWordBox" ? setWordBox("lightWordBox") : setWordBox("darkWordBox");
        word === "Light Mode" ? setWord("Dark Mode") : setWord("Light Mode");
        background==="Dark" ? setBackground("Light") : setBackground("Dark");
    }

    return(
        <div id={dark} onClick={()=>lightSwitch()}>
            <div id={icon}></div>
            <div id={wordBox}>{word}</div>
        </div>
    );
//end
};

export default DarkMode;