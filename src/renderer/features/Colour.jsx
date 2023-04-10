import React from 'react';

function Colour() {
    return (
        <div className='col-5 d-flex align-items-center'>
            <label className='col-3'>
                Colour
            </label>
            <select className="form-select" id="cmap" name="cmap" disabled>
                <option value="jet">Jet</option>
                <option value="gnuplot">GNU Plot</option>
                <option value="gnuplot2">GNU Plot 2</option>
                <option value="voacap">VOACAP</option>
            </select>
        </div>
    );
}

export default Colour;