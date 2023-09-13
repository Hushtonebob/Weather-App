import WeeklyBox from "./weeklyBox";

function MoreInfo({ background }){
    return(
        <div id={`${background}moreInfo`}>
            <h1 id={`${background}week`}> Weekly Temperatures
            </h1>
            <WeeklyBox 
            background={background} />
        </div>
    );
//end
};

export default MoreInfo;