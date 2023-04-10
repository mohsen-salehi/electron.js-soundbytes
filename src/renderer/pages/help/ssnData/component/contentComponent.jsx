import React from 'react';
import wolfjmms from "./../../../../assets/img/wolfjmms.png"
import EISNcurrent from "./../../../../assets/img/EISNcurrent.png"
import Plotly from "./plotly.jsx";
function ContentComponent() {
    return (
        <section className="col-12 d-flex justify-content-center align-content-start flex-wrap">
            <h2 className="col-12">Sun Spot Number (SSN)</h2>
            <p className="col-12 m-0 ">Determination of ionospheric characteristics related to HF propagation requires knowledge of the prevailing levels of solar activity (<a className="px-1 text-primary text-decoration-underline" href="#itu1239"><cite>ITU-R P.1239-3, 2012</cite></a>). The Sunspot Number (SSN), quantifying of the number of dark spots visible on the Sun’s surface, has historically served as the primary proxy of solar activity (<a className="px-1 text-primary text-decoration-underline" href="#clette2015"><cite>Clette et al., 2015</cite></a>). Records of SSNs date back over 400 years, providing a valuable insight into the sun's quasi periodic 11-year cycle of activity. Superimposed onto this cycle are shorter term variations that can result in large fluctuations in day-to-day values. </p>

            <p className="col-12 m-0 py-3"> The figure below illustrates how daily values (yellow) may be averaged over month (blue) and monthly smoothed (12-month) (red) periods, eliminating complex short term variations to yield a more predictable indicator of solar activity. The preferred ionospheric metric when determining the critical frequencies of the various layers and the MUF factor M(3000)F2 is a 12-month running mean sunspot number, <em>R</em><sub>12</sub> (<a className="px-1 text-primary text-decoration-underline" href="#itu1239"><cite>ITU-R P.1239-3, 2012</cite></a>). <em>R</em><sub>12</sub> values are a function of sunspot values extending at least six months either side of the month of interest (<a className="px-1 text-primary text-decoration-underline" href="#itu371"><cite>ITU-R P.371-8, 1999</cite></a>). (Note that this has the unfortunate side effect that an <em>R</em><sub>12</sub> value for a given month ‘m’ cannot be absolutely determined until ‘m+6’ (six months later)). </p>

            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <figure><img src={wolfjmms} className="img-fluid mx-auto d-block"  alt=""/>
                        <figcaption className="text-center">Figure 1: Daily and Monthly Sunspot Number (last 13
                            years)<br /> <cite>Image Source: <a href="http://sidc.be/silso/dayssnplot" target="_blank">WDC-SILSO,
                                Royal Observatory of Belgium, Brussels</a></cite></figcaption></figure>
                </div>
            </div>

            <h2 className="col-12">SSN Values</h2>
            <p className="col-12 py-1 m-0"><a className="text-primary text-decoration-underline px-1" href="#itu371"> <cite>Recommendation ITU-R P.371-8 (1999)</cite></a> states that the SSN (<em>R</em><sub>12</sub>) values presented in the ITU's <a className="text-primary text-decoration-underline px-1"  href="#itucircular"> <cite>Circular of Basic Indices for Ionospheric Propagation</cite></a> should be used in conjunction with <a className="text-primary text-decoration-underline px-1" href="https://www.itu.int/rec/R-REC-P.533-14-201908-I/en" target="_blank"> Recommendation ITU-R P.533-14</a>, which defines ITURHFProp's underlying algorithm. Values presented in the circular are derived from the SSN (Standard Curves method) data published by <a className="text-primary text-decoration-underline px-1" href="http://sidc.be/silso/home" target="_blank">WDC-SILSO, Royal Observatory of Belgium, Brussels</a>. &nbsp;In addition to the <a className="text-primary text-decoration-underline px-1"  href="http://www.sidc.be/silso/predisc" target="_blank"> Standard Curves (SC)</a> dataset, the SIDC also publish predictions based on the <a className="text-primary text-decoration-underline px-1" href="http://www.sidc.be/silso/predicm" target="_blank"> Combined Model (CM)</a> and the <a className="text-primary text-decoration-underline px-1" href="http://www.sidc.be/silso/prediml" target="_blank"> McNish &amp; Lincoln (M&amp;L)</a> method. </p>

            <dl className="row mt-3">
                <dt className="col-sm-3">Standard Curves</dt>
                <dd className="col-sm-9">Based on the sunspot number with and uses mean-cycle curves derived from
                    historical data to produce predictions. The Standard curves are considered to be effective at
                    predicting the declining phase of a cycle but breaks down when approaching the minima so is not so
                    reliable at predicting the rise of the successive cycle.
                </dd>
                <dt className="col-sm-3">Combined Method</dt>
                <dd className="col-sm-9"><p>The combined method makes predictions based on the sunspot number, comparing
                    all cycles recorded since 1749, combined with an assessment using the the geomagnetic index (aa).
                    The geomagnetic index, 'aa', is an indicator of the level of future solar activity. For this reason,
                    the Combined Model may produce superior results when passing the Solar minimum.</p></dd>
                <dt className="col-sm-3">McNish &amp; Lincoln</dt>
                <dd className="col-sm-9"><p>The McNish &amp; Lincoln method is the most established of the three models,
                    dating back to 1949, and is of interest for largely historical reasons. As with the Standard Curves
                    method, only the sunspot is considered as an input which in this case is compared to historical data
                    for the period 1849 to 1975 (cycles 9 to 20). This provides fair predictive abilities for much of
                    the cycle but, in common with the Standard Curves method, is less effective at the minima (±1.5
                    year).</p></dd>
            </dl>


            <div><p><a className="text-primary text-decoration-underline px-1"  href="#podladchikova2012"><cite>Podladchikova and Van der Linden (2012)</cite></a> demonstrate
                how the accuracy of predictions may be improved by the application of a Kalman filter, yielding a total
                of six sets of predicted SSN data.</p> <p>The above suggests that while the Standard Curves model
                provides a reliable source of data for much of the solar cycle, users may wish to experiment with other
                models, particularly the Combined Model at cycle's minima. Proppy supports selection from all six of the
                datasets provided by the SIDC.</p> <p>The (predicted) <em>R</em><sub>12</sub> values for April 2023
                are; <br/></p>
                <div className="d-flex">
                    <table className="table table-responsive table-striped table-hover table-sm mx-auto">
                        <thead className="thead-default">
                        <tr>
                            <th>Model</th>
                            <th className="text-right">Standard</th>
                            <th className="text-right">Kalman Filter</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Standard Curves</td>
                            <td className="font-weight-bold text-right">125.3</td>
                            <td className="text-right">121.0</td>
                        </tr>
                        <tr>
                            <td>Combined Model</td>
                            <td className="text-right">115.0</td>
                            <td className="text-right">117.0</td>
                        </tr>
                        <tr>
                            <td>McNish &amp; Lincoln</td>
                            <td className="text-right">115.8</td>
                            <td className="text-right">117.0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="col-12 py-3 m-0 ">It should be noted that selection of the SSN Source parameter only has an effect on <span
                className="font-italic">predicted values</span>, i.e. values extending from six months ago. </p>

            <Plotly/>

            <div className="row col-12 mb-3">
                <div className="col-form-label"> SSN Data Source:</div>
                <div className="col-md-4"><select className="form-select" id="ssn-table-select">
                    <option value="ssn_sc">Standard Curves</option>
                    <option value="ssn_sc_k">Standard Curves (Kalman Filter)</option>
                    <option value="ssn_cm">Combined Method</option>
                    <option value="ssn_cm_k">Combined Method (Kalman Filter)</option>
                    <option value="ssn_ml">McNish &amp; Lincoln</option>
                    <option value="ssn_ml_k">McNish &amp; Lincoln (Kalman Filter)</option>
                </select></div>
            </div>

            <div className="col-12" id="ssn-table">
                <table className="table table-responsive-md table-striped table-hover table-sm">
                    <thead className="thead-default">
                    <tr>
                        <th>Year</th>
                        <th className="text-right">Jan</th>
                        <th className="text-right">Feb</th>
                        <th className="text-right">Mar</th>
                        <th className="text-right">Apr</th>
                        <th className="text-right">May</th>
                        <th className="text-right">Jun</th>
                        <th className="text-right">Jul</th>
                        <th className="text-right">Aug</th>
                        <th className="text-right">Sep</th>
                        <th className="text-right">Oct</th>
                        <th className="text-right">Nov</th>
                        <th className="text-right">Dec</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2005</td>
                        <td className="text-right">54.5</td>
                        <td className="text-right">53.2</td>
                        <td className="text-right">52.3</td>
                        <td className="text-right">49.3</td>
                        <td className="text-right">45.0</td>
                        <td className="text-right">44.5</td>
                        <td className="text-right">44.6</td>
                        <td className="text-right">41.9</td>
                        <td className="text-right">39.4</td>
                        <td className="text-right">38.9</td>
                        <td className="text-right">38.4</td>
                        <td className="text-right">36.0</td>
                    </tr>
                    <tr>
                        <td>2006</td>
                        <td className="text-right">33.0</td>
                        <td className="text-right">29.7</td>
                        <td className="text-right">27.4</td>
                        <td className="text-right">27.0</td>
                        <td className="text-right">27.4</td>
                        <td className="text-right">26.2</td>
                        <td className="text-right">25.0</td>
                        <td className="text-right">25.9</td>
                        <td className="text-right">26.0</td>
                        <td className="text-right">23.7</td>
                        <td className="text-right">21.1</td>
                        <td className="text-right">20.2</td>
                    </tr>
                    <tr>
                        <td>2007</td>
                        <td className="text-right">19.8</td>
                        <td className="text-right">19.0</td>
                        <td className="text-right">17.7</td>
                        <td className="text-right">16.4</td>
                        <td className="text-right">14.4</td>
                        <td className="text-right">12.8</td>
                        <td className="text-right">11.6</td>
                        <td className="text-right">9.9</td>
                        <td className="text-right">9.6</td>
                        <td className="text-right">9.9</td>
                        <td className="text-right">9.2</td>
                        <td className="text-right">7.9</td>
                    </tr>
                    <tr>
                        <td>2008</td>
                        <td className="text-right">6.6</td>
                        <td className="text-right">5.6</td>
                        <td className="text-right">5.1</td>
                        <td className="text-right">5.1</td>
                        <td className="text-right">5.4</td>
                        <td className="text-right">4.8</td>
                        <td className="text-right">4.0</td>
                        <td className="text-right">3.8</td>
                        <td className="text-right">3.2</td>
                        <td className="text-right">2.4</td>
                        <td className="text-right">2.3</td>
                        <td className="text-right">2.2</td>
                    </tr>
                    <tr>
                        <td>2009</td>
                        <td className="text-right">2.5</td>
                        <td className="text-right">2.7</td>
                        <td className="text-right">2.9</td>
                        <td className="text-right">3.3</td>
                        <td className="text-right">3.5</td>
                        <td className="text-right">4.1</td>
                        <td className="text-right">5.5</td>
                        <td className="text-right">7.4</td>
                        <td className="text-right">9.5</td>
                        <td className="text-right">10.9</td>
                        <td className="text-right">11.7</td>
                        <td className="text-right">12.7</td>
                    </tr>
                    <tr>
                        <td>2010</td>
                        <td className="text-right">14.0</td>
                        <td className="text-right">16.1</td>
                        <td className="text-right">18.5</td>
                        <td className="text-right">20.8</td>
                        <td className="text-right">23.1</td>
                        <td className="text-right">24.6</td>
                        <td className="text-right">25.2</td>
                        <td className="text-right">26.4</td>
                        <td className="text-right">29.5</td>
                        <td className="text-right">34.5</td>
                        <td className="text-right">39.1</td>
                        <td className="text-right">42.5</td>
                    </tr>
                    <tr>
                        <td>2011</td>
                        <td className="text-right">45.7</td>
                        <td className="text-right">48.8</td>
                        <td className="text-right">53.8</td>
                        <td className="text-right">61.1</td>
                        <td className="text-right">69.3</td>
                        <td className="text-right">77.2</td>
                        <td className="text-right">83.6</td>
                        <td className="text-right">86.3</td>
                        <td className="text-right">86.6</td>
                        <td className="text-right">87.4</td>
                        <td className="text-right">89.4</td>
                        <td className="text-right">92.5</td>
                    </tr>
                    <tr>
                        <td>2012</td>
                        <td className="text-right">95.5</td>
                        <td className="text-right">98.1</td>
                        <td className="text-right">98.3</td>
                        <td className="text-right">95.1</td>
                        <td className="text-right">90.9</td>
                        <td className="text-right">86.6</td>
                        <td className="text-right">84.5</td>
                        <td className="text-right">85.1</td>
                        <td className="text-right">85.3</td>
                        <td className="text-right">85.8</td>
                        <td className="text-right">87.7</td>
                        <td className="text-right">88.1</td>
                    </tr>
                    <tr>
                        <td>2013</td>
                        <td className="text-right">86.8</td>
                        <td className="text-right">86.1</td>
                        <td className="text-right">84.4</td>
                        <td className="text-right">84.3</td>
                        <td className="text-right">87.0</td>
                        <td className="text-right">90.9</td>
                        <td className="text-right">94.6</td>
                        <td className="text-right">99.0</td>
                        <td className="text-right">104.6</td>
                        <td className="text-right">107.0</td>
                        <td className="text-right">106.9</td>
                        <td className="text-right">107.6</td>
                    </tr>
                    <tr>
                        <td>2014</td>
                        <td className="text-right">109.3</td>
                        <td className="text-right">110.5</td>
                        <td className="text-right">114.3</td>
                        <td className="text-right">116.4</td>
                        <td className="text-right">115.0</td>
                        <td className="text-right">114.1</td>
                        <td className="text-right">112.6</td>
                        <td className="text-right">108.3</td>
                        <td className="text-right">101.9</td>
                        <td className="text-right">97.3</td>
                        <td className="text-right">94.7</td>
                        <td className="text-right">92.2</td>
                    </tr>
                    <tr>
                        <td>2015</td>
                        <td className="text-right">89.3</td>
                        <td className="text-right">86.1</td>
                        <td className="text-right">82.1</td>
                        <td className="text-right">78.9</td>
                        <td className="text-right">76.1</td>
                        <td className="text-right">72.1</td>
                        <td className="text-right">68.3</td>
                        <td className="text-right">66.4</td>
                        <td className="text-right">65.9</td>
                        <td className="text-right">64.3</td>
                        <td className="text-right">61.2</td>
                        <td className="text-right">57.8</td>
                    </tr>
                    <tr>
                        <td>2016</td>
                        <td className="text-right">54.4</td>
                        <td className="text-right">52.5</td>
                        <td className="text-right">50.4</td>
                        <td className="text-right">47.8</td>
                        <td className="text-right">44.8</td>
                        <td className="text-right">41.5</td>
                        <td className="text-right">38.5</td>
                        <td className="text-right">36.0</td>
                        <td className="text-right">33.2</td>
                        <td className="text-right">31.5</td>
                        <td className="text-right">29.9</td>
                        <td className="text-right">28.5</td>
                    </tr>
                    <tr>
                        <td>2017</td>
                        <td className="text-right">27.8</td>
                        <td className="text-right">26.5</td>
                        <td className="text-right">25.7</td>
                        <td className="text-right">24.8</td>
                        <td className="text-right">23.3</td>
                        <td className="text-right">22.2</td>
                        <td className="text-right">21.0</td>
                        <td className="text-right">19.6</td>
                        <td className="text-right">18.3</td>
                        <td className="text-right">16.7</td>
                        <td className="text-right">15.4</td>
                        <td className="text-right">15.1</td>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td className="text-right">14.2</td>
                        <td className="text-right">12.6</td>
                        <td className="text-right">9.9</td>
                        <td className="text-right">7.8</td>
                        <td className="text-right">7.5</td>
                        <td className="text-right">7.2</td>
                        <td className="text-right">7.0</td>
                        <td className="text-right">6.7</td>
                        <td className="text-right">6.5</td>
                        <td className="text-right">6.8</td>
                        <td className="text-right">6.7</td>
                        <td className="text-right">6.0</td>
                    </tr>
                    <tr>
                        <td>2019</td>
                        <td className="text-right">5.4</td>
                        <td className="text-right">5.0</td>
                        <td className="text-right">4.6</td>
                        <td className="text-right">4.3</td>
                        <td className="text-right">3.9</td>
                        <td className="text-right">3.7</td>
                        <td className="text-right">3.5</td>
                        <td className="text-right">3.4</td>
                        <td className="text-right">3.1</td>
                        <td className="text-right">2.6</td>
                        <td className="text-right">2.0</td>
                        <td className="text-right">1.8</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td className="text-right">2.2</td>
                        <td className="text-right">2.7</td>
                        <td className="text-right">3.0</td>
                        <td className="text-right">3.6</td>
                        <td className="text-right">5.6</td>
                        <td className="text-right">7.9</td>
                        <td className="text-right">9.0</td>
                        <td className="text-right">9.5</td>
                        <td className="text-right">10.5</td>
                        <td className="text-right">11.9</td>
                        <td className="text-right">13.6</td>
                        <td className="text-right">15.3</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td className="text-right">17.3</td>
                        <td className="text-right">19.0</td>
                        <td className="text-right">21.7</td>
                        <td className="text-right">24.8</td>
                        <td className="text-right">25.8</td>
                        <td className="text-right">27.6</td>
                        <td className="text-right">31.4</td>
                        <td className="text-right">35.4</td>
                        <td className="text-right">40.2</td>
                        <td className="text-right">45.2</td>
                        <td className="text-right">50.8</td>
                        <td className="text-right">55.9</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td className="text-right">60.1</td>
                        <td className="text-right">64.7</td>
                        <td className="text-right">68.7</td>
                        <td className="text-right">73.0</td>
                        <td className="text-right">77.2</td>
                        <td className="text-right">80.9</td>
                        <td className="text-right">86.5</td>
                        <td className="text-right">92.3</td>
                        <td className="text-right">96.2</td>
                        <td className="text-right font-italic">98.2</td>
                        <td className="text-right font-italic">102.3</td>
                        <td className="text-right font-italic">108.3</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td className="text-right font-italic">112.2</td>
                        <td className="text-right font-italic">116.3</td>
                        <td className="text-right font-italic">120.6</td>
                        <td className="text-right font-italic fw-bold">125.3</td>
                        <td className="text-right font-italic">130.4</td>
                        <td className="text-right font-italic">135.7</td>
                        <td className="text-right font-italic">141.1</td>
                        <td className="text-right font-italic">146.5</td>
                        <td className="text-right font-italic">151.8</td>
                        <td className="text-right font-italic">157.7</td>
                        <td className="text-right font-italic">164.3</td>
                        <td className="text-right font-italic">171.1</td>
                    </tr>
                    <tr>
                        <td>2024</td>
                        <td className="text-right font-italic">177.2</td>
                        <td className="text-right font-italic">182.0</td>
                        <td className="text-right font-italic">185.5</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                        <td className="text-right font-italic">-</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="row d-flex justify-content-center"><cite id="ssn-table-cite" className="text-center"> Table
                1: SSN Data Values <br/> Data Source: <a className="text-primary text-decoration-underline px-1"  href="http://www.sidc.be/silso/forecasts"
                                                        target="_blank"> WDC-SILSO, Royal Observatory of Belgium,
                    Brussels</a> <br/><span className="small">Retrieved: Sat, 01 Apr 2023 14:00:02 GMT</span></cite>
                <div className="clearfix"></div>
            </div>

            <h2 className="col-12 ">Daily Values</h2>
            <p>While smoothed values are required to calculate critical frequencies of the various layers and the MUF factor, it is useful to remember that the actual value on any given day will almost certainly be different to the smoothed monthly value. Figure 3 below indicates the current daily Estimated International Sunspot Number (EISN) obtained by a simple average over available sunspot counts. This data is not intended for long term use but may provide some insight into the stability of solar conditions. </p>
            <div className="row">
                <div className="col-md-12">
                    <figure><img src={EISNcurrent} className="img-fluid mx-auto d-block"/>
                        <figcaption className="text-center">Figure 3: Estimated International Sunspot Number (EISN)<br/>
                            <cite>Image Source: <a  className="text-primary text-decoration-underline px-1"  href="http://sidc.be/silso/eisnplot" target="_blank">WDC-SILSO, Royal
                                Observatory of Belgium, Brussels</a></cite></figcaption></figure>
                </div>
            </div>

            <h2 className="col-12">References</h2>
            <ul> <li>Clette, F., Svalgaard, L., Vaquero, J.M. and Cliver, E.W., (2015), Revisiting the sunspot number, <cite>The Solar Activity Cycle</cite> (pp. 35-103). Springer New York. Available from: <a className="text-primary text-decoration-underline px-1"  href="http://arxiv.org/pdf/1407.3231" target="_blank">http://arxiv.org/pdf/1407.3231</a></li> <li>ITU, Circular of Basic Indices for Ionospheric Propagation, <a className="text-primary text-decoration-underline px-1"  href="https://www.itu.int/en/ITU-R/study-groups/rsg3/Pages/rsg3-indices.aspx" target="_blank"><cite>Latest</cite></a> </li> <li>ITU-R P.371-8 (1999), Choice of Indices for Long-Term Ionospheric Predictions, <a className="text-primary text-decoration-underline px-1"  href="https://www.itu.int/rec/R-REC-P.371/en" target="_blank"><cite>Recommendation ITU-R P.371-8</cite></a> </li> <li>ITU-R P.1239-3(2012), ITU-R Reference Ionospheric Characteristics, <a className="text-primary text-decoration-underline px-1"  href="https://www.itu.int/rec/R-REC-P.1239/en" target="_blank"><cite>Recommendation ITU-R P.1239-3</cite></a> </li> <li>Podladchikova, T. and Van der Linden, R.(2012), A Kalman Filter Technique for Improving Medium-Term Predictions of the Sunspot Number Available from: <a className="text-primary text-decoration-underline px-1"  href="https://www.researchgate.net/profile/R_Linden/publication/255910956_A_Kalman_Filter_Technique_for_Improving_Medium-Term_Predictions_of_the_Sunspot_Number/links/56e6bcae08ae68afa113a7e6.pdf" target="_blank">Researchgate</a> Accesed 30th October 2017. </li> </ul>
        </section>
    );
}

export default ContentComponent;