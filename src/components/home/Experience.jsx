import React, { useState, useEffect, Profiler } from "react";
// import Boeing from "../../editable-stuff/boeing.jpg";
import GELogo from "../../editable-stuff/ge-logo.png";
import moment from "moment";
require("moment-precise-range-plugin");

var starts = moment('2013-01-08 11:00:00');
var ends   = moment();

// var duration = moment.duration(ends.diff(starts));

// with ###moment precise date range plugin###
// it will tell you the difference in human terms

// var diff = moment.preciseDiff(starts, ends, true); 
// example: { "years": 2, "months": 7, "days": 0, "hours": 6, "minutes": 29, "seconds": 17, "firstDateWasLater":  false }


// or as string:
var totalExperience = moment.preciseDiff(starts, ends);
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={GELogo}
                        alt="GE logo"
                        width="300"
                        height="auto"
                        backgroundColor="white"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Senior Software Engineer
                        <br/>
                        March 2018 - Present
                    </p>
                    <p><b>Total Experience: {totalExperience}</b></p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;