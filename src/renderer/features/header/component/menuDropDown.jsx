import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <li
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="text-header cursor-pointer"
            >
                Help
                <KeyboardArrowDownIcon />
            </li>
            <Menu
                className="p-5 overflow-hidden mt-3 rounded-4 "
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>
                    <Link to="/proppy/help/manual" className="h6 pe-5 my-1">Manual</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/proppy/help/ssn-data" className="h6 pe-5 my-1">SSN Data</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/proppy/help/privacy" className="h6 pe-5 my-1">Privacy</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/proppy/help/about" className="h6 pe-5 my-1">About</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
