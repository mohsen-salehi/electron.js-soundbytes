import React from 'react'

function ManMadeNoise() {
  return (

    <div className='col-5 d-flex align-items-center'>
      <label className='col-3' htmlFor="sys_ssn">
       Man Made Noise
      </label>
      <select class="form-select" id="sys_ssn" name="sys_ssn">
        <option selected="" value="ssn_sc">Standard Curves</option>
        <option value="ssn_sc_k">Standard Curves (Kalman)</option>
        <option value="ssn_cm">Combined Method</option>
        <option value="ssn_cm_k">Combined Method (Kalman)</option>
        <option value="ssn_ml">McNish &amp; Lincoln</option>
        <option value="ssn_ml_k">McNish &amp; Lincoln (Kalman)</option>
      </select>
    </div>
  )
}

export default ManMadeNoise