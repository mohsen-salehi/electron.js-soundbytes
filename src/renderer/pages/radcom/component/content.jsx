import React from 'react';
import {Link} from "react-router-dom";

function Content() {
    return (
        <p className="m-0 p-3 rounded-2 border">
            This page has been produced in collaboration with the
            <a className="text-primary text-decoration-underline px-1" href="https://rsgb.org/main/about-us/committees/propagation-studies-committee/" target="_blank">RSGB's Propagation Studies Committee (PSC)</a>
            and allows users to create versions of
            <a  className="text-primary text-decoration-underline px-1"  href="https://rsgb.org/main/publications-archives/radcom/" target="_blank">RadCom's</a>
            monthly propagation predictions, tailored to their preferred modes and equipment.

            Predictions are performed between the user's position, expressed as a
            <a className="text-primary text-decoration-underline px-1" href="https://en.wikipedia.org/wiki/Maidenhead_Locator_System" target="_blank"> Maidenhead Locator </a>
            (or the default value of IO92 if not specified, and 28 remote sites. In some cases, performance for both Long and Short paths is evaluated. Results are presented in tables, with colours used to represent the Basic Circuit Reliability (BCR), and numeric values to indicate the predicted median receive power (expressed in
            <a className="text-primary text-decoration-underline px-1" target="_blank" href="https://en.wikipedia.org/wiki/S_meter">S Levels</a>
            ). For clarity, power levels below -121dBm (S1) are not shown.

            Further details of the predictions and a sample input file may be found in the
            <Link className="text-primary text-decoration-underline px-1" to="" >proppy manual</Link>
            .
        </p>
    );
}

export default Content;