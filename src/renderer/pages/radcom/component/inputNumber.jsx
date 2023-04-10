import React from 'react';
import {TextField} from "@mui/material";

function InputNumber({text}) {
    return (
        <>
            <TextField
                sx={{minWidth : 350 , margin : 1 }}
                id="standard-number"
                label={text}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
        </>
    );
}

export default InputNumber;