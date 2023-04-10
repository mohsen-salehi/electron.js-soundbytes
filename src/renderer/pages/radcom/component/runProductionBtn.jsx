import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Button from "@mui/material/Button";
function RunProductionBtn() {
    return (
        <div className="col-12 my-3 d-flex justify-content-center align-content-center">
            <Button variant="contained">
                Run production
                <AutorenewIcon />
            </Button>
        </div>
    );
}

export default RunProductionBtn;