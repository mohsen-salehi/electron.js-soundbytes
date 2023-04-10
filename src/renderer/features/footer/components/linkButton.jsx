import React from 'react';
import {Link} from "react-router-dom";

function LinkButton() {
    return (
        <section className="container p-0 my-4">
            <div className="col-12 row justify-content-center align-items-center p-0">
                <div className="col-5">
                    Language:
                    <Link className="text-primary" to="/">English</Link> ,

                </div>
            </div>
            <div className="col-12 row justify-content-center align-items-center p-0">
                <div className="col-5">
                    © 2016-2023 . 
                    <Link to="/" className="text-primary">James Watson (M0DNS).</Link>
                    <Link to="/" className="text-primary">Privacy Statement.</Link>
                </div>
            </div>
        </section>
    );
}

export default LinkButton;