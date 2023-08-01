import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectModel } from './ProjectModel'; // Import the ProjectModel

const initialState = {
  loading: false,
  project: null, // Using null to indicate that there is no project initially
  error: '',
};



// Create a thunk for adding a new project to the database
export const addProject = createAsyncThunk('project/addProject', async (projectData) => {
// TODO: update API call
  try {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    const data = await response.json();

    // Create an instance of ProjectModel with the received data
    const newProject = new ProjectModel(data.projectID, data.name, data.description);

    // Return the newly created ProjectModel instance
    return newProject;
  } catch (error) {
    throw new Error('Failed to add project to the database');
  }
});



const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProject.fulfilled, (state, action) => {
      state.loading = false;
      // Set the newly created ProjectModel instance in the state
      state.project = action.payload; 
      state.error = '';
    });
    builder.addCase(addProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default projectSlice.reducer;
