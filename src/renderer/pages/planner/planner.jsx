import React from 'react';
import TitleComponent from "../planner/component/titleComponent.jsx";
import Maps from "../../features/maps.jsx";
import ButtonActions from "../planner/component/buttonActions.jsx";
import System from "../planner/component/system.jsx";

import InformationPlan from "./component/informationPlan.jsx";
import Plot from "./component/plot.jsx";
import TxSite from "./component/txSite.jsx";

function Planner() {
    return (
        <section className="col-12  d-flex flex-wrap align-items-start">
            <TitleComponent/>
            <Maps/>
            <ButtonActions />
            <InformationPlan />
            <Plot />
            <System />
            <TxSite />
        </section>
    );
}

export default Planner;