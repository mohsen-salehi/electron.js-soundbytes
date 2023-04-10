import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import {Link} from "react-router-dom";

function Privacy() {
    return (
        <div className="container">

           <TitleComponent />


            <h2>Cookies</h2> <p>This website uses “<a className="text-primary text-decoration-underline px-1"  href="https://en.wikipedia.org/wiki/HTTP_cookie">cookies</a>”, to
            retain information between sessions. These are stored on the user's machine so that subsequent page loads
            are initialised with the user's preferences. The cookies are not distributed to, nor made available to, any
            third party. </p>
            <dl className="row">
                <dt className="col-sm-3 col-md-2">locale</dt>
                <dd className="col-sm-9 col-md-10">Used by the site to store and ISO code identifying the user's
                    prefrerred langauge (e.g. 'de', 'es', etc.). Users who only use English may not see this cookie.
                </dd>
                <dt className="col-sm-3 col-md-2">mute-wwv-msg</dt>
                <dd className="col-sm-9 col-md-10">This cookie is set when a user closes a WWV warning message and is
                    used to suppress further messages for three hours (the interval at which WWV warnings are
                    published).
                </dd>
                <dt className="col-sm-3 col-md-2">rxlat, rxlng</dt>
                <dd className="col-sm-9 col-md-10">Coordinates of the preferred Receive location.</dd>
                <dt className="col-sm-3 col-md-2">ssnsource</dt>
                <dd className="col-sm-9 col-md-10">A string representing the user's preferred source of ssn data.</dd>
                <dt className="col-sm-3 col-md-2">traffic</dt>
                <dd className="col-sm-9 col-md-10">A string representing the preferred traffic type, used to set the
                    Traffic drop down menus when a page is opened.
                </dd>
                <dt className="col-sm-3 col-md-2">trafficBW</dt>
                <dd className="col-sm-9 col-md-10">The traffic bandwidth value, used when traffic is set to 'User
                    Defined'.
                </dd>
                <dt className="col-sm-3 col-md-2">trafficSNR</dt>
                <dd className="col-sm-9 col-md-10">The traffic required SNR value, used when traffic is set to 'User
                    Defined'.
                </dd>
                <dt className="col-sm-3 col-md-2">txlat, txlng</dt>
                <dd className="col-sm-9 col-md-10">Coordinates of the preferred Transmit location.</dd>
                <dt className="col-sm-3 col-md-2">txpwr</dt>
                <dd className="col-sm-9 col-md-10">Tranmitter power (W).</dd>
                <dt className="col-sm-3 col-md-2">session</dt>
                <dd className="col-sm-9 col-md-10">Created by the Flask Framework used to build the site. Proppy does
                    not store any values in this cookie.
                </dd>
            </dl>
            <p>The cookies created by Proppy are not encrypted and current values may be readily examined using a
                browser's cookie manager. All cookies are designed to persist between sessions for up to six-months with
                the exception of 'mute-wwv-msg' which persisst for three-hours. Any cookies generated may be deleted by
                the user at any time using the browwer's cookie manager. </p> <h2>Planner Plots</h2> <p>The plots
            created by the planner application are stored on the server for up to two-hours, after which time they are
            automatically deleted. No user-generated plots are archived or otherwise stored.</p> <h2>HTTPS</h2> <p>It is
            strongly recommended that users access the site using the secure https protocol; <Link className="text-primary text-decoration-underline px-1"
                                                                                                to="/proppy">https://soundbytes.asia/proppy</Link></p></div>
    );
}

export default Privacy;