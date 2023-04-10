import React from 'react';
import {TextField} from "@mui/material";
import InputNumber from "./inputNumber.jsx";
import Button from "@mui/material/Button";
import SelectOption from "../../../features/selectOption.jsx";

function InformationPlan() {
    return (
        <form className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 my-2 overflow-hidden">
            <div className="col-12 d-flex justify-content-between align-items-start">
                <span className="d-flex col-1 border-end ">ID</span>
                <span className="d-flex col-5 border-end ">Name</span>
                <span className="d-flex col-2 border-end ">Latitude</span>
                <span className="d-flex col-2 border-end ">Longitude</span>
                <span className="d-flex col-1">LP</span>
            </div>
            <div className="col-12 py-2 d-flex justify-content-between align-items-center">
                <span className="d-flex col-1  ">0</span>
                <label className="d-flex col-5  p-0 m-0">
                    <TextField id="standard-basic" label="" variant="standard" className="col-10  p-0 m-0 " />
                </label>
                <span className="d-flex col-2   ">
                       <TextField
                           className="p-0 m-0 col-11"
                           id="outlined-number"
                           label=""
                           type="number"
                           InputLabelProps={{
                               shrink: true,
                           }}
                       />
                </span>
                <span className="d-flex col-2  ">
                    <TextField
                        className="p-0 m-0 col-11"
                        id="outlined-number"
                        label=""
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </span>
                <span className="d-flex justify-content-start align-items-center col-1">
                  <input type="checkbox" name="" id=""/>
                </span>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-2">
                <Button variant="contained">Load Preset</Button>
                <select className="w-25 form-select mx-2" id="preset-select">
                    <option value="worldwide">Worldwide</option>
                    <option value="europe">Europe</option>
                    <option value="radcom_1">Radcom (1)</option>
                    <option value="radcom_2">Radcom (2)</option>
                    <option value="radcom_3">Radcom (3)</option>
                </select>
                <Button variant="contained" disabled>
                    Load
                </Button>
                <Button variant="contained" className="bg-secondary">
                    save
                </Button>
                <Button variant="contained" className="bg-secondary ms-4">
                    clear
                </Button>
                <Button variant="contained" className="bg-success mx-4">
                    add Site
                </Button>
            </div>
        </form>
    );
}

export default InformationPlan;