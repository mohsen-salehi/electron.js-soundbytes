import React from 'react';

function Resources() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-center flex-wrap">
            <h3 className="py-2 col-12">
                Space Weather Resources
            </h3>
            <ul className="col-12 m-0 ">
                <li>
                    <a href="http://www.swpc.noaa.gov/noaa-scales-explanation" target="_blank" className="text-primary text-decoration-underline">Scales (NOAA)</a>
                    : An explanation of the scales used in the gauges above.
                </li>
                <li>
                    <a href="http://www.swpc.noaa.gov/impacts/hf-radio-communications" target="_blank" className="text-primary text-decoration-underline">Impacts of Space Weather (NOAA)</a>
                    : A brief summary of the impacts of space weather on radio communication.
                </li>
                <li>
                    <a href="https://www.arrl.org/files/file/Technology/tis/info/pdf/0209038.pdf" target="_blank" className="text-primary text-decoration-underline">Understanding Solar Indices (ARRL)</a>
                    : Ian Poole's excellent introduction to space weather and the various indices by which it's characterised.
                </li>
            </ul>
        </section>
    );
}

export default Resources;