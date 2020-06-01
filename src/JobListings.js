import React from "react";
import Data from './Data.json'
import Recruiter from "./Recruiter";

const Joblistings = () => {
    return (
        <div className="bodyContainer">
            {Data.map((element, index) => {
                return (<Recruiter element={element} key={index} />)
            })}
        </div>
    )
}

export default Joblistings;
