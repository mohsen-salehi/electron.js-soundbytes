import React from 'react'
import { Link } from "react-router-dom";
// import proppyPdf from "./../../../assets/pdf/proppy.pdf"
import redDot from "./../../../assets/img/red-dot.png"
import mapMarker from "./../../../assets/img/map-marker.png"
import clipborad from "./../../../assets/img/clipboard.png"
import areasave from "./../../../assets/img/areasave.png"
import blueDot from "./../../../assets/img/blue-dot.png"
import proj_azimuthalequidistant from "./../../../assets/img/proj_azimuthalequidistant.png"
import proj_platecarree from "./../../../assets/img/proj_platecarree.png"
import proj_mollweide from "./../../../assets/img/proj_mollweide.png"
import beacons from "./../../../assets/img/beacons.png"
import cushcraft_patterns from "./../../../assets/img/cushcraft_patterns.png"
import radcom_sample from "./../../../assets/img/radcom_sample.png"
import map_and_muf from "./../../../assets/img/map_and_muf.png"
import ciraf_world from "./../../../assets/img/ciraf-world.png"
import sample_search_1 from "./../../../assets/img/sample_search_1.png"
import sample_search_2 from "./../../../assets/img/sample_search_2.png"
import ws_area from "./../../../assets/img/ws_area.png"
import space_weather_mobile from "./../../../assets/img/space_weather_mobile.png"
import silso_ssn from "./../../../assets/img/silso_ssn.png"


