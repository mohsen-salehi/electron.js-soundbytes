import React from 'react';
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt.js";
import Button from "@mui/material/Button";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone.js";
import InputNumber from './inputNumber';

function RxSite() {
    return (
        <div className="col-12 my-2 overflow-hidden p-1">
            <div className="col-12 d-flex flex-wrap border rounded-2">
                <div className="col-12 d-flex align-items-center justify-content-between bg-header p-2 border-bottom">
                    <AddLocationAltIcon />
                    Rx. Site
                    <Button variant="contained" size="small">
                        <AddTwoToneIcon />
                    </Button>
                </div>
                <div className="col-12 p-3 d-flex flex-wrap justify-content-center align-content-between">
                        <InputNumber text="Latitude"/>
                        <InputNumber text="Longitude"/>
                   </div>
            </div>
        </div>
    );
}

export default RxSite;