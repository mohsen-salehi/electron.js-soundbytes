import React from 'react';

function Resolution() {
    return (
        <div className='col-12 d-flex align-items-center'>
            <label className='col-3' htmlFor="sys_ssn">
                Resolution
            </label>
            <select className="form-select" id="sys_resolution" name="sys_resolution">
                <option value="15.0">Low</option>
                <option value="10.0">Medium</option>
                <option value="5.0">High</option>
            </select>
        </div>
    );
}

export default Resolution;