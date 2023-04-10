import React from 'react';
import SelectOption from "../../../features/selectOption.jsx";
import Overlay from "../../../features/Overlay.jsx";
import Format from "../../../features/Format.jsx";
import Colour from "../../../features/Colour.jsx";

function Plot() {
    return (
        <section className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                Plot
            </div>
            <div className="col-12 p-2  d-flex align-items-center">
                <Overlay />
            </div>
            <div className="col-12 p-2 d-flex align-items-center">
               <Format />
            </div>
            <div className="col-12 p-2 d-flex align-items-center">
               <Colour />
            </div>

        </section>
    );
}

export default Plot;