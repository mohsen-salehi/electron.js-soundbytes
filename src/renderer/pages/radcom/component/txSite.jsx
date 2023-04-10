import React from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import InputNumber from './inputNumber';
import Locator from "./Locator.jsx";
import Antenna from "../../../features/Antenna.jsx";
function TxSite() {
    return (
            <div className="col-6 my-2 overflow-hidden p-1 ">
               <div className="col-12 flex-wrap border rounded-2">
                   <div className="col-12 d-flex align-items-center  bg-header p-2 border-bottom">
                       <AddLocationAltIcon />
                       Tx. Site
                   </div>
                   <div className="col-12 p-3 d-flex flex-wrap justify-content-center align-content-between">
                        <Locator text="Locator" />
                       <InputNumber text="Ant Gain (dBi)"/>
                       <Antenna />
                   </div>
               </div>
            </div>
    );
}

export default TxSite;