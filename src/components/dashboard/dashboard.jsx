import { CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import img4 from '../images/img4.jpg'
import AppBar from '../navbar/Appbar'
import DateSearchBox from './DateSearchBox'
function Dashboard() {
    return (
        <>
            <AppBar />
            <Box sx={{ padding: '20px', paddingTop: '5%' }}>
                <CardMedia component="img" image={img4} sx={{ height: { md: '75vh', sm: '60vh', xs: '40vh' }, borderRadius: '10px', position: 'relative', zIndex: '-1' }} />
                <Grid sx={{ padding: { md: '0px 15%', sd: '0px 12%', xs: '0px' } }}>
                    <div data-aos="fade-up">
                        <Box sx={{ width: '100%', backgroundColor: 'white', marginTop: { md: '-50px', sd: '-50px', xs: '20px' }, zIndex: '10000', borderRadius: '10px', boxShadow: '0px 4px 17px 0px #6363632B', padding: '2%' }}>
                            <DateSearchBox />
                        </Box>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard