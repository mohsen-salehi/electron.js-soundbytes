import React from 'react';
import TitleComponent from "../beacon/component/titleComponent.jsx";
import Maps from "../../features/maps.jsx";
import ButtonActions from "../beacon/component/buttonActions.jsx";
import System from "../beacon/component/system.jsx";
import RxSite from "../beacon/component/rxSite.jsx";
import Content from "./component/content.jsx";

function Beacon() {
    return (
        <section className="col-12  d-flex flex-wrap align-items-start">
            <TitleComponent/>
            <Maps/>
            <ButtonActions />
            <Content />
            <System />
            <RxSite />
        </section>
    );
}

export default Beacon;