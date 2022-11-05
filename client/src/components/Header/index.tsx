import React from "react";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
                    <Tab label="Home" value='/home' />
                    <Tab label="Dashboard" value='/dashboard' />
                    {/*<Tab label="Item Three" />*/}
                </Tabs>
            </Box>
        </>
    )
}

export default Header