import React from 'react';
import Maps from '../../features/maps';
import TitleComponent from "./component/titleComponent.jsx";
import Plot from "./component/plot.jsx";
import System from "./component/system.jsx";
import TxSite from "./component/txSite.jsx";
import RxSite from "./component/rxSite.jsx";
import ButtonActions from "./component/buttonActions.jsx";

function Area() {


    return (
        <section className="col-12  d-flex flex-wrap">
            <TitleComponent/>
            <Maps/>
            <ButtonActions />
            <Plot/>
            <System />
            <TxSite />
            <RxSite />
        </section>
    );
}

export default Area;