function Manual() {
    return (
        <section className="article" id="idm46006647373136">
            <div className="titlepage">
                <div>
                    <div><h1 className="title">Proppy</h1></div>
                    <div><h3 className="subtitle"><em>User Documentation</em></h3></div>
                    <div>
                        <div className="author"><h3 className="author">James A. Watson</h3> <code className="email">&lt;<a
                            className="email" href="mailto:jimwatson@mac.com">jimwatson@mac.com</a>&gt;</code></div>
                    </div>
                    <div>
                        <div className="abstract"><h3 className="abstract-title"><em>Abstract</em></h3> <p>This document
                            describes the use of the <span className="emphasis"><em>proppy</em></span> (<span
                                className="emphasis"><em>PROP</em></span>agation<span
                                    className="emphasis"><em>PY</em></span>thon) web-application to perform HF Circuit
                            analysis. Predictions are determined in accordance with ITU Recommendation P.533 (Method for
                            the prediction of the performance of HF circuits) [<a className="text-primary text-decoration-underline px-1citation"
                                href="#idm46006645448304"><span
                                    className="citation">ITU-R P.533</span></a>] using the ITU's ITURHFPROP application.</p>
                            <p> In addition to prediction capabilities, the site also provides tools to help assess
                                current conditions by monitoring NCDXF/IARU Beacons and current space weather
                                conditions.</p>
                            <div className="note"><h3 className="title">Documentation</h3> <p>The current version of this
                                document is available as a .pdf file at the following location; <a className="text-primary text-decoration-underline px-1 link"  target="_blank">doc/proppy.pdf</a>.
                            </p></div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="toc">
                <div className="toc-title">Table of Contents</div>
                <ul className="toc">
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.introduction">1. Introduction</a> </span></li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.p2p">2. Point-to-Point Predictions</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#p2p.results">2.1. Displaying the Results</a> </span>
                            </li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.p2p.save">2.2. Saving the Results</a> </span>
                            </li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.area">3. Area Predictions</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.area.results">3.1. Displaying the Results</a> </span>
                            </li>
                            <li><span className="section"> <a
                                href="#section.area.save">3.2. Saving the Results</a> </span></li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.beacons">4. Beacons</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645849424">4.1. Beacon's Propagation Prediction Method</a> </span>
                            </li>
                            <li><span className="section"> <a
                                href="#idm46006645825744">4.2. Saving the Results</a> </span></li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645820256">4.3. Sample Input File</a> </span>
                            </li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645817232">5. Planner Plots</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.planner.presets">5.1. Presets</a> </span>
                            </li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.radcom">6. RadCom Predictions</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645695616">6.1. Results</a> </span></li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645686992">6.2. Sample Input File</a> </span>
                            </li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.swl">7. Shortwave Listening Schedules</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.swl.ciraf">7.1. CIRAF Zones</a> </span></li>
                            <li><span className="section"> <a
                                href="#section.swl.search-examples">7.2. Example Searches</a> </span></li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645629424">8. Web Service</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645626512">8.1. Area</a> </span></li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.spaceweather">9. Spaceweather</a> </span></li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.ssn">10. Sun Spot Numbers (SSNs)</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.ssn.data">10.1. SSN Data</a> </span></li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#s-meter">11. S-Meter Values</a> </span></li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.traffic">12. Traffic Types</a> </span></li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.troubleshooting">13. Troubleshooting</a> </span>
                        <ul>
                            <li><span className="section"> <a
                                href="#section.troubleshooting.cache">13.1. Cache</a> </span></li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.troubleshooting.csrf">13.2. Validation Error: [csrf_token] The CSRF token has expired.</a> </span>
                            </li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.troubleshooting.geolocation">13.3. Geo Location Error</a> </span>
                            </li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.troubleshooting.browser_support">13.4. Supported browsers</a> </span>
                            </li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.privacy">14. Privacy</a> </span>
                        <ul>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.privacy.cookies">14.1. Cookies</a> </span>
                            </li>
                            <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.privacy.https">14.2. HTTPS</a> </span></li>
                        </ul>
                    </li>
                    <li><span className="section"> <a className="text-primary text-decoration-underline px-1" href="#section.language">15. Language Preferences</a> </span></li>
                    <li><span className="glossary"> <a className="text-primary text-decoration-underline px-1" href="#idm46006645464928">Glossary</a> </span></li>
                    <li><span className="bibliography"> <a className="text-primary text-decoration-underline px-1" href="#references">Bibliography</a> </span></li>
                </ul>
            </div>
            <section className="section" id="section.introduction">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">1.&nbsp;Introduction</h2></div>
                    </div>
                </div>
                <p>This document describes the operation of the 'Proppy' web application and the capabilities provided to
                    support on-demand predictions for Point-to-Point (P2P) and Area coverage in addition to monitoring
                    conditions in real time. </p> <p> Proppy comprises the following major elements; </p>
                <div className="variablelist">
                    <dl className="variablelist row">
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>P2P</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>The <a className="text-primary text-decoration-underline px-1 link" href="https://soundbytes.asia/proppy/p2p"
                            target="_top"> 'Point-to-Point' (P2P) page</a> supports
                            predictions for a specified path for a 24 hour period throughout a given month.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Area</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>The <a className="text-primary text-decoration-underline px-1 link" href="https://soundbytes.asia/proppy/area"
                            target="_top"> 'Area' page</a> provides coverage predictions
                            for a specified transmit site and traffic.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Planner</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/planner"
                            target="_top"> 'Planner' page</Link> allows a user to create
                            propagation charts from a nominated transmit site to multiple receive sites on a single sheet,
                            similar to those made available by the <a className="text-primary text-decoration-underline px-1 link"
                                href="http://www.arrl.org/propagation"
                                target="_top">ARRL</a>. The results are presented as
                            a pdf download suitable for printing and retaining as a quick reference. All P2P plots on the
                            chart are for a single Month/Year/SSN Value.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Beacon</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>The <a className="text-primary text-decoration-underline px-1 link" href="https://soundbytes.asia/proppy/beacon"
                            target="_top"> 'Beacon' page</a> page displays the NCDXF/IARU
                            International Beacon Project's scheduled transmissions in real time and performs propagation
                            predictions for the current month between each beacon and a specified receive site.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Space Weather</strong> </span> </span>
                        </dt>
                        <dd className="col-sm-9"><p>The space weather page presents data extracted from the latest
                            Geophysical Alert Message published by NOAA at <a className="text-primary text-decoration-underline px-1 link"
                                href="http://services.swpc.noaa.gov/text/wwv.txt"
                                target="_top">http://services.swpc.noaa.gov/text/wwv.txt</a>.
                            Updates to this data are published at approximately three hourly intervals from around
                            00:00UTC.</p></dd>
                    </dl>
                </div>
                <p></p> <p>Transparency is a fundamental design goal of the website, and wherever practical, the 'Source
                    Text' toggle buttons may be used to inspect the ITURHFProp input and output files. Where this is not
                    possible, i.e. due to multiple files being required to produce a single output, this document provides
                    sample files.</p> <p> The site has been developed using the responsive Bootstrap 4 framework for use on
                        both Desktop and Mobile devices. </p></section>
            <section className="section" id="section.p2p">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">2.&nbsp;Point-to-Point Predictions</h2></div>
                    </div>
                </div>
                <p>The <Link to="/proppy/p2p" className="text-primary text-decoration-underline px-1 link"> Point-to-Point (P2P)
                    page</Link> supports predictions for a specified path for a 24 hour period throughout a given month.</p>
                <p>The main page comprises a map display which may be used to select the Transmit and Receive sites.
                    Additional entry fields are provided to specify the input data set. Prediction results are plotted
                    alongside the map. </p> <p>The P2P page supports predictions for Signal Noise Ratio (SNR), <a
                        className="glossterm" href="#bcr" title="Basic Circuit Reliability">Basic Circuit Reliability
                        (BCR)</a> and Signal Strength (S-Meter) predictions. In addition, the <a className="text-primary text-decoration-underline px-1glossterm"
                            href="#opmuf"
                            title="Operational MUF">OPMUF</a>,
                    is displayed on the graph. ITURHFProp also supports the prediction of the <a className="text-primary text-decoration-underline px-1glossterm"
                        href="#bmuf"
                        title="Basic MUF">Basic MUF
                        (BMUF)</a>. The OPMUF is a higher value than the associated BMUF from which it's derived, accounting
                    for propagation mechanisms at frequencies above the BMUF [<a className="text-primary text-decoration-underline px-1citation"
                        href="#idm46006645430608"><span
                            className="citation">ITU-R 1240-2</span></a>] and is usually the preferred characteristic when
                    planning HF links. </p>
                <div className="procedure" id="idm46006646031664">
                    <div className="procedure-title font-weight-bold">Procedure&nbsp;1.&nbsp;Point to Point Predictions
                    </div>
                    <ol className="procedure" type="1">
                        <li className="step"><p>Specify the Transmit location using one of the following methods;</p>
                            <div className="orderedlist">
                                <ol className="orderedlist" type="i">
                                    <li className="listitem"><p>Directly from the map by dragging the red 'Tx' map pin
                                        (<span className="inlinemediaobject"><img alt="Image of a red map marker"
                                            src={redDot} /></span>)
                                        to the required location. </p></li>
                                    <li className="listitem"><p>Using the Latitude / Longitude entry fields in the Tx.
                                        Site Panel.</p></li>
                                    <li className="listitem"><p>Using the browser's geolocation support and clicking on
                                        the <span className="guibutton">map marker</span> button (<span
                                            className="inlinemediaobject"><img alt="Image of the geolocation button"
                                                src={mapMarker} /></span>)
                                        in the Tx. Site's entry panel. This will set the Tx. site to the user's current
                                        location (as reported by the browser).</p>
                                        <div className="caution"><h3 className="title">Privacy</h3> <p>Due to privacy
                                            concerns, most browsers only support geolocation services when securely
                                            connected to a site using https. Geolocation services may not be supported
                                            when connecting to the site via http.</p></div>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Receive location using one of the following methods;</p>
                            <div className="orderedlist">
                                <ol className="orderedlist" type="i">
                                    <li className="listitem"><p>Directly from the map by dragging the blue map pin (<span
                                        className="inlinemediaobject"><img alt="Image of a blue map marker"
                                            src={blueDot} /></span>)
                                        to the required location. </p></li>
                                    <li className="listitem"><p>Using the Latitude / Longitude entry fields in the Rx.
                                        Site Panel.</p></li>
                                    <li className="listitem"><p>Using the browser's geolocation support and clicking on
                                        the <span className="guibutton">map marker</span> button (<span
                                            className="inlinemediaobject"><img alt="Image of the geolocation button"
                                                src={mapMarker} /></span>)
                                        in the Rx. Site's entry panel. This will set the Rx. site to the user's current
                                        location (as reported by the browser).</p></li>
                                </ol>
                            </div>
                        </li>
                        <li className="step"><p>If required, toggle the <span
                            className="guibutton">Source Text</span> button ON to reveal the raw ITURHFProp input/output
                            text files which may be useful for debugging purposes. This data may be copied to the system
                            clipboard by clicking the clipboard icon (<span className="inlinemediaobject"><img
                                alt="Image of the clipboard button" src={clipborad} /></span>)
                            in the <span className="guilabel">Input File</span> and <span
                                className="guilabel">Output File</span> header bars. </p></li>
                        <li className="step"><p>Specify the system parameters from the System panel; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Date</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the month / year for the prediction. Note: The
                                        datetimepicker is configured to only permit dates for which SSN values are
                                        available. The range of SSN values may be viewed on the <Link className="text-primary text-decoration-underline px-1 link"
                                            to="proppy/help/ssn"
                                        >SSN Data
                                            page</Link>.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Power</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the net radiated power (W).</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Traffic</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the traffic type. This may be defined by selecting
                                        one of the predefined traffic types (derived from [<a className="text-primary text-decoration-underline px-1citation"
                                            href="#idm46006645444720"><span
                                                className="citation">ITU-R F.339-8</span></a>] and [<a className="text-primary text-decoration-underline px-1citation"
                                                    href="#idm46006645427072"><span
                                                        className="citation">Lane 1997</span></a>]) or user defined. Selecting 'User
                                        Defined' in the drop down menu will open a pair of text fields permitting the
                                        Bandwidth (0.005Hz - 3000000.0Hz) and required SNR (30.0dB and 200.0dB) parameters
                                        to be explicitly defined.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Manmade Noise</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specifies the level of man-made noise at the receive
                                        location.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>SSN Source</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>[<span className="citation">ITU-R P.371-8</span>] states
                                        that SSN values used with P.533 are derived from the 'Standard Curves' published
                                        by WDC-SILSO, Royal Observatory of Belgium, Brussels. Users may wish to explore
                                        the use of other SSN data sets published the WDC-SILSO by making the appropriate
                                        selection from the drop-down list, refer to <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                            href="#section.ssn.data"
                                            title="10.1.&nbsp;SSN Data">Section&nbsp;10.1</a> for
                                        further information. If in doubt, the default 'Standard Curves' should be used.
                                    </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Path</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Used to select the path; either or long. The short path,
                                        as the term suggests, is the shortest most direct path between transmitter and
                                        receiver and is the path assumed by SWBC frequency planners. Propagation is
                                        sometimes better on the long path depending on the location of the transmitter and
                                        receiver and the time of day. Selecting the long path option displays the long
                                        path on the map as a green line.</p></dd>
                                </dl>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Transmit antenna gain using the Tx. Site Antenna Gain entry
                            field. An isotropic antenna is assumed for P2P predictions. The default value of 2.16dBi
                            corresponds to the gain of a dipole over an isotropic radiator.</p></li>
                        <li className="step"><p>Specify the Receive antenna gain using the Rx. Site Antenna Gain entry
                            field. An isotropic antenna is assumed for p2p predictions. The default value of 2.16dBi
                            corresponds to the gain of a dipole over an isotropic radiator.</p>
                            <div className="tip"><h3 className="title">Antenna Gain</h3> <p>The current implementation
                                uses the specified gain uniformly for all frequencies in the analysis (2-30MHz). This is
                                unlikely to be a realistic assumption for most practical antenna types.</p></div>
                        </li>
                        <li className="step"><p>Click the <span className="guibutton">Run Prediction</span> button to
                            start the prediction procedure. The <span className="guibutton">Run Prediction</span> button
                            is enabled whenever the input panel settings become unsyncronised with the plotted results.
                        </p></li>
                    </ol>
                </div>
                <section className="section" id="p2p.results">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">2.1.&nbsp;Displaying the Results</h3></div>
                        </div>
                    </div>
                    <p>The predicted results are displayed on a 2D plot adjacent to the map. The selected data set (SNR,
                        BCR or Field Strength) is displayed on the background of a plot indicating the Operational Maximum
                        Usable Frequency (OPMUF). </p> <p>The plot configuration toolbar (below the plot) incorporates the
                            following functions; </p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Colour</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>The colourmap may be selected from the list of predefined Plotly
                                colour scales. Default: Portland.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Data Type</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Select from Basic Circuit Reliability (BCR), Signal to Noise Ratio
                                (SNR) or Signal Strength.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Zoom</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Click the zoom button to open a larger modal window containing the
                                plot.</p></dd>
                        </dl>
                    </div>
                    <p></p></section>
                <section className="section" id="section.p2p.save">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">2.2.&nbsp;Saving the Results</h3></div>
                        </div>
                    </div>
                    <p>The Plotly <span className="guimenu">Modebar</span> appears in the top right of the plot when the
                        cursor enters the plot canvas. The 'camera' button at the left of the menu may be used to download
                        a static image of the plot.</p></section>
            </section>
            <section className="section" id="section.area">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">3.&nbsp;Area Predictions</h2></div>
                    </div>
                </div>
                <p>The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/area" > Area
                    page</Link> provides coverage predictions for a specified transmit site and traffic type.</p> <p>The main
                        page comprises a map display used to select the transmit site and display the prediction results, a
                        toolbar to control display format and a series of panels to define prediction input parameters. Both
                        single shot predictions and animations over a twenty-four hour period are supported.</p> <p>The map
                            toolbar is used to define the data to display on the map (Basic Circuit Reliability (BCR), Signal to Noise
                            Ratio (SNR) or Signal Strength (S-Units)). The <span className="guibutton">Day/Night</span> button
                    activates the day/night overlay and the <span className="guibutton">Run Prediction</span> button is used
                    to initiate the prediction. This button is enabled whenever the input panel settings becomes
                    unsynchronised with the map overlay. A <span className="guiicon">refresh</span> indication is also
                    displayed in the top right corner of the map whenever the map display does not correspond to the input
                    values. </p> <p>Alternatively, users may cycle through predictions for a twenty-four hour period by
                        clicking the blue <span className="guibutton">play</span> button in the toolbar under the map. The
                    animation may be stopped by clicking the <span className="guibutton">pause</span> button. The step
                    forward/backward buttons will increment/decrement the value of UTC and perform a prediction. </p>
                <div className="procedure" id="idm46006645941680">
                    <div className="procedure-title font-weight-bold">Procedure&nbsp;2.&nbsp;Area Predictions</div>
                    <ol className="procedure" type="1">
                        <li className="step"><p>Specify the Transmit location. The Transmit location may be specified
                            using one of the following methods;</p>
                            <div className="orderedlist">
                                <ol className="orderedlist" type="i">
                                    <li className="listitem"><p>Directly from the map by dragging the red 'Tx' map pin
                                        (<span className="inlinemediaobject"><img alt="Image of a red map marker"
                                            src={redDot} /></span>)
                                        to the required location. </p></li>
                                    <li className="listitem"><p>Using the Latitude / Longitude entry fields in the Tx.
                                        Site Panel.</p></li>
                                    <li className="listitem"><p>Using the browser's geolocation support and clicking on
                                        the <span className="guibutton">map marker</span> button (<span
                                            className="inlinemediaobject"><img alt="Image of the geolocation button"
                                                src={mapMarker} /></span>)
                                        in the Tx. Site's entry panel. This will set the Tx. site to the user's current
                                        location (as reported by the browser).</p>
                                        <div className="caution"><h3 className="title">Privacy</h3> <p>Due to privacy
                                            concerns, most browsers only support geolocation services when securely
                                            connected to a site using https. Geolocation may not be supported when
                                            connecting to the site via http.</p></div>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li className="step"><p>If required, toggle the <span
                            className="guibutton">Source Text</span> button ON to reveal the raw ITURHFProp input/output
                            text files which may be useful for debugging purposes. This data may be copied to the system
                            clipboard by clicking the clipboard icon (<span className="inlinemediaobject"><img
                                alt="Image of the clipboard button" src={clipborad} /></span>)
                            in the <span className="guilabel">Input File</span> and <span
                                className="guilabel">Output File</span> header bars. </p></li>
                        <li className="step"><p>Select the plot resolution from <span className="quote">“<span
                            className="quote">Low</span>”</span>, <span className="quote">“<span
                                className="quote">Medium</span>”</span> and <span className="quote">“<span
                                    className="quote">High</span>”</span>, corresponding to sample points every 15°, 10° and 5°
                            respectively. </p>
                            <div className="note"><h3 className="title">High Resolution Predictions</h3> <p>Increasing
                                resolution significantly increases processing time. Low resolution plots define 325 sample
                                points (15° intervals), at High resolution (5° intervals) this increases to 2,701 data
                                points.</p></div>
                            <p></p></li>
                        <li className="step"><p>Toggle the Day/Night display as required. This input has no effect on the
                            prediction. The displayed day/night regions correspond to the time of the displayed
                            prediction. </p></li>
                        <li className="step"><p>Specify the system parameters from the System panel; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Date/Time</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the month/year for the prediction. The Date and
                                        Time datetimepickers are configured to only permit dates for which SSN values are
                                        available.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Traffic</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the traffic type. This may be defined by selecting
                                        one of the predefined traffic types (derived from [<a className="text-primary text-decoration-underline px-1citation"
                                            href="#idm46006645444720"><span
                                                className="citation">ITU-R F.339-8</span></a>] and [<a className="text-primary text-decoration-underline px-1citation"
                                                    href="#idm46006645427072"><span
                                                        className="citation">Lane 1997</span></a>]) or user defined. Selecting 'User
                                        Defined' in the drop down menu will open a pair of text fields permitting the
                                        Bandwidth (0.005Hz - 3000000.0Hz) and required SNR (30.0dB and 200.0dB) parameters
                                        to be explicitly defined.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Frequency</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the frequency (MHz) of the radiated signal in the
                                        range 2 &lt; f &lt; 30MHz.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Power</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the net radiated power (W).</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Man-made Noise</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specifies the level of man-made noise at the receive
                                        location.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>SSN Source</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>[<span className="citation">ITU-R P.371-8</span>] states
                                        that SSN values used with P.533 are derived from the 'Standard Curves' published
                                        by WDC-SILSO, Royal Observatory of Belgium, Brussels. Users may wish to explore
                                        the use of other SSN data sets published the WDC-SILSO by making the appropriate
                                        selection from the drop-down list, refer to <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                            href="#section.ssn.data"
                                            title="10.1.&nbsp;SSN Data">Section&nbsp;10.1</a> for
                                        further information. If in doubt, the default 'Standard Curves' should be used.
                                    </p></dd>
                                </dl>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Transmit antenna type using the Tx. Site entry panel.</p>
                            <div className="orderedlist">
                                <ol className="orderedlist" type="i">
                                    <li className="listitem"><p>If an isotropic antenna is specified, an antenna gain may
                                        also be defined. The default value of 2.16dBi corresponds to the gain of a dipole
                                        over an isotropic radiator </p></li>
                                    <li className="listitem"><p>If a specific antenna type is selected, the bearing may
                                        also be defined.</p></li>
                                </ol>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Receive antenna gain using the Rx. Site Antenna Gain entry
                            field. An isotropic antenna is assumed. The default value of 2.16dBi corresponds to the gain
                            of a dipole over an isotropic radiator.</p></li>
                    </ol>
                </div>
                <section className="section" id="section.area.results">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">3.1.&nbsp;Displaying the Results</h3></div>
                        </div>
                    </div>
                    <p>The predicted results are displayed directly onto the main map. The toolar below the map may be
                        used to modify the presentation of the results; </p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Colour</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Selects the colormap used to represent the data from a drop-down
                                menu containing a number of Plotly colour maps. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Plot Type</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Selects the plot type from a series of radio buttons, Basic
                                Circuit Reliability (BCR), Signal to Noise Ratio (SNR) or Signal Strength (in S Units).
                                Further information on S-Units may be found in <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#s-meter"
                                    title="11.&nbsp;S-Meter Values">Section&nbsp;11,
                                    “S-Meter Values”</a>. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Day / Night</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Toggles the Day / Night display, corresponding to the prediction
                                UTC value.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Download</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Initiates a download of the map image, see <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                href="#section.area.save"
                                title="3.2.&nbsp;Saving the Results">Section&nbsp;3.2</a> for
                                further details.</p></dd>
                        </dl>
                    </div>
                </section>
                <section className="section" id="section.area.save">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">3.2.&nbsp;Saving the Results</h3></div>
                        </div>
                    </div>
                    <p>The <span className="guibutton">download</span> button below the map is enabled whenever valid data
                        is displayed. Clicking the button open a panel to select image parameters;</p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Projection</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Selects the map projection. Proppy currently supports Equidistant
                                Cylindrical (Plate Carree), Azimuthal Equidistant and Mollweide projections. See
                                Figures <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#fig-proj-aeqd"
                                    title="Figure&nbsp;1.&nbsp;Azimuthal Equidistant Projection (Basic Colour)">1</a> to <a
                                        className="text-primary text-decoration-underline px-1 link" href="#fig-proj-moll"
                                        title="Figure&nbsp;3.&nbsp;Mollweide Projection (Image Background)">3</a>. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Scale</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>A decimal value in the range 1.0 (smallest) to 4.0 (largest) that
                                defines the map's scale. Applies to Azimuthal Equidistant projections only. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>LL Lat/Lng, UR Lat/Lng</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Specifies the Latitude and Longitude of the Lower Left (LL) and
                                Upper Right (UR) of the map. Applies to Equidistant Cylindrical (Plate Carree) projections
                                only. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Overlay</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Specifies the map's appearance. Select from a graphical overlay, a
                                basic mono display or a basic display with colours to identify land and oceans.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Format</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p>Select either .png or .pdf format. PNGs will be displayed in the
                                browser window, PDFs will prompt a download.</p></dd>
                        </dl>
                    </div>
                    <figure className="text-center" id="fig-proj-aeqd"><img alt="Azimuthal Equidistant Projection"
                        className="img-fluid"
                        src={proj_azimuthalequidistant} />
                        <figcaption>Figure&nbsp;1.&nbsp;Azimuthal Equidistant Projection (Basic Colour)</figcaption>
                    </figure>
                    <br className="figure-break" />
                    <figure className="text-center" id="fig-proj-eqc"><img alt="Azimuthal Equidistant Projection"
                        className="img-fluid"
                        src={proj_platecarree} />
                        <figcaption>Figure&nbsp;2.&nbsp;Equidistant Cylindrical (Image Background)</figcaption>
                    </figure>
                    <br className="figure-break" />
                    <figure className="text-center" id="fig-proj-moll"><img
                        alt="Mollweide Projection (Image Background)" className="img-fluid"
                        src={proj_mollweide} />
                        <figcaption>Figure&nbsp;3.&nbsp;Mollweide Projection (Image Background)</figcaption>
                    </figure>
                    <br className="figure-break" /><p>The image may also be saved via the browser's print function.
                        Media specific targets in the CSS file hide most of the page's content to reduce clutter,
                        replacing the entry form with a title above the image. </p>
                    <figure className="text-center" id="idm46006645860912"><img
                        alt="Printing with the Browser's Print Menu" className="img-fluid"
                        src={areasave} />
                        <figcaption>Figure&nbsp;4.&nbsp;Printing via the Browser's Print Menu</figcaption>
                    </figure>
                    <br className="figure-break" /></section>
            </section>
            <section className="section" id="section.beacons">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">4.&nbsp;Beacons</h2></div>
                    </div>
                </div>
                <p>The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/beacon" target="_top"> 'Beacon'
                    page</Link> displays the NCDXF/IARU International Beacon Project's scheduled transmissions and performs
                    propagation predictions for the current month between each beacon and a specified receive site. For
                    details of the project, please refer to the <a className="text-primary text-decoration-underline px-1 link"
                        href="https://www.ncdxf.org/beacon/index.html"
                        target="_blank"> 'NCDXF/IARU website</a></p> <p>The
                            beacons page provides a real-time view of the beacon's transmissions, as shown in <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                href="#fig-beacons-screenshot"
                                title="Figure&nbsp;5.&nbsp;Beacons Page">Figure&nbsp;5</a>.
                </p>
                <figure className="text-center" id="fig-beacons-screenshot"><img alt="Screenshot of the beacons page"
                    className="img-fluid"
                    src={beacons} />
                    <figcaption>Figure&nbsp;5.&nbsp;Beacons Page</figcaption></figure>
                <br className="figure-break" />
                <section className="section" id="idm46006645849424">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">4.1.&nbsp;Beacon's Propagation Prediction Method</h3></div>
                        </div>
                    </div>
                    <p>Each beacon comprises a 100W transmitter connected to a vertical (Cushcraft R5) antenna,
                        operating at a forward power of 100W. The input file assumes a net radiated power of 90W
                        (-10.46dBkW) to account for system losses. </p> <p>Each beacon is assumed to be operating with
                            a Cushcraft R5 antenna, employing a Type 14 antenna model. </p>
                    <figure className="text-center" id="fig-cushcraft-patterns"><img
                        alt="Cushcraft R5 Antenna Radiation Patterns" className="img-fluid"
                        src={cushcraft_patterns} />
                        <figcaption>Figure&nbsp;6.&nbsp;Cushcraft R5 Antenna Radiation Pattern (14.10, 18.11, 21.15,
                            24.93 &amp; 28.20MHz)
                        </figcaption></figure>
                    <p><br className="figure-break" /></p>
                    <div className="procedure" id="idm46006645843664">
                        <div className="procedure-title font-weight-bold">Procedure&nbsp;3.&nbsp;Beacon Predictions
                        </div>
                        <ol className="procedure" type="1">
                            <li className="step"><p>Select the required SSN source. [ITU-R P.371-8] states that SSN
                                values used with P.533 are derived from the 'Standard Curves' published by WDC-SILSO,
                                Royal Observatory of Belgium, Brussels. Users may wish to explore the use of other SSN
                                data sets published the WDC-SILSO by making the appropriate selection from the
                                drop-down list, refer to <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#section.ssn.data"
                                    title="10.1.&nbsp;SSN Data">Section&nbsp;10.1</a> for
                                further information. If in doubt, the default 'Standard Curves' should be used. </p>
                            </li>
                            <li className="step"></li>
                            <li className="step"><p>Specify the Receive location using one of the following
                                methods;</p>
                                <div className="orderedlist">
                                    <ol className="orderedlist" type="i">
                                        <li className="listitem"><p>Directly from the map by dragging the blue map pin
                                            (<span className="inlinemediaobject"><img alt="Image of a blue map marker"
                                                src={blueDot} /></span>)
                                            to the required location. </p></li>
                                        <li className="listitem"><p>Using the Latitude / Longitude entry fields in the
                                            Rx. Site Panel.</p></li>
                                        <li className="listitem"><p>Using the browser's geolocation support and
                                            clicking on the <span className="guibutton">map marker</span> button
                                            (<span className="inlinemediaobject"><img
                                                alt="Image of the geolocation button"
                                                src={mapMarker} /></span>) in the
                                            Rx. Site's entry panel. This will set the Rx. site to the user's current
                                            location (as reported by the browser).</p></li>
                                    </ol>
                                </div>
                            </li>
                            <li className="step"><p>Specify the receive antenna gain. The Receive antenna type is
                                assumed to be a isotropic radiator, with a user defined gain (dBi).</p></li>
                        </ol>
                    </div>
                    <div className="tip"><h3 className="title">Receive Antenna Gain</h3> <p>The main user interface
                        permits the gain of the receive antenna to be defined which may be used to tune the model as a
                        whole, e.g. setting the receive antenna gain to -0.17dBi is equivalent to setting the antenna
                        gain at each end of the link to zero (0dBi). </p></div>
                </section>
                <section className="section" id="idm46006645825744">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">4.2.&nbsp;Saving the Results</h3></div>
                        </div>
                    </div>
                    <p>Once prediction tables have been generated, they may be saved as a .pdf file in one of three
                        formats; </p>
                    <div className="orderedlist">
                        <ol className="orderedlist" type="i">
                            <li className="listitem"><p>A single page summary, using a format developed by <a
                                className="text-primary text-decoration-underline px-1"
                                href="https://g0kya.blogspot.com/2018/01/ibp-beacon-predictions-for-uk-using.html"
                                target="_top"> Steve Nichols (G0KYA)</a>, containing S-Values for even numbered hours
                                of the day (UTC). This table may be optionally be printed using colours to indicate
                                predicted field strength. </p></li>
                            <li className="listitem"><p>A multipage document containing all predicted values. These
                                tables may be optionally be printed using colours to indicate predicted field
                                strength.</p></li>
                            <li className="listitem"><p>A multipage document containing all predicted values along
                                with distances/bearings to each beacon from the receive site. These tables may be
                                optionally be printed using colours to indicate predicted field strength.</p></li>
                        </ol>
                    </div>
                    <p></p></section>
                <section className="section" id="idm46006645820256">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">4.3.&nbsp;Sample Input File</h3></div>
                        </div>
                    </div>
                    <p> The following presents an input file describing the circuit between the beacon "YV5B"
                        (Caracas, Venezuela) and a receive site in Cardiff, Wales. Eighteen similar runs,
                        corresponding to the number of beacons, are produced to complete each prediction table. </p>
                    <div className="example" id="idm46006645819024">
                        <div className="example-title">Example&nbsp;1.&nbsp;</div>
                        <div className="example-contents col-12 border ">
                            <code className="text-wrap">
                                PathName "Proppy Online HF Circuit Prediction: Beacon" <br />
                                Path.L_tx.lat 9.083000 <br />
                                Path.L_tx.lng -67.833000 <br />
                                TXAntFilePath "path_to_data_directory/antennas/n14/o-cushcraft_r5.n14" <br />
                                Path.L_rx.lat 51.482000 <br />
                                Path.L_rx.lng -3.179100 <br />
                                RXAntFilePath "ISOTROPIC" <br />
                                RXGOS 2.16 <br />
                                Path.year 2018 <br />
                                Path.month  6 <br />
                                Path.hour 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 <br />
                                Path.SSN 1 <br />
                                Path.frequency 14.100, 18.110, 21.150, 24.930, 28.200 <br />
                                Path.txpower -10.46 <br />
                                Path.BW 500 <br />
                                Path.SNRr 0 <br />
                                Path.SNRXXp 90 <br />
                                Path.ManMadeNoise "RESIDENTIAL" <br />
                                Path.Modulation "ANALOG" <br />
                                Path.SorL "SHORTPATH" <br />
                                RptFileFormat "RPT_PR" <br />
                                DataFilePath "path_to_data_directory" <br />
                            </code>
                        </div>
                    </div>
                    <p><br className="example-break" /></p></section></section>
            <section className="section" id="idm46006645817232">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">5.&nbsp;Planner Plots</h2></div>
                    </div>
                </div>
                <p> The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/planner" target="_top"> 'Planner'
                    page</Link> allows a user to create propagation charts from a nominated transmit site to multiple receive
                    sites on a single sheet, similar to those made available by the <a className="text-primary text-decoration-underline px-1 link"
                        href="http://www.arrl.org/propagation"
                        target="_top">ARRL</a>. The results
                    are presented as a pdf download suitable for printing and retaining as a reference. All P2P plots on
                    the chart are for a single Month/Year/SSN Value. </p>
                <div className="note"><h3 className="title">Processing Time</h3> <p>Planner charts are computationally
                    expensive to create and take longer to process than individual P2P and Area plot types, up to 50
                    seconds for a full 12 chart plot.</p></div>
                <p> All plots present the <a className="text-primary text-decoration-underline px-1glossterm" href="#opmuf" title="Operational MUF">Operational MUF
                    (OPMUF)</a> upon which the 'Overlay' selector may be used to specify additional data representing
                    either; Basic Circuit Reliability (BCR), Signal-to-Noise Ratio (SNR) or Signal Strength (S-Units).
                </p> <p> After processing, the user is prompted with a dialogue box containing a link to download the
                    completed prediction. Predictions may be saved in .pdf, .png or .svg formats. </p> <p> On supported
                        browsers, lists of receive sites may be saved in local storage for later recall. This allows users to set
                        up a predefined list of specific sites of interest and return monthly to produce updated predictions. </p>
                <div className="procedure" id="idm46006645810560">
                    <div className="procedure-title font-weight-bold">Procedure&nbsp;4.&nbsp;Planner Predictions</div>
                    <ol className="procedure" type="1">
                        <li className="step"><p>Specify the Receive location(s). Up to 12 receive locations may be
                            defined, although readability of the chart decreases with the number of receive locations.
                            Receive locations are displayed on the map and in the corresponding table below the map. Each
                            Receive Location is identified by a unique identity code and comprises a label (optional) and
                            latitude and longitude. One receive location (id=0) is created when the page opens. Additional
                            locations may either created manually using the <span
                                className="guibutton">Add Site</span> button at the foot of the table or by importing a
                            saved or preset lists. Once created, receive locations may be moved by either dragging on the
                            map or direct entry in the appropriate latitude / longitude fields. </p> <p>Receive site
                                locations may also be retrieved from stored lists, either preset or user-defined saved
                                lists; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Preset Lists</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p> Preset lists contain a set of predefined locations;
                                        'Worldwide' and 'Europe' are currently supported, described in <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                            href="#section.planner.presets"
                                            title="5.1.&nbsp;Presets">Section&nbsp;5.1,
                                            “Presets”</a>. Presets are selected using the drop down menu below the table
                                        and clicking on the <span className="guibutton">Load Preset</span> button. Once
                                        loaded, receive site locations may be modified by either dragging the map markers
                                        or direct entry into the latitude / longitude fields. </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Saved Lists</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p> On supported browsers, the contents of the table may be
                                        saved in 'localStorage' for later retrieval (the proppy website does not store any
                                        visitor data). On unsupported browsers, the <span
                                            className="guibutton">Load</span> / <span
                                                className="guibutton">Save</span> buttons are not displayed. The <span
                                                    className="guibutton">Save</span> button is used to save the current contents
                                        of the table to the browser's localStorage. The <span
                                            className="guibutton">Load</span> is used to retrieve the saved set of receive
                                        sites. </p></dd>
                                </dl>
                            </div>
                            <p></p></li>
                        <li className="step"><p>Specify the plot parameters; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Overlay</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p> Defines the data overlay in the final plots. </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Colour</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p> Defines the colour map used in the overlay (if
                                        defined). </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Format</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p> Defines the file format for the plan. </p></dd>
                                </dl>
                            </div>
                            <p></p></li>
                        <li className="step"><p>Specify the system parameters from the System panel; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Date</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the month / year for the prediction. These values,
                                        in conjunction with the nominated source of SSN values, will be used to determine
                                        the appropriate SSN for the prediction. </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Traffic</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the traffic type. This may be defined by selecting
                                        one of the predefined traffic types (derived from [<a className="text-primary text-decoration-underline px-1citation"
                                            href="#idm46006645444720"><span
                                                className="citation">ITU-R F.339-8</span></a>] and [<a className="text-primary text-decoration-underline px-1citation"
                                                    href="#idm46006645427072"><span
                                                        className="citation">Lane 1997</span></a>]) or user defined. Selecting 'User
                                        Defined' in the drop down menu will open a pair of text fields permitting the
                                        Bandwidth (0.005Hz - 3000000.0Hz) and required SNR (30.0dB and 200.0dB) parameters
                                        to be explicitly defined.</p>
                                        <div className="note"><h3 className="title">Note</h3> <p> This entry is only
                                            required if a data overlay is specified and is otherwise disabled.</p></div>
                                    </dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Power</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the net radiated power (W).</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Manmade Noise</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specifies the level of man-made noise at the receive
                                        location. This entry is only required if a data overlay is specified and is
                                        otherwise disabled.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>SSN Source</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>[<span className="citation">ITU-R P.371-8</span>] states
                                        that SSN values used with P.533 are derived from the 'Standard Curves' published
                                        by WDC-SILSO, Royal Observatory of Belgium, Brussels. Users may wish to explore
                                        the use of other SSN data sets published the WDC-SILSO by making the appropriate
                                        selection from the drop-down list, refer to <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                                            href="#section.ssn.data"
                                            title="10.1.&nbsp;SSN Data">Section&nbsp;10.1</a> for
                                        further information. If in doubt, the default 'Standard Curves' should be used.
                                    </p></dd>
                                </dl>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Transmit location using one of the following methods;</p>
                            <div className="orderedlist">
                                <ol className="orderedlist" type="i">
                                    <li className="listitem"><p>Directly from the map by dragging the red 'Tx' map pin
                                        (<span className="inlinemediaobject"><img alt="Image of a red map marker"
                                            src={redDot} /></span>)
                                        to the required location. </p></li>
                                    <li className="listitem"><p>Using the Latitude / Longitude entry fields in the Tx.
                                        Site Panel.</p></li>
                                    <li className="listitem"><p>Using the browser's geolocation support and clicking on
                                        the <span className="guibutton">map marker</span> button (<span
                                            className="inlinemediaobject"><img alt="Image of the geolocation button"
                                                src={mapMarker} /></span>)
                                        in the Tx. Site's entry panel. This will set the Tx. site to the user's current
                                        location (as reported by the browser).</p>
                                        <div className="caution"><h3 className="title">Privacy</h3> <p>Due to privacy
                                            concerns, most browsers will require a secure (i.e. https) connection to the
                                            site. Geolocation may not be supported when connecting to the site via
                                            http.</p></div>
                                    </li>
                                </ol>
                            </div>
                            <p>A transmit site name may optionally be entered. This has no effect on the computation but
                                if present will be used in the sub-plot title strings. </p></li>
                        <li className="step"><p>Specify the Transmit antenna gain using the Tx. Site Antenna Gain entry
                            field. An isotropic antenna is assumed for p2p predictions. The default value of 2.16dBi
                            corresponds to the gain of a dipole over an isotropic radiator.</p></li>
                        <li className="step"><p>Click the <span className="guibutton">Generate Plan</span> button to
                            generate the predictions. Once complete, a link to the pdf document will be displayed in a
                            modal box. The link will be valid for up to one hour from the plots being generated.</p></li>
                    </ol>
                </div>
                <section className="section" id="section.planner.presets">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">5.1.&nbsp;Presets</h3></div>
                        </div>
                    </div>
                    <p>The following sections present the locations used in the preset values. </p>
                    <section className="section" id="section.planner.preset.worldwide">
                        <div className="titlepage">
                            <div>
                                <div><h4 className="title">5.1.1.&nbsp;Worldwide</h4></div>
                            </div>
                        </div>
                        <div className="informaltable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>General Location</th>
                                        <th>Actual Location</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>W. Europe</td>
                                        <td>London, England</td>
                                        <td>51.5072</td>
                                        <td>-0.1275</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>E. Europe</td>
                                        <td>Kiev, Ukraine</td>
                                        <td>50.4500</td>
                                        <td>30.5233</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>East Coast</td>
                                        <td>Washington, DC</td>
                                        <td>38.9047</td>
                                        <td>-77.0168</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mid-USA</td>
                                        <td>Kansas City, MO</td>
                                        <td>39.0997</td>
                                        <td>-94.5783</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>West Coast</td>
                                        <td>San Francisco, CA</td>
                                        <td>37.7833</td>
                                        <td>-122.4167</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Central Asia</td>
                                        <td>New Delhi, India</td>
                                        <td>28.6139</td>
                                        <td>77.2089</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Japan</td>
                                        <td>Tokyo</td>
                                        <td>35.6833</td>
                                        <td>139.6833</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Australia</td>
                                        <td>Sydney</td>
                                        <td>-33.865</td>
                                        <td>151.2094</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Southern Africa</td>
                                        <td>Lusaka, Zambia</td>
                                        <td>-15.4167</td>
                                        <td>28.2833</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>South America</td>
                                        <td>Asuncion, Paraguay</td>
                                        <td>-25.3000</td>
                                        <td>-57.6333</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Hawaii</td>
                                        <td>Honolulu</td>
                                        <td>21.3000</td>
                                        <td>-157.8167</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Caribbean</td>
                                        <td>San Juan, Puerto Rico</td>
                                        <td>18.4064</td>
                                        <td>-66.0639</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="section" id="section.planner.preset.europe">
                        <div className="titlepage">
                            <div>
                                <div><h4 className="title">5.1.2.&nbsp;Europe</h4></div>
                            </div>
                        </div>
                        <div className="informaltable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>General Location</th>
                                        <th>Actual Location</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>United Kingdom</td>
                                        <td>London</td>
                                        <td>51.5072</td>
                                        <td>-0.1275</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Spain</td>
                                        <td>Madrid</td>
                                        <td>40.3833</td>
                                        <td>-3.7167</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>France</td>
                                        <td>Paris</td>
                                        <td>48.8567</td>
                                        <td>2.3508</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Finland</td>
                                        <td>Helsinki</td>
                                        <td>60.16667</td>
                                        <td>24.9333</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Ukraine</td>
                                        <td>Kiev</td>
                                        <td>50.4500</td>
                                        <td>30.5233</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Greece</td>
                                        <td>Athens</td>
                                        <td>37.9840</td>
                                        <td>23.7278</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>
            </section>
            <section className="section" id="section.radcom">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">6.&nbsp;RadCom Predictions</h2></div>
                    </div>
                </div>
                <p> The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/radcom"
                    target="_top">RadCom</Link> predictions page has been produced in collaboration with the RSGB's
                    Propagation Studies Committee (PSC) and allows users to create tailored versions of RadCom's monthly
                    propagation predictions, reflecting their preferred modes and equipment. Predictions are performed
                    between a user's transmitter site and thirty-two globally distributed DX locations. The results
                    indicate predicted power received (S-Units<a className="text-primary text-decoration-underline px-1footnote" href="#ftn.idm46006645715392"><sup
                        className="text-primary text-decoration-underline px-1 link" id="idm46006645715392">[1]</sup></a>) and <a className="text-primary text-decoration-underline px-1glossterm"
                            href="#bcr"
                            title="Basic Circuit Reliability">Basic
                        Circuit Reliability</a> (%). </p> <p> Transmit location is expressed as a <a className="text-primary text-decoration-underline px-1glossterm"
                            href="#mhl"
                            title="Maidenhead Locator">Maidenhead
                            Locator</a>. If no transmitter position is defined, a default value corresponding to the centre of the
                    United Kingdom is used. Locators may be provided in a four or six character format, the 4 character format
                    typically being sufficient for HF circuits. </p>
                <div className="procedure" id="idm46006645712432">
                    <div className="procedure-title font-weight-bold">Procedure&nbsp;5.&nbsp;RadCom Predictions</div>
                    <ol className="procedure" type="1">
                        <li className="step"><p>Specify the system parameters from the System panel; </p>
                            <div className="variablelist">
                                <dl className="variablelist row">
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Date</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the month / year for the prediction. These values
                                        will be used to determine the appropriate SSN for the prediction. </p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Traffic</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the traffic type. This may be defined by selecting
                                        one of the predefined traffic types (derived from [<a className="text-primary text-decoration-underline px-1citation"
                                            href="#idm46006645444720"><span
                                                className="citation">ITU-R F.339-8</span></a>] and [<a className="text-primary text-decoration-underline px-1citation"
                                                    href="#idm46006645427072"><span
                                                        className="citation">Lane 1997</span></a>]) or user defined. Selecting 'User
                                        Defined' in the drop down menu will open a pair of text fields permitting the
                                        Bandwidth (0.005Hz - 3000000.0Hz) and required SNR (30.0dB and 200.0dB) parameters
                                        to be explicitly defined.</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Power</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specify the net radiated power (W).</p></dd>
                                    <dt className="offset-sm-1 col-sm-2"><span className="term"> <span className="strong"> <strong>Manmade Noise</strong> </span> </span>
                                    </dt>
                                    <dd className="col-sm-9"><p>Specifies the level of man-made noise at the receive
                                        location.</p></dd>
                                </dl>
                            </div>
                        </li>
                        <li className="step"><p>Specify the Transmit location using a Maidenhead Locator. The <span
                            className="guibutton">Geo</span> button at the right of the Locator entry field may be used to
                            automatically determine the Locator using the browser's Geolocation API. </p>
                            <div className="caution"><h3 className="title">Privacy</h3> <p>The browser will request
                                permission to access the user's location prior to accessing the Geolocation API. The
                                conversion from latitude/longitude to Maidenhead Locator is performed locally at the
                                client side and the latitude/longitude values of are not transmitted directly to the
                                server.</p></div>
                            <p></p></li>
                        <li className="step"><p>Specify the Transmit and Receive antenna types using the Tx. Site/Rx. Site
                            entry field. If an isotropic antenna is specified, a gain offset may also be specified. A
                            value of 2.16dBi corresponds to the gain of a dipole over an isotropic radiator.</p></li>
                        <li className="step"><p>Click the <span className="guibutton">Generate Prediction</span> button to
                            start generating the predictions. Once complete, predictions may be saved as a pdf file for
                            future reference by clicking the <span className="guibutton">Save Predictions</span> button at
                            the bottom of the page.</p></li>
                    </ol>
                </div>
                <section className="section" id="idm46006645695616">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">6.1.&nbsp;Results</h3></div>
                        </div>
                    </div>
                    <p><a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#fig-radcom-table"
                        title="Figure&nbsp;7.&nbsp;RadCom Table (Typical)">Figure&nbsp;7</a> shows a table generated by
                        the RadCom prediction, displaying predictions for each hour of the day (00:00-23:00) for each of
                        the amateur bands. Cell content is defined by the Basic Circuit Reliability (BCR), receive signal
                        strength (P<sub>r</sub>), the 'Probability of Propagation' (PoP) and man-made noise. </p> <p>In
                            cases where BCR and PoP are both greater than 10%, the cell's background colour is used to indicate
                            predicted reliability as indicated by the colour map at the top of the tables. In addition, the cell's
                            content indicates P<sub>r</sub> (expressed in S-Units). A bold font is used when P<sub>r</sub> exceeds
                        the predicted level of man-made noise, a normal font is used otherwise. </p> <p> In the event that
                            either BCR or PoP are less than 10%, the cell is left blank. Actual values for BCR, PoP and Pr may be
                            seen by hovering above the cell. </p>
                    <figure className="text-center" id="fig-radcom-table"><img alt="RadCom Table (Typical)"
                        className="img-fluid"
                        src={radcom_sample} />
                        <figcaption>Figure&nbsp;7.&nbsp;RadCom Table (Typical)</figcaption></figure>
                    <br className="figure-break" /></section>
                <section className="section" id="idm46006645686992">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">6.2.&nbsp;Sample Input File</h3></div>
                        </div>
                    </div>
                    <p> The following presents a typical input when performing a RadCom prediction. The sample shown is
                        for a circuit passing CW traffic between the UK and Moscow (55.7558, 37.6173). Thirty-two similar
                        runs are performed to complete each set of predictions. </p>
                    <div className="example" id="idm46006645685760">
                        <div className="example-title">Example&nbsp;2.&nbsp;</div>
                        <div className="example-contents">
                            <code>
                                Path.L_tx.lat 52.000000 <br />
                                Path.L_tx.lng -2.000000 <br />
                                TXAntFilePath "/path_to_antenna_files/d10m.n14" <br />
                                Path.L_rx.lat 55.755800 <br />
                                Path.L_rx.lng 37.617300 <br />
                                RXAntFilePath "/path_to_antenna_files/d10m.n14" <br />
                                Path.year 2019 <br />
                                Path.month 2 <br />
                                Path.hour 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 <br />
                                Path.SSN 3 <br />
                                Path.frequency 28.85, 24.94, 21.225, 18.118, 14.175, 10.125, 7.1, 5.33, 3.65 <br />
                                Path.txpower -10.00 <br />
                                Path.BW 500.00 <br />
                                Path.SNRr 0.00 <br />
                                Path.SNRXXp 90 <br />
                                Path.ManMadeNoise "RURAL" <br />
                                Path.SorL "SHORTPATH" <br />
                                RptFileFormat "RPT_BCR | RPT_PR" <br />
                                LL.lat 55.755800 <br />
                                LL.lng 37.617300 <br />
                                LR.lat 55.755800 <br />
                                LR.lng 37.617300 <br />
                                UL.lat 55.755800 <br />
                                UL.lng 37.617300 <br />
                                UR.lat 55.755800 <br />
                                UR.lng 37.617300 <br />
                                DataFilePath "path_to_data_directory" <br />
                            </code>
                        </div>
                    </div>
                    <p><br className="example-break" /></p></section>
            </section>
            <section className="section" id="section.swl">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">7.&nbsp;Shortwave Listening Schedules</h2></div>
                    </div>
                </div>
                <p>The <Link className="text-primary text-decoration-underline px-1 link" to="/proppy/swl" target="_top"> 'SWL' page</Link> may be
                    used to interrogate the current HFCC database of scheduled shortwave transmissions to access
                    programming of interest. The underlying database is made freely available by the HFCC at <a
                        className="text-primary text-decoration-underline px-1" href="http://www.hfcc.org/data/" target="_top">http://www.hfcc.org/data/</a>.
                </p> <p>The main page comprises a map, used for defining the target location, and a 'Search Filters' panel
                    incorporating filters for frequency, time, language and target CIRAF zones. Filters are enabled/disabled
                    using the checkbox at the right-hand side of each entry field. </p>
                <div className="variablelist">
                    <dl className="variablelist row">
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Frequency</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p> Filtering by frequency selection may be achieved by either entering a
                            value directly into the frequency text field or selecting a band using the band entry field.
                            The search may be expanded by ±5kHz by clicking the horizontal arrow (↔) button in the right
                            of the text entry field; i.e. if the specified frequency is '6.195', clicking the ↔ button
                            will return results for the range 6.190-7.200MHz.</p> <p>The frequency and band entry fields
                                are mutually exclusive; activating one will disable the other if it is already enabled.</p>
                        </dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Language</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>Clicking the checkbox in the left of the text field will filter the
                            results to include only the language specified in the language drop-down box.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>Time</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>Clicking the checkbox in the left of the text field will filter the
                            results to include only stations active at the specified time (UTC).</p> <p>The 'clock'
                                push-button may be used to set the time to any required value.</p> <p>The 'play' button will
                                    synchronise the time with the computer's clock. The position of the day/night overlay on the
                                    map corresponds to the value in the time field.</p></dd>
                        <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                            className="strong"> <strong>CIRAF</strong> </span> </span></dt>
                        <dd className="col-sm-9"><p>Clicking the checkbox in the left of the text field will filter the
                            results to include only those directed to the CIRAF zones specified. See
                            https://www.itu.int/net/ITU-R/terrestrial/broadcast/hf/refdata/maps/index.html for details of
                            the CIRAF zones. Clicking the <span className="guibutton">Map Marker</span> (<span
                                className="inlinemediaobject"><img alt="Image of the expand button"
                                    src={mapMarker} /></span>)
                            at the right of the CIRAF entry field will replace the contents of the field with the CIRAF
                            zone corresponding to the latitude/longitude values at the top of the page. Clicking on
                            the <span className="guibutton">Expand</span> button (<span className="inlinemediaobject"><img
                                alt="Image of the expand button"
                                src="/proppy/static/img/manual/figures/expand-button. png" /></span>) button will select the
                            CIRAF zone currently specified along with all adjacent zones. If no zone is specified, the
                            zone corresponding to the latitude/longitude values at the top of the page is used.</p>
                            <p>Example: '<code className="code">'39'</code>' specifies a single zone. <code
                                className="code">'18,19, 27-29'</code> will filter results to transmissions targeting
                                CIRAF zones 18, 19, 27, 28 &amp; 29 (corresponding to most of Western Europe).</p></dd>
                    </dl>
                </div>
                <p></p> <p> The <span className="guibutton">Search</span> button is used to initiate the search,
                    displaying the results in a table below the filter panel. The table includes a search facility to further
                    refine the results along with the ability to re-order the results by clicking on the table headers.</p>
                <p>Results may be saved to file in either CSV (suitable for importing into Excel) or as a pdf document by
                    selecting the required format at the bottom of the table and clicking the <span className="guibutton">Save Table</span> button.
                </p> <p>The sites displayed in the table are also indicated on the map as shown in <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                    href="#fig-swl-map"
                    title="Figure&nbsp;8.&nbsp;Sites Displayed on the Map">Figure&nbsp;8</a> below;
                </p>
                <figure className="text-center" id="fig-swl-map"><img alt="Search Results Map Displayed on the Map"
                    className="img-fluid"
                    src={map_and_muf} />
                    <figcaption>Figure&nbsp;8.&nbsp;Sites Displayed on the Map</figcaption></figure>
                <p><br className="figure-break" /> Clicking on any of the sites in the main map will open a small
                    information window providing additional data and initiate a propagation prediction between the
                    transmitter site and the user received site. Clicking on the sites coordinates in the information
                    window will open a new tab displaying the site's location on Google Maps. Note: Many of the site
                    locations are taken from the <code className="filename">site.txt</code> file distributed with the HFCC
                    schedules and are not necessarily precise enough to show the exact location of the site.</p>
                <section className="section" id="section.swl.ciraf">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">7.1.&nbsp;CIRAF Zones</h3></div>
                        </div>
                    </div>
                    <p>CIRAF zones (<span className="emphasis"><em>`Conferencia Internacional de Radiodifusión por Altas Frecuencias'</em></span>)
                        are used by the ITU to identify target coverage areas as shown in <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link"
                            href="#fig-ciraf-world"
                            title="Figure&nbsp;9.&nbsp;Ciraf Zones (Source: https://www.itu.int/net/ITU-R/terrestrial/broadcast/hf/refdata/maps/index.html)">Figure&nbsp;9</a> below;
                    </p>
                    <figure className="text-center" id="fig-ciraf-world"><img alt="World map showing CIRAF zones"
                        className="img-fluid"
                        src={ciraf_world} />
                        <figcaption>Figure&nbsp;9.&nbsp;Ciraf Zones (Source: <a className="text-primary text-decoration-underline px-1 link"
                            href="https://www.itu.int/net/ITU-R/terrestrial/broadcast/hf/refdata/maps/index.html"
                            target="_top">https://www.itu.int/net/ITU-R/terrestrial/broadcast/hf/refdata/maps/index.html</a>)
                        </figcaption></figure>
                    <p><br className="figure-break" /> Proppy determines the CIRAF zone by comparing the entered lat/lng
                        values with 911 CIRAF test points defined by the ITU (<a className="text-primary text-decoration-underline px-1 link"
                            href="https://www.itu.int/en/ITU-R/terrestrial/broadcast/HFBC/Pages/Reference.aspx"
                            target="_top">https://www.itu.int/en/ITU-R/terrestrial/broadcast/HFBC/Pages/Reference.aspx</a>).
                    </p></section>
                <section className="section" id="section.swl.search-examples">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">7.2.&nbsp;Example Searches</h3></div>
                        </div>
                    </div>
                    <p><a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#fig-sample-search-1"
                        title="Figure&nbsp;10.&nbsp;Search for active stations">Figure&nbsp;10</a> shows a search
                        configured to show all stations active at 10:42UTC on frequencies between 6.190-6.200 (e.g.
                        6.195MHz±5kHz).</p>
                    <figure className="text-center" id="fig-sample-search-1"><img alt="Search for active stations"
                        className="img-fluid"
                        src={sample_search_1} />
                        <figcaption>Figure&nbsp;10.&nbsp;Search for active stations</figcaption></figure>
                    <br className="figure-break" /><p><a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#fig-sample-search-2"
                        title="Figure&nbsp;11.&nbsp;Search for all 25m Band Transmissions (English) to CIRAF Zone 39">Figure&nbsp;11</a> shows
                        a search configured to show all English language transmissions in the 25m band (11.600-12.100MHz)
                        directed to CIRAF Zone 39 (Middle East).</p>
                    <figure className="text-center" id="fig-sample-search-2"><img
                        alt="Search for all 25m Band Transmissions (English) to CIRAF Zone 39" className="img-fluid"
                        src={sample_search_2} />
                        <figcaption>Figure&nbsp;11.&nbsp;Search for all 25m Band Transmissions (English) to CIRAF Zone
                            39
                        </figcaption></figure>
                    <br className="figure-break" /></section>
            </section>
            <section className="section" id="idm46006645629424">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">8.&nbsp;Web Service</h2></div>
                    </div>
                </div>
                <p>Proppy may also be used as a web services, allowing HTML 'GET' parameters to be used to create images
                    on demand. Only area type plots are currently supported, point-to-point plots are a planned
                    enhancement. The area web service is available at the following URL, to which correctly formatted
                    parameters shall be be appended. </p>
                <pre><code>https://soundbytes.asia/proppy/ws/area</code></pre>
                <p> A minimal example of a correctly formatted request is; </p>
                <pre><code>https://soundbytes.asia/proppy/ws/area?tx=23.1,-82.3&amp;freq=10.26</code></pre>
                <p></p> <p>Plots returned by the web service are in the Portable Network Graphics (PNG) format and may be
                    saved in a browser or indeed called up as part of an image element in a web page. </p>
                <section className="section" id="idm46006645626512">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">8.1.&nbsp;Area</h3></div>
                        </div>
                    </div>
                    <p>The Area Web Service returns area prediction plots in response to HTML requests. Input variable are
                        defined in the URL e.g; The following request parameters were used to create the plot shown in <a
                            className="text-primary text-decoration-underline px-1 link" href="#fig-ws-area-example"
                            title="Figure&nbsp;12.&nbsp;Area Plot created using the Web Service">Figure&nbsp;12</a>; </p>
                    <pre><code>pwr=100&amp;tx=23.1,-82.3&amp;freq=10.26&amp;ll=-50,-120.45&amp;ur=50,0</code></pre>
                    <p></p>
                    <figure className="text-center" id="fig-ws-area-example"><img
                        alt="Area Plot created using the Web Service" className="img-fluid"
                        src={ws_area} />
                        <figcaption>Figure&nbsp;12.&nbsp;Area Plot created using the Web Service</figcaption></figure>
                    <p><br className="figure-break" /></p> <p> The web service accepts the parameters listed below. When
                        multiple parameters are used, the '&amp;' character shall be used as a separator. </p>
                    <div className="warning"><h3 className="title">Encoding</h3> <p> The '&amp;' symbol is a reserved
                        character and requires encoding prior to sending to the server. Most browsers will perform the
                        required encoding automatically when entering the URL in the address bar. However, client
                        applications may need to explicitly encode the parameter string, . e.g. Python 3 uses the <code
                            className="function">urllib.parse.quote()</code> function to replace ampersand symbols with
                        the corresponding 'percent encoded' equivalent ('%26'). </p></div>
                    <p></p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>tx</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Required. A pair (lat, lng) of float values specifying the
                                coordinates of the transmitter location. Positive values should be used to express North
                                and East directions. Negative values should be used to express South and West. </p>
                                <p>Example: '<code className="code">tx=54.23,2.4</code>' specifies a transmitter located
                                    at 54.23°N, 2.4°E.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>freq</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Required. Float value [2.0-30.0] specifying the frequency of
                                operation in MHz. </p> <p>Example: '<code className="code">freq=10.265</code>' specifies a
                                    frequency of 10.265MHz.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>pwr</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Integer value [1-1000000000] specifying the transmitter
                                power in Watts. Defaults to 100W if not specified. </p> <p>Example: '<code
                                    className="code">pwr=1000</code>' sets the transmitter power to 1000W / 1kW.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>bw</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Float value [0.005-3000000.0] specifying the bandwidth
                                of the traffic. See <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#section.traffic"
                                    title="12.&nbsp;Traffic Types">Section&nbsp;12</a> for examples of
                                recommended bandwidths. Defaults to 3000 if not specified. </p> <p>Example: '<code
                                    className="code">bw=500</code>' sets the bandwidth to 500.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>snr</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Float value [30.0-200.0] specifying the snr required to
                                support the traffic type. See <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#section.traffic"
                                    title="12.&nbsp;Traffic Types">Section&nbsp;12</a> for
                                examples of recommended SNR values. Defaults to 15 if not specified. </p> <p>Example:
                                    '<code className="code">snr=500</code>' sets the required SNR to 500.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>ssn</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Integer value [1-311] specifying the ssn value to be
                                used in the calculations. If no value for ssn is provided, the y and m parameters will be
                                used to define the value from the SIDC Standard Curves dataset. </p> <p>Example: '<code
                                    className="code">ssn=6</code>' sets the ssn to 6.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>y</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Integer value specifying the year for the prediction.
                                Default value: Current year.</p> <p> The month ('m') and year ('y') parameters are used to
                                    define the month for the prediction. If no value for ssn is provided, the m,y parameters
                                    will be used to retrieve the correct value of SSN. If ssn is provided, the y value will be
                                    used as a label only and have no influence on the calculations. Valid values define a
                                    month/year for which SSN values are available. The is generally the period January 2005
                                    through to eleven months from the current date. Valid values are shown in the tables on <a
                                        className="text-primary text-decoration-underline px-1" href="https://soundbytes.asia/proppy/help/ssn" target="_top"><em
                                            className="citetitle">SSN Data Page</em></a>. </p> <p>Example: '<code
                                                className="code">y=2017</code>' sets the year to 2017.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>m</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Integer value [1-12] specifying the month for the
                                prediction. Default value: Current month. </p> <p>Example: '<code
                                    className="code">m=3</code>' sets the month to March.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>utc</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. Integer value [1-24] specifying the hour (UTC) for the
                                prediction. Default value: Current time (UTC). </p> <p>Example: '<code
                                    className="code">utc=7</code>' sets the time (UTC) to 07:00.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>ll</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. A pair (lat, lng) of float values specifying the
                                coordinates of the lower left corner of the plot. Positive values should be used to
                                express North and East directions. Negative values should be used to express South and
                                West. Default:-90,-180 (180°W, 90°S) </p> <p>Example: '<code
                                    className="code">ll=10.25,-120</code>' places the lower left of the plot at 10.25°N,
                                    120°W.</p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>ur</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. A pair (lat, lng) of float values specifying the
                                coordinates of the upper right corner of the final plot. Positive values should be used to
                                express North and East directions. Negative values should be used to express South and
                                West. Default:90,180 (180°E, 90°N).</p> <p>Example: '<code
                                    className="code">ur=50,-60.1</code>' places the upper right of the plot at 10°N, 60.1°W.
                                </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>ptype</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Optional. String value from the set ('bcr', 'snr', 'e'),
                                representing Basic Circuit Reliability, Signal to Noise Ratio and Field Strength
                                respectively. Default: bcr</p> <p>Example: '<code className="code">type=snr</code>'
                                    specifies the display of Signal to Noise data. </p></dd>
                        </dl>
                    </div>
                    <p></p></section>
            </section>
            <section className="section" id="section.spaceweather">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">9.&nbsp;Spaceweather</h2></div>
                    </div>
                </div>
                <p> The spaceweather page presents data extracted from the latest Geophiysical Alert Message published by
                    NOAA at <a className="text-primary text-decoration-underline px-1 link" href="http://services.swpc.noaa.gov/text/wwv.txt"
                        target="_top">http://services.swpc.noaa.gov/text/wwv.txt</a>. Updates to this data are
                    typically published at three hourly intervals from around 00:00UTC. </p>
                <div className="example" id="idm46006645566304">
                    <div className="example-title">Example&nbsp;3.&nbsp;WWV Report (Typical)</div>
                    <div className="example-contents">
                        <code>
                            :Product: Geophysical Alert Message wwv.txt <br />
                            :Issued: 2017 Sep 09 0910 UTC <br />
                            # Prepared by the US Dept. of Commerce, NOAA, Space Weather Prediction Center <br />
                            #
                            #          Geophysical Alert Message <br />
                            #
                            Solar-terrestrial indices for 08 September follow. <br />
                            Solar flux 117 and estimated planetary A-index 96. <br />
                            The estimated planetary K-index at 0900 UTC on 09 September was 2. <br />

                            Space weather for the past 24 hours has been severe. <br />
                            Geomagnetic storms reaching the G4 level occurred. <br />
                            Solar radiation storms reaching the S1 level occurred. <br />
                            Radio blackouts reaching the R1 level occurred. <br />

                            Space weather for the next 24 hours is predicted to be moderate. <br />
                            Geomagnetic storms reaching the G1 level are expected. <br />
                            Solar radiation storms reaching the S1 level are expected. <br />
                            Radio blackouts reaching the R2 level are expected.</code>

                    </div>
                </div>
                <br className="example-break" /><p> Reports are retrieved every three hours and parsed to extract the data
                    to drive a graphical display, as shown in the following screenshot. </p>
                <figure className="text-center" id="idm46006645563104"><img alt="An illustration of the SSN"
                    className="img-fluid"
                    src={space_weather_mobile} />
                    <figcaption>Figure&nbsp;13.&nbsp;Graphical Display of WWV Data (Mobile Device)</figcaption>
                </figure>
                <p><br className="figure-break" /></p></section>
            <section className="section" id="section.ssn">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">10.&nbsp;Sun Spot Numbers (SSNs)</h2></div>
                    </div>
                </div>
                <p>Determination of ionospheric characteristics related to HF propagation requires knowledge of the
                    prevailing levels of solar activity [<a className="text-primary text-decoration-underline px-1citation" href="#idm46006645434112"><span
                        className="citation">ITU-R P.1239-3</span></a>]. The Sunspot Number (SSN), quantifying of the
                    number of dark spots visible on the Sun’s surface, has historically served as the primary proxy of
                    solar activity [<a className="text-primary text-decoration-underline px-1citation" href="#idm46006645455312"><span className="citation">Clette et al. 2015</span></a>].
                    Records of SSNs date back over 400 years, providing a valuable insight into the sun's quasi periodic
                    11-year cycle of activity. Superimposed onto this cycle are shorter term variations that can result in
                    large fluctuations in day-to-day values. More recent research suggests that the 11 year cycle is
                    itself modulated by the interaction of two solar dynamos, accounting for the fluctuations in the level
                    of activity observed during each cycle [<a className="text-primary text-decoration-underline px-1citation" href="#idm46006645414096"><span
                        className="citation">Zharkova et al., 2015</span></a>].</p> <p>The figure below illustrates how
                            daily values (yellow) may be averaged over month (blue) and monthly smoothed (12-month) (red) periods,
                            eliminating complex short term variations to yield a more predictable indicator of solar activity. The
                            preferred ionospheric metric when determining the critical frequencies of the various layers and the MUF
                            factor M(3000)F2 is a 12-month running mean sunspot number, R<sub>12</sub> [<a className="text-primary text-decoration-underline px-1citation"
                                href="#idm46006645434112"><span
                                    className="citation">ITU-R P.1239-3</span></a>]. R<sub>12</sub> values are a function of sunspot
                    values extending at least six months either side of the month of interest [<span className="citation">ITU-R P.371-8</span>].
                    (Note that this has the unfortunate side effect that an R<sub>12</sub> value for a given month <span
                        className="quote">“<span className="quote"><span
                            className="emphasis"><em>m</em></span></span>”</span> cannot be absolutely determined until <span
                                className="emphasis"><em><span className="quote">“<span
                                    className="quote">m+6</span>”</span></em></span> (six months later)).</p>
                <figure className="text-center" id="idm46006645552032"><img alt="An illustration of the SSN"
                    className="img-fluid"
                    src={silso_ssn} />
                    <figcaption>Figure&nbsp;14.&nbsp;SSN Values</figcaption></figure>
                <br className="figure-break" />
                <section className="section" id="section.ssn.data">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">10.1.&nbsp;SSN Data</h3></div>
                        </div>
                    </div>
                    <p>In accordance with Recommendation [<span className="citation">ITU-R P.371-8</span>] Proppy uses
                        SSN (R<sub>12</sub>) values presented in the ITU's Circular of Basic Indices for Ionospheric
                        Propagation, derived from 'Standard Curves' dataset provided by WDC-SILSO, Royal Observatory
                        of Belgium, Brussels. </p> <p> In addition to the Standard Curves (SC) dataset, the SIDC
                            publish predictions based on the Combined Model (CM) and the McNish &amp; Lincoln (M&amp;L)
                            method. </p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Standard Curves</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Based on the sunspot number with and uses mean-cycle curves
                                derived from historical data to produce predictions. The Standard curves are
                                considered to be effective at predicting the declining phase of a cycle but breaks
                                down when approaching the minima so is not so reliable at predicting the rise of the
                                successive cycle. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>Combined Method</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> The combined method makes predictions based on the sunspot
                                number, comparing all cycles recorded since 1749, combined with an assessment using
                                the the geomagnetic index (aa). The geomagnetic index, 'aa', is an indicator of the
                                level of future solar activity. For this reason, the Combined Model may produce
                                superior results when passing the Solar minimum. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>McNish &amp; Lincoln</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> The McNish &amp; Lincoln method is the most established of
                                the three models, dating back to 1949, and is of interest for largely historical
                                reasons. As with the Standard Curves method, only the sunspot is considered as an
                                input which in this case is compared to historical data for the period 1849 to 1975
                                (cycles 9 to 20). This provides fair predictive abilities for much of the cycle but,
                                in common with the Standard Curves method, is less effective at the minima (±1.5
                                year). </p></dd>
                        </dl>
                    </div>
                    <p></p> <p> Users may therefore wish to experiment with the Combined Model (both with and without
                        the Kalman Filter) in a bid to improve prediction accuracy. </p> <p>The SSN values used by Proppy
                            are presented at <a className="text-primary text-decoration-underline px-1 link" href="https://soundbytes.asia/proppy/help/ssn"
                                target="_top">https://soundbytes.asia/proppy/help/ssn</a>. These values extend
                        from 2005 to the latest available prediction date (typically 12 months ahead). </p></section>
            </section>
            <section className="section" id="s-meter">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">11.&nbsp;S-Meter Values</h2></div>
                    </div>
                </div>
                <p>S-Meter values are commonly used to express received signal strength. Proppy derives S-Meter values
                    from the median available receiver power (<span
                        className="emphasis"><em>P<sub>r</sub></em></span> dBW) predicted by ITURHFProp<a
                            className="text-primary text-decoration-underline px-1 link" href="#ftn.idm46006645534096"><sup className="text-primary text-decoration-underline px-1 link"
                                id="idm46006645534096">[2]</sup></a>. This
                    value represents the summation of the the powers arising from the different modes, each mode
                    contribution depending on the receiving antenna gain in the direction of incidence of that mode. The
                    median received power levels are converted to S-Meter readings for ease of intelligibility. The
                    conversion to S-Values follows the IARU Region 1 Technical Recommendation R.1, S9 for the HF bands to
                    be a receiver input power of -103 dBW. </p>
                <div className="informaltable">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>S-Meter</th>
                                <th>dB(1uV/m)</th>
                                <th>dBW</th>
                                <th>Subjective Assessment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S9</td>
                                <td> 33.98</td>
                                <td>-103</td>
                                <td>Very strong signals</td>
                            </tr>
                            <tr>
                                <td>S8</td>
                                <td> 27.96</td>
                                <td>-109</td>
                                <td>Strong</td>
                            </tr>
                            <tr>
                                <td>S7</td>
                                <td> 21.94</td>
                                <td>-115</td>
                                <td>Moderately strong</td>
                            </tr>
                            <tr>
                                <td>S6</td>
                                <td> 15.92</td>
                                <td>-121</td>
                                <td>Good</td>
                            </tr>
                            <tr>
                                <td>S5</td>
                                <td> 9.90</td>
                                <td>-127</td>
                                <td>Fairly good</td>
                            </tr>
                            <tr>
                                <td>S4</td>
                                <td> 3.88</td>
                                <td>-133</td>
                                <td>Fair</td>
                            </tr>
                            <tr>
                                <td>S3</td>
                                <td> -2.14</td>
                                <td>-139</td>
                                <td>Weak</td>
                            </tr>
                            <tr>
                                <td>S2</td>
                                <td> -8.16</td>
                                <td>-145</td>
                                <td>Very weak</td>
                            </tr>
                            <tr>
                                <td>S1</td>
                                <td>-14.19</td>
                                <td>-151</td>
                                <td>Faint signal, barely perceptible</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="section" id="section.traffic">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">12.&nbsp;Traffic Types</h2></div>
                    </div>
                </div>
                <p>Proppy uses values of SNR and bandwidth derived from [<a className="text-primary text-decoration-underline px-1citation"
                    href="#idm46006645444720"><span
                        className="citation">ITU-R F.339-8</span></a>] and [<a className="text-primary text-decoration-underline px-1citation" href="#idm46006645427072"><span
                            className="citation">Lane 1997</span></a>] as follows; </p>
                <div className="informaltable" id="table.traffic">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>Traffic</th>
                                <th>SNR (dB)</th>
                                <th>Bandwidth (Hz)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CW</td>
                                <td>0</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>SSB (Usable)</td>
                                <td>6</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>SSB (Marginal)</td>
                                <td>15</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>SSB (Commercial)</td>
                                <td>33</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>SWBC (Fair)</td>
                                <td>36</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>SWBC (Good)</td>
                                <td>48</td>
                                <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="section" id="section.troubleshooting">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">13.&nbsp;Troubleshooting</h2></div>
                    </div>
                </div>
                <section className="section" id="section.troubleshooting.cache"><h3>13.1.&nbsp;Cache</h3> The site is
                    under constant development and it is possible that cached resources conflict with newer resources on
                    the site. Many problems can therefore be resolved by simply reloading a fresh copy of the page. The
                    procedure for this varies by browser / platform but often based around the Ctrl-F5 key combination.
                    Further information on this process may be found at <a className="text-primary text-decoration-underline px-1 link"
                        href="https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache#Bypassing_cache"
                        target="_top">https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache#Bypassing_cache</a>.
                </section>
                <section className="section" id="section.troubleshooting.csrf">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">13.2.&nbsp;Validation Error: [csrf_token] The CSRF token has
                                expired.</h3></div>
                        </div>
                    </div>
                    <p>The site is protected against Cross-site request forgery (CSRF), also known as one-click attack or
                        session riding, a type of malicious exploit of a website where unauthorized commands are
                        transmitted from a user that the website trusts. This requires a token to be issued to the client
                        browser for each session. If this token expires, data submitted by the client will fail to
                        validate.</p> <p>If this error message is seen, simply reload the page.</p></section>
                <section className="section" id="section.troubleshooting.geolocation">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">13.3.&nbsp;Geo Location Error</h3></div>
                        </div>
                    </div>
                    <p>In order to protect user's privacy, most current browsers prevent the transmission of personal data
                        over unsecured channels. If this error message is seen, reconnect to the website using the https
                        protocol, e.g. <Link className="text-primary text-decoration-underline px-1 link" to="/proppy"
                        >https://soundbytes.asia/proppy/</Link>. </p></section>
                <section className="section" id="section.troubleshooting.browser_support">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">13.4.&nbsp;Supported browsers</h3></div>
                        </div>
                    </div>
                    <p>The site is built using the Bootstrap 4 Framework, supported by the latest stabe releases of all
                        major browsers and platforms. On Windows, Internet Explorer 10-11 / Microsoft Edge are supported -
                        IE9 and down is not. </p> <p> Full details of browser and device support may be found at <a
                           className="text-primary text-decoration-underline px-1citation" href="https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/"
                            target="_top">https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/</a>" </p></section>
            </section>
            <section className="section" id="section.privacy">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">14.&nbsp;Privacy</h2></div>
                    </div>
                </div>
                <section className="section" id="section.privacy.cookies">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">14.1.&nbsp;Cookies</h3></div>
                        </div>
                    </div>
                    <p>The website uses <span className="quote">“<span className="quote">cookies</span>”</span>, to retain
                        user preferences between visits. These are stored on the user's machine so that subsequent page
                        loads are initialised with the user's preferences and language. The values of the cookie are not
                        stored by the server nor distributed to any third party.</p> <p>The cookies ('locale', 'txlat',
                            'txlng', 'rxlat', 'rxlng') are not encrypted and may be readily examined using a browser's cookie
                            manager. These cookies are designed to persist between sessions for up to six months but may be
                            deleted by the user at any time.</p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>txlat, txlng</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Coordinates of the preferred Transmit location. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>rxlat, rxlng</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Coordinates of the preferred Receive location. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>traffic</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> A string representing the preferred traffic type, used to set the
                                Traffic drop down menus when a page is opened. </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>mute-wwv-msg</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> This cookie is set when a user closes a WWV warning message and
                                is used to suppress further messages for three hours (the interval at which WWV warnings
                                are published). </p></dd>
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>locale</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Used by the site to store an ISO code identifiying a user's
                                preferred language (e.g. 'de', 'es' etc.). Users who only use English may not see this
                                cookie. </p></dd>
                        </dl>
                    </div>
                    <p>In addition to the above cookies which are used directly by the Proppy application, the following
                        cookies are associated with the site.</p>
                    <div className="variablelist">
                        <dl className="variablelist row">
                            <dt className="offset-sm-1 col-sm-2"><span className="term"> <span
                                className="strong"> <strong>session</strong> </span> </span></dt>
                            <dd className="col-sm-9"><p> Created by the Flask Framework used to build the site and is used
                                to store the variables '_id' and the 'csrf_token'. This is a HTTP Only cookie and
                                inaccessible to the Javascript. Proppy does not store any values in this cookie. </p></dd>
                        </dl>
                    </div>
                </section>
                <section className="section" id="section.privacy.https">
                    <div className="titlepage">
                        <div>
                            <div><h3 className="title">14.2.&nbsp;HTTPS</h3></div>
                        </div>
                    </div>
                    <p>It is recommended that users access the site using the secure https protocol; <Link to="/proppy" className="text-primary text-decoration-underline px-1 link">https://soundbytes.asia/proppy</Link>.
                    </p></section>
            </section>
            <section className="section" id="section.language">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">15.&nbsp;Language Preferences</h2></div>
                    </div>
                </div>
                <p>Proppy's calculation pages are offered in the following languages;</p>
                <div className="itemizedlist">
                    <ul className="itemizedlist">
                        <li className="listitem"><p>Arabic (ar)</p></li>
                        <li className="listitem"><p>English (en-gb)</p></li>
                        <li className="listitem"><p>Finnish (fi)</p></li>
                        <li className="listitem"><p>French (fr)</p></li>
                        <li className="listitem"><p>German (de)</p></li>
                        <li className="listitem"><p>Spanish (es)</p></li>
                    </ul>
                </div>
                <p>Language selection is made via the menu presented at the foot of each page. This will set a cookie
                    ('locale') to preserve the user's language preference between visits. </p> <p>In the event that a
                        'locale' cookie is not found, the value of the request header's 'Accept-Language' parameter is used to
                        identify the required language. </p></section>
            <section className="glossary" id="idm46006645464928">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">Glossary</h2></div>
                    </div>
                </div>
                <dl className="row">
                    <dt className="offset-sm-1 col-sm-2" id="bcr"><span
                        className="glossterm">Basic Circuit Reliability</span></dt>
                    <dd className="glossdef col-sm-9"><p>The probability that the specified performance criterion (i.e.
                        the specified signal-to-noise) is achieved. For analogue systems, it is evaluated on the basis of
                        signal-to-noise ratios incorporating within-an-hour and day-to-day decile variations of both
                        signal field strength and noise background. [<a className="text-primary text-decoration-underline px-1citation"
                            href="#idm46006645437632"><span
                                className="citation">ITU-R P.842-5</span></a>] </p></dd>
                    <dt className="offset-sm-1 col-sm-2" id="bmuf"><span className="glossterm">Basic MUF</span></dt>
                    <dd className="glossdef col-sm-9"><p>The highest frequency by which a radio-wave can propagate between
                        given terminals, on a specified occasion, by ionospheric refraction alone [<a className="text-primary text-decoration-underline px-1citation"
                            href="#idm46006645441152"><span
                                className="citation">ITU-R P.373-9</span></a>]</p></dd>
                    <dt className="offset-sm-1 col-sm-2" id="mhl"><span className="glossterm">Maidenhead Locator</span>
                    </dt>
                    <dd className="glossdef col-sm-9"><p>The Maidenhead Locator System is a geographic co-ordinate system
                        used by amateur radio operators to succinctly describe their locations. A locator comprises
                        alternating pairs of letters and digits to define a Field/Square/Subsquare.</p></dd>
                    <dt className="offset-sm-1 col-sm-2" id="opmuf"><span className="glossterm">Operational MUF</span>
                    </dt>
                    <dd className="glossdef col-sm-9"><p>The highest frequency that would permit acceptable performance of
                        a radio circuit by signal propagation via the ionosphere between given terminals at a given time
                        under specified working conditions. OPMUF is derived from the BMUF by the application of a
                        correction factor (in the range 1.10--1.35) [<a className="text-primary text-decoration-underline px-1citation"
                            href="#idm46006645441152"><span
                                className="citation">ITU-R P.373-9</span></a>] </p></dd>
                </dl>
            </section>
            <div className="bibliography" id="references">
                <div className="titlepage">
                    <div>
                        <div><h2 className="title">Bibliography</h2></div>
                    </div>
                </div>
                <div className="biblioentry" id="idm46006645455312"><p>[<abbr className="abbrev">Clette et al.
                    2015</abbr>] <span className="authorgroup"><span className="firstname">Frederic</span> <span
                        className="surname">Clette</span>, <span className="firstname">Leif</span> <span
                            className="surname">Svalgaard</span>, <span className="firstname">Jose</span> <span
                                className="surname">Vaquero</span>, and <span className="firstname">Edward</span> <span
                                    className="surname">Cliver</span>. </span><span className="pubdate">2015. </span><span
                                        className="publisher"><span className="publishername">The Solar Activity Cycle. </span></span><span
                                            className="pagenums">35-103. </span><span
                                                className="title"><em>Revisiting the sunspot number</em>. </span><span className="bibliomisc"><a
                                                   className="text-primary text-decoration-underline px-1citation" href="https://arxiv.org/pdf/1407.3231.pdf"
                                                    target="_top">https://arxiv.org/pdf/1407.3231.pdf</a>. </span></p></div>
                <div className="biblioentry" id="idm46006645448304"><p>[<abbr className="abbrev">ITU-R P.533</abbr>] <span
                    className="pubsnumber">Recommendation P.533-14. </span><span
                        className="pubdate">August 2019. </span><span className="publisher"><span className="publishername">International Telecommunication Union. </span></span><span
                            className="title"><em>Method for the prediction of the performance of HF circuits</em>. </span><span
                                className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-P.533-14-201908-I/en"
                                    target="_top">https://www.itu.int/rec/R-REC-P.533-14-201908-I/en</a>. </span>
                </p></div>
                <div className="biblioentry" id="idm46006645444720"><p>[<abbr className="abbrev">ITU-R
                    F.339-8</abbr>] <span className="pubsnumber">Recommendation F.339-8. </span><span className="pubdate">February 2013. </span><span
                        className="publisher"><span
                            className="publishername">International Telecommunication Union. </span></span><span
                                className="title"><em>Bandwidths, Signal-to-Noise Ratios and Fading Allowances in HF Fixed and Land Mobile Radiocommunication Systems</em>. </span><span
                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-F.339/en"
                                        target="_top">https://www.itu.int/rec/R-REC-F.339/en</a>. </span></p></div>
                <div className="biblioentry" id="idm46006645441152"><p>[<abbr className="abbrev">ITU-R
                    P.373-9</abbr>] <span className="pubsnumber">Recommendation P.373-9. </span><span className="pubdate">September 2013. </span><span
                        className="publisher"><span
                            className="publishername">International Telecommunication Union. </span></span><span
                                className="title"><em>Definitions of maximum and minimum transmission frequencies</em>. </span><span
                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-P.373/en"
                                        target="_top">https://www.itu.int/rec/R-REC-P.373/en</a>. </span></p></div>
                <div className="biblioentry" id="idm46006645437632"><p>[<abbr className="abbrev">ITU-R
                    P.842-5</abbr>] <span className="pubsnumber">Recommendation P.842-5. </span><span className="pubdate">August 2013. </span><span
                        className="publisher"><span
                            className="publishername">International Telecommunication Union. </span></span><span
                                className="title"><em>Computation of reliability and compatibility of HF radio systems</em>. </span><span
                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-P.842/en"
                                        target="_top">https://www.itu.int/rec/R-REC-P.842/en</a>. </span></p></div>
                <div className="biblioentry" id="idm46006645434112"><p>[<abbr className="abbrev">ITU-R
                    P.1239-3</abbr>] <span className="pubsnumber">Recommendation P.1239-3. </span><span
                        className="pubdate">February 2012. </span><span className="publisher"><span className="publishername">International Telecommunication Union. </span></span><span
                            className="title"><em>ITU-R reference ionospheric characteristics</em>. </span><span
                                className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-P.1239/en"
                                    target="_top">https://www.itu.int/rec/R-REC-P.1239/en</a>. </span></p></div>
                <div className="biblioentry" id="idm46006645430608"><p>[<abbr className="abbrev">ITU-R
                    1240-2</abbr>] <span className="pubsnumber">Recommendation P.1240-2. </span><span className="pubdate">September 2013. </span><span
                        className="publisher"><span
                            className="publishername">International Telecommunication Union. </span></span><span
                                className="title"><em>ITU-R methods of basic MUF, operational MUF and ray-path prediction</em>. </span><span
                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="https://www.itu.int/rec/R-REC-P.1240-2-201507-I/en"
                                        target="_top">https://www.itu.int/rec/R-REC-P.1240-2-201507-I/en</a>. </span>
                </p></div>
                <div className="biblioentry" id="idm46006645427072"><p>[<abbr className="abbrev">Lane 1997</abbr>] <span
                    className="author"><span className="firstname">George</span> <span
                        className="surname">Lane</span>. </span><span className="pubdate">1997. </span><span
                            className="publisher"><span className="publishername">Radio Science. </span></span><span
                                className="volumenum">32(5). </span><span className="pagenums">2091-2098. </span><span
                                    className="title"><em>Required Signal-to-Interference Ratios for Shortwave Broadcasting</em>. </span><span
                                        className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link"
                                            href="http://onlinelibrary.wiley.com/doi/10.1029/97RS00843/pdf"
                                            target="_top">http://onlinelibrary.wiley.com/doi/10.1029/97RS00843/pdf</a>. </span>
                </p></div>
                <div className="biblioentry" id="idm46006645418384"><p>[<abbr className="abbrev">Lane 2005</abbr>] <span
                    className="author"><span className="firstname">George</span> <span
                        className="surname">Lane</span>. </span><span className="pubdate">2005. </span><span
                            className="publisher"><span className="publishername">Ionospheric Effects Symposium, Alexandria VA USA. </span></span><span
                                className="volumenum">3B-4. </span><span className="title"><em>Improved guidelines for automatic link establishment operations.</em>. </span><span
                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link" href="http://www.voacap.com/documents/GLane_ALE.pdf"
                                        target="_top">http://www.voacap.com/documents/GLane_ALE.pdf</a>. </span></p>
                </div>
                <div className="biblioentry" id="idm46006645414096"><p>[<abbr className="abbrev">Zharkova et al.,
                    2015</abbr>] <span className="authorgroup"><span className="firstname">V</span> <span
                        className="othername">V</span> <span className="surname">Zharkova</span>, <span
                            className="firstname">S</span> <span className="othername">J</span> <span
                                className="surname">Sheperd</span>, <span className="firstname">E</span> <span
                                    className="surname">Popova</span>, and <span className="firstname">S</span> <span
                                        className="othername">I</span> <span className="surname">Zharkov</span>. </span><span
                                            className="pubdate">2015. </span><span className="publisher"><span className="publishername">Scientific reports. </span></span><span
                                                className="volumenum">5. </span><span className="title"><em>Heartbeat of the Sun from Principal Component Analysis and prediction of solar activity on a millennium timescale</em>. </span><span
                                                    className="bibliomisc"><a className="text-primary text-decoration-underline px-1 link"
                                                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4625153/"
                                                        target="_top">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4625153/</a>. </span>
                </p></div>
            </div>
            <div className="footnotes"><br />
                <hr className="footnote-hr" />
                <div className="text-primary text-decoration-underline px-1 link" id="ftn.idm46006645715392"><p><a className="text-primary text-decoration-underline px-1para" href="#idm46006645715392"><sup
                    className="para">[1] </sup></a>Refer to <a className="text-primary text-decoration-underline px-1text-primary text-decoration-underline px-1 link" href="#s-meter"
                        title="11.&nbsp;S-Meter Values">Section&nbsp;11,
                        “S-Meter Values”</a> for a description of S-Units.</p></div>
                <div className="text-primary text-decoration-underline px-1 link" id="ftn.idm46006645534096"><p><a className="text-primary text-decoration-underline px-1para" href="#idm46006645534096"><sup
                    className="para">[2] </sup></a>See Rec. ITU-R P.533-14, Section 6, <span className="emphasis"><em>Median available receiver power</em></span>
                </p></div></div>
        </section>
    )
}

export default Manual
