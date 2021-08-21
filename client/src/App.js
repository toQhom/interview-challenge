import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

// UI Components
import { DataGrid } from '@material-ui/data-grid';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// Images
import LexcelonLogo from './images/LexcelonLogo.png';

// Constants
const LEXCELON_GREEN = '#598d36';
const TABLE_PAGE_SIZE = 5;
const TABLE_COLUMNS = [
  { field: 'id',
    headerName: 'ID',
    width: 100,
    headerAlign: 'center'
  },
  {
    field: 'State',
    headerName: 'Name',
    width: 150,
    headerAlign: 'center'
  },
  {
    field: 'Pop',
    headerName: 'Population',
    type: 'number',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'Growth',
    headerName: 'Growth',
    width: 125,
    headerAlign: 'center',
  },
  {
    field: 'Pop2018',
    headerName: '2018 Population',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'Pop2010',
    headerName: '2010 Population',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'growthSince2010',
    headerName: 'Growth Since 2010',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'Percent',
    headerName: 'Percent',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'density',
    headerName: 'Density',
    width: 160,
    headerAlign: 'center',
  },
];

const api = axios.create({
  baseURL: '/api'
});

export default class App extends Component {

  constructor(props) {
    super(props);

    // Initialize the class component state
    this.state = {
      states: []
    };
  }

  // ComponentDidMount is called as soon as the class component has mounted
  componentDidMount() {
    // Retrieve the list of state data from the server
    api.get('/states').then((response) => {
      this.setState({ states: response.data });
    });
  }

  render() {
    return (
      <>
        {/* App Bar */}
        <AppBar position='static'>
          <Toolbar>
          </Toolbar>
        </AppBar>

        {/* Table */}
        <Typography variant='h1' style={{ fontSize: 50, textAlign: 'center', marginTop: '25px', marginBottom: '15px' }}>States</Typography>
        <div style={{ height: 400, width: '100%' }}>
          {this.state.states &&
            <DataGrid
              rows={this.state.states}
              columns={TABLE_COLUMNS}
              pageSize={TABLE_PAGE_SIZE}
              checkboxSelection
              disableSelectionOnClick
            />
          }
        </div>
      </>
    );
  }
}
