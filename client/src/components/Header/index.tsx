import React from "react";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [value, setValue] = React.useState('/home')
    const navigate = useNavigate()

    const handleChange = ( event: React.SyntheticEvent, newValue: any )=> {
        setValue(newValue)
        navigate(newValue)
    }

    return(
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tooltip title="Home">
                        <Tab aria-label="Home" value="/home" icon={<HomeOutlinedIcon/>} />
                    </Tooltip>
                    <Tooltip title="About">
                        <Tab aria-label="AccountCircleOutlinedIcon" value="/about" icon={<AccountCircleOutlinedIcon/>} />
                    </Tooltip>
                    <Tooltip title="Dashboard">
                        <Tab aria-label="BarChartOutlinedIcon" value="/dashboard" icon={<BarChartOutlinedIcon/>} />
                    </Tooltip>

                </Tabs>
            </Box>
        </>
    )
}

export default Header