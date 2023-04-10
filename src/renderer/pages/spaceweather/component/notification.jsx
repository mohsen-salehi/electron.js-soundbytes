import React from 'react';

function Notification() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-center flex-wrap">
            <div className="col-12 alert  bg-warning">
                Space weather for the past 24 hours has been moderate. Geomagnetic storms reaching the G1 level occurred. Radio blackouts reaching the R2 level occurred.
            </div>
            <h3 className="col-12 py-2 ">
                Next 24 Hours
            </h3>
            <div className="col-12 alert  bg-info text-center text-white">
                No space weather storms are predicted for the next 24 hours.
            </div>
            <div className="col-12 text-end">
                Data Source: <a className="text-primary text-decoration-underline" href="https://services.swpc.noaa.gov/text/wwv.txt" target="_blank">noaa.gov.</a>
            </div>
        </section>
    );
}

export default Notification;