import React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import AddLocationIcon from '@mui/icons-material/AddLocation';
function Locator({text}) {
    return (
        <div className="col-12 p-0 py-2 d-flex justify-content-center">
            <TextField style={{width : "55%"}} id="outlined-basic" label={text} variant="outlined" />
            <Button variant="contained" >
              <AddLocationIcon />
            </Button>
        </div>
    );
}

export default Locator;