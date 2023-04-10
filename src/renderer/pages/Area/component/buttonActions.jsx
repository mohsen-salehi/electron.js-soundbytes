import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SelectOption from "../../../features/selectOption";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function buttonActions() {
    return (<div className="col-12 my-3 d-flex justify-content-center align-items-center">
            <SelectOption  name="Colour" widths={150}/>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button>BCR</Button>
                <Button>SNR</Button>
                <Button>PR</Button>
            </ButtonGroup>
            <div className="pX-1 border mx-1  rounded-2">
                <label className="p-2">Night / Day</label>
                <input type="checkbox" name="" id=""/>
            </div>
            <Button sx={{marginX : 1}} variant="contained" color="success">
                Download
                <ArrowDownwardIcon />
            </Button>

            <ButtonGroup sx={{marginX : 1}} variant="contained" aria-label="outlined primary button group">
                <Button><SkipPreviousIcon /></Button>
                <Button><PlayArrowIcon /></Button>
                <Button><SkipNextIcon /></Button>
            </ButtonGroup>
            <Button  variant="contained">
                Run production
                <AutorenewIcon/>
            </Button>
        </div>);
}

export default buttonActions;
