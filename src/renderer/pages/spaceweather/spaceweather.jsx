import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import Chart from "./component/chart.jsx";
import Notification from "./component/notification.jsx";
import Resources from "./component/resources.jsx";

function Spaceweather() {
    return (
        <section className="col-12">
            <TitleComponent/>
            <Chart />
            <Notification />
            <Resources />
        </section>
    );
}

export default Spaceweather;