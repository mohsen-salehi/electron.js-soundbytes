import React, {useState} from 'react';
import Maps from '../../features/maps';
import TextComponent from "./component/titleComponent.jsx";
import TitleComponent from "./component/titleComponent.jsx";
import Plot from "./component/plot.jsx";
import RunProductionBtn from "./component/runProductionBtn.jsx";
import System from "./component/system.jsx";
import TxSite from "./component/txSite.jsx";
import RxSite from "./component/rxSite.jsx";

function P2P() {


    return (
        <section className="col-12  d-flex flex-wrap">
            <TitleComponent/>
            <Maps/>
            <RunProductionBtn />
            <Plot/>
            <System />
            <TxSite />
            <RxSite />
        </section>
    );
}

export default P2P;