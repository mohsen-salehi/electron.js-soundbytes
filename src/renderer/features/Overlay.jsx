import React from 'react';

function Overlay() {
    return (
        <div className='col-5 d-flex align-items-center'>
            <label className='col-3' htmlFor="sys_ssn">
                Overlay
            </label>
            <select className="form-select" id="plot_type" name="plot_type">
                <option value="none">None</option>
                <option value="BCR">Basic Circuit Reliability</option>
                <option value="SNR">Signal to Noise Ratio</option>
                <option value="PR">Signal Strength</option>
            </select>
        </div>
    );
}

export default Overlay;