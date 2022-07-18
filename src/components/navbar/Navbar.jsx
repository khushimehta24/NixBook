import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Login from '../login/Login';
import { CardMedia } from '@mui/material';
import img3 from '../images/img3.png'

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const logo = {
    width: '120px',
    height: 'auto',
    objectFit: 'contain',

}

export default function ElevateAppBar(props) {
    return (
        <>
            <ElevationScroll {...props} >
                <AppBar sx={{ backgroundColor: 'transparent' }}>
                    <Toolbar>
                        <CardMedia component="img" image={img3} sx={logo} />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

        </>
    );
}
