// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Button, Divider, TextField, Grid, Typography } from '@mui/material';
import { ProjectView } from '../projects/ProjectView';


const Project = ({ setIsSignedIn }) => {

    const [existingProjectId, setExistingProjectId] = useState('');
    const [createProject, setCreateProject] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const logout = () => {
        // localStorage.removeItem('token-info');
        setIsSignedIn(false);
        navigate('/');
    };

    const handleExistingProject = () => {
        // Create a data object containing the project id
        const data = {
            projectId: existingProjectId,
        };

        console.log("Data is ", data);

        fetch('http://127.0.0.1:5000/api/projects', {
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
                    // Project id entry successful, redirect to a hardware sets page
                    console.log('Existing Project entered!');
                    navigate('/hardwareSets');
                } else {
                    // Project id entry failed, show an error message
                    console.log('Could not find project. Please enter new project id or create new project.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleCreateProject = () => {
        // Create a data object containing the new project id, name, and description
        const data = {
            projectId: createProject,
            name: name,
            description: description,
        };

        console.log("Data is ", data);

        fetch('http://127.0.0.1:5000/api/projects', {
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

                // Handle the response from the backend
                if (data['message'] === 'Success') {
                    // New project created, redirect to hardware sets page
                    console.log('New Project created!');
                    navigate('/hardwareSets');
                } else {
                    // New project creation failed, show an error message
                    console.log('New Project could not be created.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <div style={{ display: "flex" }}>
                <Button style={{ color: "white", marginLeft: "auto" }} onClickCapture={logout}>Sign out</Button>
            </div>
            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 20%' }}>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
                            <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Existing Project</Typography>
                            <Grid style={{ padding: '5px' }}>
                                <TextField id="existing-project-id" required label="Project Id" value={existingProjectId} onChange={(e) => setExistingProjectId(e.target.value)}></TextField>
                            </Grid>
                            <Grid style={{ display: 'grid', paddingTop: '96px' }}>
                                <Button variant="contained" onClick={handleExistingProject}>View Products</Button>
                            </Grid>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px' }}>
                            <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Create New Project</Typography>
                            <Grid style={{ padding: '5px' }}>
                                <TextField id="new-project-name" required label="Name" value={name} onChange={(e) => setName(e.target.value)}></TextField>
                            </Grid>
                            <Grid style={{ padding: '5px' }}>
                                <TextField id="new-project-id" required label="New Project Id" value={createProject} onChange={(e) => setCreateProject(e.target.value)}></TextField>
                            </Grid>
                            <Grid style={{ padding: '5px' }}>
                                <TextField id="new-project-description" required label="Description" value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
                            </Grid>
                            <Grid style={{ display: 'grid', paddingTop: '30px' }}>
                                <Button variant="contained" onClick={handleCreateProject}>Create & View</Button>
                            </Grid>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Project;