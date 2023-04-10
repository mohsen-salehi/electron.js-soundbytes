import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import {Link} from "react-router-dom";
// import pdf from "./../../../assets/pdf/proppy.pdf"
function About() {
    return (
        <section className="container">

            <TitleComponent />

            <p> The tools provided by this web application enable users to predict available frequencies, signal levels
                and corresponding reliabilities for High Frequency (HF) circuits for user defined paths and times.
                Predictions are performed using the <a
                    href="http://www.itu.int/en/ITU-R/study-groups/rsg3/Pages/iono-tropo-spheric.aspx" className="text-primary text-decoration-underline px-1"
                    target="_blank">ITURHFProp</a> application (A software method for the prediction of the performance
                of HF circuits in accordance with  <a className="text-primary text-decoration-underline px-1" href="https://www.itu.int/rec/R-REC-P.533-14-201908-I/en"
                                                     target="_blank">Recommendation ITU-R P.533-14</a>) provided by the
                ITU. </p> <h2>Downloads</h2> <p> The ITURHFProp application is available from the ITU's website at the
            following location;  <a className="text-primary text-decoration-underline px-1" href="http://www.itu.int/en/ITU-R/study-groups/rsg3/Pages/iono-tropo-spheric.aspx"
                                   target="_blank"> http://www.itu.int/en/ITU-R/study-groups/rsg3/Pages/iono-tropo-spheric.aspx</a>.
        </p> <p> The source code for the ITURHFProp application is available on GitHub at <a className="text-primary text-decoration-underline px-1"
                                                                                             href="https://github.com/ITU-R-Study-Group-3/ITU-R-HF"
            target="_blank">https://github.com/ITU-R-Study-Group-3/ITU-R-HF</a>. </p> <p> Linux users wishing to run the
            application on their own machine can install iturhfprop from a snap package which may be downloaded from <a className="text-primary text-decoration-underline px-1"
                                                                                                                        href="https://soundbytes.asia/proppy/static/snap/iturhfprop_0.1+git_amd64.snap">here</a> (91MB file).
            Install the snap with the following command (the --dangerous argument is required as the package is
            unsigned); </p>
            <div><code>sudo snap install --dangerous iturhfprop_0.1_amd64.snap</code></div>
            <p> The snap package contains the binary code and the required data files. When running iturhfprop from the
                snap package, the <code>DataFilePath</code> parameter should be set as; </p>
            <div><code>DataFilePath "/snap/iturhfprop/current/usr/share/iturhfprop/data/"</code></div>
            <h2 className="col-12 py-3">Documentation</h2> <p>Full details of Proppy's features may be found in the <Link className="text-primary text-decoration-underline px-1"
                                                                                                                          to="/proppy/help/manual">Manual</Link>, available on-line or as a <a className="text-primary text-decoration-underline px-1"
                                                                                                                                                                                              target="_blank"> .pdf download</a>. </p><p>Three prediction
            modes are supported:</p>
            <dl className="row">
                <dt className="col-sm-3 col-md-2"> <Link className="text-primary text-decoration-underline px-1" to="/proppy/area">Area</Link></dt>
                <dd className="col-sm-9 col-md-10">An interactive interface used to predict geographical coverage for a
                    given site at a specified time and frequency.
                </dd>
                <dt className="col-sm-3 col-md-2"> <Link className="text-primary text-decoration-underline px-1" to="/proppy/p2p">Point-to-Point</Link></dt>
                <dd className="col-sm-9 col-md-10">Predicts link performance for a specified path over a 24 hour period
                    in a given month.
                </dd>
                <dt className="col-sm-3 col-md-2"> <Link className="text-primary text-decoration-underline px-1" to="/proppy/planner">Planner</Link></dt>
                <dd className="col-sm-9 col-md-10">Used to create propagation charts similar to those made <a className="text-primary text-decoration-underline px-1"
                                                                                                              href="http://www.arrl.org/propagation" target="_blank">available by the ARRL</a>; presenting up to
                    12 Point-to-Point predictions on a single sheet suitable for printing and keeping by the radio.
                </dd>
            </dl>
            <h3>Useful References</h3> <p>The following material may be of interest when researching HF Propagation and
            ITURHFProp;</p><p></p>
            <ul>
                <li>ITU BR Indices <time dateTime="2016">(2016)</time>, Circular of Basic Indices for Ionospheric
                    Propagation,  <a className="text-primary text-decoration-underline px-1" href="http://www.itu.int/ITU-R/go/rsg3-indices/en"
                                    target="_blank"><cite>Latest</cite></a></li>
                <li>ITU-R P.533-14 <time dateTime="2015">(2019)</time>, Method for the prediction of the performance of
                    HF circuits,  <a className="text-primary text-decoration-underline px-1" href="https://www.itu.int/rec/R-REC-P.533-14-201908-I/en" target="_blank"><cite>Recommendation
                        ITU-R P.533-14</cite></a></li>
                <li>ITU-R F.240-7 <time dateTime="2006">(2006)</time>, Signal-to-Interference Protection Ratios for
                    Various Classes of Emission in the Fixed Service Below About 30 MHz, <a className="text-primary text-decoration-underline px-1"
                                                                                            href="https://www.itu.int/rec/R-REC-F.240/en" target="_blank"><cite>Recommendation ITU-R
                        F.240-7</cite></a></li>
                <li>ITU-R F.339-8 <time dateTime="2013">(2013)</time>, Bandwidths, Signal-to-Noise Ratios and Fading
                    Allowances in HF Fixed and Land Mobile Radiocommunication Systems, <a className="text-primary text-decoration-underline px-1"
                                                                                          href="https://www.itu.int/rec/R-REC-F.339/en" target="_blank"><cite>Recommendation ITU-R
                        F.339-8</cite></a></li>
                <li>ITU-R P.371-8 <time dateTime="1999">(1999)</time>, Choice of Indices for Long-Term Ionospheric
                    Predictions,  <a className="text-primary text-decoration-underline px-1" href="https://www.itu.int/rec/R-REC-P.371/en" target="_blank"><cite>Recommendation
                        ITU-R P.371-8</cite></a></li>
                <li>ITU-R P.372-14 <time dateTime="2019">(2019)</time>, Radio Noise, <a className="text-primary text-decoration-underline px-1"
                    href="https://www.itu.int/rec/R-REC-P.372-14-201908-I/en" target="_blank"><cite>Recommendation ITU-R
                    P.372-14</cite></a></li>
                <li>ITU-R P.1148-1 <time dateTime="1997">(1997)</time>, Standardized Procedure for Comparing Predicted
                    and Observed HF Sky-Wave Signal Intensities and the Presentation of Such Comparisons, <a className="text-primary text-decoration-underline px-1"
                        href="https://www.itu.int/rec/R-REC-P.1148-1-199705-I/en" target="_blank"><cite>Recommendation
                        ITU-R P.1148-1</cite></a></li>
                <li>ITU-R P.1239-3 <time dateTime="2012">(2012)</time>, ITU-R Reference Ionospheric Characteristics, <a className="text-primary text-decoration-underline px-1"
                    href="https://www.itu.int/rec/R-REC-P.1239/en" target="_blank"><cite>Recommendation ITU-R
                    P.1239-3</cite></a></li>
                <li>Lane, G. <time dateTime="1997">(1997)</time>, Required Signal-to-Interference Ratios for Shortwave
                    Broadcasting,  <a className="text-primary text-decoration-underline px-1" href="http://onlinelibrary.wiley.com/doi/10.1029/97RS00843/pdf"
                                     target="_blank"><cite>Radio Science, 32(5), pp.2091-2098</cite></a></li>
            </ul>
            <h2>Acknowledgements</h2> <p>The SWL page uses information provided by the HFCC at <a className="text-primary text-decoration-underline px-1"
                                                                                                  href="http://www.hfcc.org/data/" target="_blank">http://www.hfcc.org/data/</a>.</p> <p>Development of this
            web application has been made possible with the generous assistance of Chris Behm and George Engelbrecht,
            creators of the ITURHFPROP application. In addition, Bill Ingram provided valuable assistance on the
            construction of antenna input files. </p> <p>I would also like to thank John Stephen Dumadag, REE for help
            with the NEC antenna modelling.</p> <p>Jari's site,  <a className="text-primary text-decoration-underline px-1" href="http://www.voacap.com/"
                                                                   target="_blank">voacap.com</a>, was a priceless
            source of inspiration for the main user interface and Jari has also generously extended permission for me to
            use some of the Type 14 antenna models used by voacap.com.</p> <h3>Translations</h3> <p>I'm grateful for the
            efforts of the following for their help with translating the site;</p>
            <ul>
                <li>Arabic (ar): Rami Saadeh</li>
                <li>Finnish (fi): Jari Perkiömäki (OH6BG/OG6G)</li>
                <li>German (de): Heribert Lennertz (7Z1HL / DL8KAY)</li>
                <li>Italian (it): Marco Colombo (IU2DXF)</li>
                <li>Spanish (es): Javier Albinarrate (LU8AJA)</li>
            </ul>
            <h3>Shortwave Schedules</h3> <p>The shortwave schedules on the SWL page are based on information provided by
            the HFCC at  <a className="text-primary text-decoration-underline px-1" href="http://www.hfcc.org/data/">http://www.hfcc.org/data/</a>. </p> <h3>Open Source
            Tools</h3> <p>This site uses uses a number of open source tools for which I'm very grateful to the
            following; </p>
            <ul>
                <li> <a className="text-primary text-decoration-underline px-1" href="http://flask.pocoo.org/" target="_blank">Flask</a></li>
                <li> <a className="text-primary text-decoration-underline px-1" href="http://getbootstrap.com/" target="_blank">Bootstrap 4</a></li>
                <li> <a className="text-primary text-decoration-underline px-1" href="https://datatables.net/" target="_blank">DataTables</a> table plug-in for jQuery</li>
                <li>Font Awesome by Dave Gandy  <a className="text-primary text-decoration-underline px-1" href="http://fontawesome.io" target="_blank">http://fontawesome.io</a>
                </li>
                <li>The  <a className="text-primary text-decoration-underline px-1" href="https://matplotlib.org">Matplotlib</a> plotting library</li>
                <li>The  <a className="text-primary text-decoration-underline px-1" href="https://plot.ly/javascript/">Plotly</a> javascript plotting library</li>
                <li>Tempus Dominus Bootstrap 4 Datetime Picker  <a className="text-primary text-decoration-underline px-1" href="https://github.com/tempusdominus/bootstrap-4"
                                                                  target="_blank">https://github.com/tempusdominus/bootstrap-4</a>
                </li>
                <li> <a className="text-primary text-decoration-underline px-1" href="https://github.com/Bttstrp/bootstrap-switch" target="_blank">Bootstrap Switch</a></li>
                <li>Rossen Georgiev's  <a className="text-primary text-decoration-underline px-1" href="https://github.com/rossengeorgiev/nite-overlay"
                                         target="_blank">nite-overlay</a></li>
                <li>Hamid FzM's  <a className="text-primary text-decoration-underline px-1" href="https://github.com/hamidfzm/Flask-HTMLmin" target="_blank">Minifyer for
                    Flask</a></li>
                <li>Goutham Balaraman's  <a className="text-primary text-decoration-underline px-1" href="https://github.com/gouthambs/Flask-Blogging" target="_blank">Flask-Blogging
                    extension</a></li>
                <li> <a className="text-primary text-decoration-underline px-1" href="http://justgage.com/" target="_blank">JustGage</a> for the gauges used on the space weather
                    page.
                </li>
            </ul>
        </section>
    );
}

export default About;
