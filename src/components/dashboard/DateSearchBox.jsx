import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import $ from "jquery";
import daterangepicker from 'daterangepicker'
import 'daterangepicker/daterangepicker.css'
import { Button, Grid, TextField } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import { HotelService } from '../../services/hotelService';

function DateSearchBox() {
    const [value, onChange] = useState(new Date());
    const [data, setData] = useState([])
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const today = new Date()

    useEffect(async () => {
        await HotelService.GetHotels()
            .then((res) => {
                setData(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log("hi", err);
            })
    }, [])

    $(function () {

        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            },
            "minDate": new Date(),
            "opens": "center"
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });

    });
    return (
        <>
            <Grid container spacing={2}>

                <Grid item md={4} sd={4} xs={12} sx={{ display: 'flex' }}>
                    <Button sx={{ backgroundColor: '#f2f2f2', color: 'black', border: '2px solid #0000001c', "&:hover": { backgroundColor: '#f2f2f2', color: 'black' }, cursor: 'context-menu' }}>
                        <ApartmentIcon />
                    </Button>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose Your City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Choose Your City"
                            onChange={handleChange}
                        >
                            {
                                data.map((hotels, index) => {
                                    if (index < 5) {
                                        return <MenuItem value={hotels.name}>{hotels.name}</MenuItem>
                                    }
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={4} sd={4} xs={12} sx={{ display: 'flex' }}>
                    <Button sx={{ backgroundColor: '#f2f2f2', color: 'black', border: '2px solid #0000001c', "&:hover": { backgroundColor: '#f2f2f2', color: 'black' }, cursor: 'context-menu' }}>
                        <DateRangeIcon />
                    </Button>
                    <TextField type="text" name="datefilter" value="" sx={{ width: '100%' }} placeholder='Select Date' />
                </Grid>
                <Grid item md={2} sd={2} xs={12} sx={{ display: 'flex' }}>
                    <Button sx={{ backgroundColor: '#f2f2f2', color: 'black', border: '2px solid #0000001c', "&:hover": { backgroundColor: '#f2f2f2', color: 'black' }, cursor: 'context-menu' }}>
                        <PeopleIcon />
                    </Button>
                    <TextField type="number" name="guests" value="" sx={{ width: '100%' }} label='Guests' />
                </Grid>
                <Grid item md={2} sd={2} xs={12} sx={{ display: 'flex' }}>
                    <Button sx={{ width: '100%', backgroundColor: '#C0A5BE', color: 'white', fontWeight: 'bold', "&:hover": { backgroundColor: '#C0A5BE', color: 'white' } }}>Search</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default DateSearchBox