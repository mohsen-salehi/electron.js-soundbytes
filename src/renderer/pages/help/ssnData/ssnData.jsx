import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import ContentComponent from "./component/contentComponent.jsx";

function SsnData() {
    return (
        <section className="col-12  d-flex flex-wrap align-items-start">
            <TitleComponent />
            <ContentComponent />
        </section>
    );
}

export default SsnData;