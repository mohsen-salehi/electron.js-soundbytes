import React from 'react';
import Resolution from "../../../features/Resolution.jsx";

function Plot() {
    return (
        <section className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                Plot
            </div>
            <div className="col-6 p-4 d-flex justify-content-center align-items-center">
              <Resolution />
            </div>
            <div className="col-6 p-4 d-flex justify-content-center align-items-center">
                <label className="p-2">Source Text</label>
                <input type="checkbox" name="" id="" />
            </div>
        </section>
    );
}

export default Plot;