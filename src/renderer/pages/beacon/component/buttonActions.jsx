import React from "react";

import SelectOption from "../../../features/selectOption";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";


function buttonActions() {
    return (<div className="col-12 my-3 d-flex justify-content-center align-items-center">

            <div className="pX-1 border mx-1  rounded-2">
                <label className="p-2">Night / Day</label>
                <input type="checkbox" name="" id=""/>
            </div>
            <Button  variant="contained">
                Run production
                <AutorenewIcon/>
            </Button>
        </div>);
}

export default buttonActions;
