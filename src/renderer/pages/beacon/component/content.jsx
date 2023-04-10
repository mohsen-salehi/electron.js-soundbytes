import React from 'react';
import {Link} from "react-router-dom";

function Content() {
    return (
       <p className="m-0 p-3 rounded-2 border">
           This page displays the NCDXF/IARU International Beacon Project's scheduled transmissions and performs propagation predictions for the current month between each beacon and your location. For details of the project, please refer to the
           <a className="text-primary text-decoration-underline px-1" target="_blank" href="https://www.ncdxf.org/beacon/index.html" >NCDXF/IARU website</a>
           .

           For details of the prediction method, refer to the
           <Link className="text-primary text-decoration-underline px-1" to="" >Proppy Manual</Link>
           .
       </p>
    );
}

export default Content;