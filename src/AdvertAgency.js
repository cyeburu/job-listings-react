import React from "react";

const AdvertAgency = (props) => {
    return (
        <div className="container">
            <img src={props.logo} alt="logo" />

            <ul className="nameNewFeatured">
                <li>{props.company}</li>
                <li>{props.new}</li>
                <li>{props.featured}</li>
            </ul>
            <h1>{props.position}</h1>
            <ul>
                <li>{props.postedAt}</li>
                <li>{props.contract}</li>
                <li>{props.location}</li>
            </ul>

            <nav>
                <h2>{props.jobRole}</h2>
                <h2>{props.level}</h2>
                <h2 className={props.languages}>{props.languages}</h2>
            </nav>




        </div>
    )
}

export default AdvertAgency;
