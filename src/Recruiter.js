import React from "react";

const Recruiter = (props) => {
    return (
        <div className="container">
            <div className="imageLogo">
                <img className="image" src={props.element.logo} alt="logo" />
            </div>
            <div className="jobContent" >
                <ul className="nameNewFeatured">
                    <li>{props.element.company}</li>
                    {(props.element.new) ? <li>new</li> : <li></li>}
                    {(props.element.featured) ? <li>featured</li> : <li></li>}
                </ul>
                <div><h1>{props.element.position}</h1></div>

                <ul className="dateContLoc">
                    <li>{props.element.postedAt}</li>
                    <li>{props.element.contract}</li>
                    <li>{props.element.location}</li>
                </ul>
            </div>
            <nav className="languages">
                <h2>{props.element.jobRole}</h2>
                <h2>{props.element.level}</h2>
                <h2 className={props.element.languages}>{props.element.languages}</h2>
            </nav>




        </div>
    )
}

export default Recruiter;
