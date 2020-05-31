import React from "react";
import Data from './Data.json'
import Recruiter from "./Recruiter";

const Joblistings = () => {
    return (
        <div>
            {Data.map((element, index) => {
                return (<Recruiter AdvertisingCompanies={element.id} jobRole={element.role} company={element.company} logo={element.logo} new={element.new} featured={element.featured} position={element.position} level={element.level} postDate={element.postedAt} contract={element.contract} location={element.location} languages={element.languages} tools={element.tools} />)
            })}
        </div>

    )

}

export default Joblistings;
