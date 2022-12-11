import React from 'react';
import "./Country.css";

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const addHandleCountry =props.addHandleCountry;
    return (
        <div className="container">
            <div className="country">
                <img src={flag} alt=""/>
                <h4>Country Name: {name}</h4>
                <div className="line_height">
                    <p>Popultion: {population}</p>
                    <p>Region: {region}</p>
                </div>
                <button onClick={() => addHandleCountry(props.country)}>Full Details</button>
            </div>
        </div>
    );
};

export default Country;