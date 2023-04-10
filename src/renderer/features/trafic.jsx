import React from 'react'

function Trafic() {
  return (
    <div className='col-5 d-flex align-items-center'>
            <label className='col-3' htmlFor="sys_ssn">
                Trafic 
            </label>
        <select className="form-select my-4" id="sys_traffic" name="sys_traffic">
                <option value="USER_DEFINED">User Defined</option>
                <option selected="" value="WSPR">WSPR (BW=2500Hz / SNR=-29dB)</option>
                <option value="FT8">FT8 (BW=50Hz / SNR=-3dB)</option>
                <option value="CW">CW (BW=500Hz / SNR=0dB)</option>
                <option value="SSB_6">SSB (Usable) (BW=3000Hz / SNR=6dB)</option>
                <option value="SSB_15">SSB (Marginal) (BW=3000Hz / SNR=15dB)</option>
                <option value="SSB_33">SSB (Commercial) (BW=3000Hz / SNR=33dB)</option>
                <option value="SWBC_FAIR">SWBC (Fair) (BW=5000Hz / SNR=36dB)</option>
                <option value="SWBC_GOOD">SWBC (Good) (BW=5000Hz / SNR=48dB)</option>
                <option value="STRENGTH_1">Voice(1)/600bps Data (BW=3000Hz / SNR=15dB)</option>
                <option value="STRENGTH_3">Voice(3)/1200bps Data (BW=3000Hz / SNR=17dB)</option>
                <option value="STRENGTH_5">Voice(5)/2400bps Data (BW=3000Hz / SNR=19dB)</option>
                <option value="BPS_48">4800bps MIL-110B Data (BW=3000Hz / SNR=22dB)</option>
                <option value="BPS_96">9600bps MIL-110B Data (BW=3000Hz / SNR=33dB)</option>
        </select>
    </div>
  )
}

export default Trafic