import React from 'react';

function Format() {
    return (
        <div className='col-5 d-flex align-items-center'>
            <label className='col-3' >
                Format
            </label>
            <select className="form-select" id="file_type" name="file_type">
                <option value="pdf">.pdf</option>
                <option value="png">.png</option>
                <option value="svg">.svg</option>
            </select>
        </div>
    );
}

export default Format;