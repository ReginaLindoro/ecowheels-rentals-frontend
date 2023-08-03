// Hardware.js
import * as React from 'react';
import Button from '@mui/material/Button';
import '../../css/App.css';
import { useState } from 'react';
import bike1 from "../../images/bike1.jpg"
import scooter2 from "../../images/scooter2.jpg"
import { useNavigate } from 'react-router-dom'
import { HardwareView } from '../hardwareSets/HardwareView';
import { Card, CardContent, Divider, TextField, Grid, Typography, Select, MenuItem, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material"

const Hardware = () => {
    // Hardware react variables 
    const [inputValue, setInputValue] = useState('');
    const [selection, setSelection] = useState('');
    const navigate = useNavigate();
    const hwsets = ['EcoBikes', 'EcoScooters']

    const createObject = () => {
        if (selection == 1) {
            return {
                "hardwareSet1": {
                    "quantity": parseInt(inputValue)
                },
                "hardwareSet2": {
                    "quantity": 0
                },
                "type": "checkout"
            }
        } else {
            return {
                "hardwareSet1": {
                    "quantity": 0
                },
                "hardwareSet2": {
                    "quantity": parseInt(inputValue)
                },
                "type": "checkout"
            }
        }
    }


    /*handling the checkout api connection*/
    const handleCheckOut = () => {
        // Create a data object containing the hwset1 quantity to be checked out
        const data = createObject()

        console.log("Data is ", data);

        fetch('http://127.0.0.1:5000/api/hardware', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {

                // Console log the response
                console.log('Response from the backend:', data);

                // Handle the response from the backend
                // if (data.success) { //remove
                if (data['message'] === 'Success') {
                    // Login successful, redirect to a projects page
                    alert('Checkout successful! You have checked out ' + inputValue + " " +  hwsets[selection-1]);
                    navigate('/hardwareSets');
                } else {
                    // Login failed, show an error message
                    console.log('Checkout failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }




    /*handling the checkin api connection*/
    const handleCheckIn = () => {
        // Create a data object containing the hwset2 quantity to be checked in 
        const data = createObject()
        data.type = "checkin"// Create a data object containing the hwset1 quantity to be checked out
        
        console.log("Data is ", data);

        fetch('http://127.0.0.1:5000/api/hardware', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {

                // Console log the response
                console.log('Response from the backend:', data);

                // Handle the response from the backend
                // if (data.success) { //remove
                if (data['message'] === 'Success') {
                    // Login successful, redirect to a projects page
                    alert('Checkin successful! You have checked in ' + inputValue + " " +  hwsets[selection-1]);
                    navigate('/hardwareSets');
                } else {
                    // Login failed, show an error message
                    console.log('Checkin failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    

    }



    return (
        <div className="App">
            <h1 style={{ color: "white" }}>ECO WHEELS RENTAL</h1>
            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 20%' }}>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
                            <Typography variant="h2" style={{ color: "black", display: 'flex', justifyContent: 'center' }}>EcoBikes</Typography>
                            <Grid style={{ padding: '5px' }}>
                                <img src={bike1} alt="bike" />
                            </Grid>
                            <Grid style={{ padding: '5px' }}>
                                <HardwareView setType='hwset1' />
                            </Grid>
                        </div>

                        <Divider orientation="vertical" flexItem />
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px' }}>
                            <Typography variant="h2" style={{ color: "black", display: 'flex', justifyContent: 'center' }}>EcoScooters</Typography>
                            <Grid style={{ padding: '5px' }}>
                                <img src={scooter2} alt="scooter" />
                            </Grid>
                            <Grid style={{ padding: '5px' }}>
                                <HardwareView setType='hwset2' />
                            </Grid>
                        </div>
                    </div>
                </CardContent>
            </Card>


            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 20%' }}>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
                            <InputLabel id="select-label" required label="Choose Product">Select a Product</InputLabel>
                            <Select
                                labelId="select-label"
                                id="selection"
                                value={selection}
                                onChange={(e) => setSelection(e.target.value)}
                                label="Select Product">
                                <MenuItem value={1}>EcoBikes</MenuItem>
                                <MenuItem value={2}>EcoScooters</MenuItem>
                            </Select>
                            <Grid style={{ padding: '5px' }}>
                                <TextField id="input-value" type="number" required label="Amount to Check In or Out" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></TextField>
                            </Grid>
                            <Grid style={{ display: 'flex', flexDirection: "column", paddingTop: '20px' }}>
                                <Button variant="contained" onClick={handleCheckOut}>Check Out</Button>
                            </Grid>
                            <Grid style={{ display: 'flex', flexDirection: "column", paddingTop: '20px' }}>
                                <Button variant="contained" onClick={handleCheckIn}>Check In</Button>
                            </Grid>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

};
export default Hardware;