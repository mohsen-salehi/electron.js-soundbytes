import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Box} from "@mui/material";


function SelectOption({data = null, name, widths = 350 , disabled = false}) {
   

    return (<>
        <Box sx={{minWidth: widths, margin: 1}}>
            <FormControl fullWidth disabled={disabled}>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <Select
                    disabled={disabled}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name.toString()}
                    label={name.toString()}
                    // onChange={handleChange}
                >    
                <select class="form-select" id="sys_traffic" name="sys_traffic"><option value="USER_DEFINED">User Defined</option><option selected="" value="WSPR">WSPR (BW=2500Hz / SNR=-29dB)</option><option value="FT8">FT8 (BW=50Hz / SNR=-3dB)</option><option value="CW">CW (BW=500Hz / SNR=0dB)</option><option value="SSB_6">SSB (Usable) (BW=3000Hz / SNR=6dB)</option><option value="SSB_15">SSB (Marginal) (BW=3000Hz / SNR=15dB)</option><option value="SSB_33">SSB (Commercial) (BW=3000Hz / SNR=33dB)</option><option value="SWBC_FAIR">SWBC (Fair) (BW=5000Hz / SNR=36dB)</option><option value="SWBC_GOOD">SWBC (Good) (BW=5000Hz / SNR=48dB)</option><option value="STRENGTH_1">Voice(1)/600bps Data (BW=3000Hz / SNR=15dB)</option><option value="STRENGTH_3">Voice(3)/1200bps Data (BW=3000Hz / SNR=17dB)</option><option value="STRENGTH_5">Voice(5)/2400bps Data (BW=3000Hz / SNR=19dB)</option><option value="BPS_48">4800bps MIL-110B Data (BW=3000Hz / SNR=22dB)</option><option value="BPS_96">9600bps MIL-110B Data (BW=3000Hz / SNR=33dB)</option></select>
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
        
                </Select>
            </FormControl>
        </Box>
    </>);
}

export default SelectOption;