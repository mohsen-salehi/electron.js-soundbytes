import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import RunProductionBtn from "./component/runProductionBtn.jsx";
import System from "./component/system.jsx";
import TxSite from "./component/txSite.jsx";
import RxSite from "./component/rxSite.jsx";
import Content from "./component/content.jsx";

function Radcom() {
    return (
        <section className="col-12  d-flex flex-wrap">
            <TitleComponent/>
            <Content />
            <RunProductionBtn />
            <System />
            <TxSite />
            <RxSite />
        </section>
    );
}

export default Radcom;