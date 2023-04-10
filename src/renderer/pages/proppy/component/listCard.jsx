import React from 'react';
import {Link} from "react-router-dom";

function ListCard() {
    return (
        <section className="container p-0">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src="https://soundbytes.asia/proppy/static/img/area.jpg" className="img-fluid " alt=""/>
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Area</h4>
                            <p className="p-0 m-0">
                                Create interactive area predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/area">Area Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src="https://soundbytes.asia/proppy/static/img/area.jpg" className="img-fluid " alt=""/>
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Area</h4>
                            <p className="p-0 m-0">
                                Create interactive area predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/area">Area Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src="https://soundbytes.asia/proppy/static/img/area.jpg" className="img-fluid " alt=""/>
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Area</h4>
                            <p className="p-0 m-0">
                                Create interactive area predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/area">Area Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src="https://soundbytes.asia/proppy/static/img/area.jpg" className="img-fluid " alt=""/>
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Area</h4>
                            <p className="p-0 m-0">
                                Create interactive area predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/area">Area Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default ListCard;