"use client"

import React, { useState } from "react";
import { Save } from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip, SelectChangeEvent } from '@mui/material';


export default function dashboard() {
  const [reports, setReports] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setReports(event.target.value as string);
  };

  return (
    <div className="p-5">
      <div className="flex items-end justify-between">
        <div>
          <h2 className='text-3xl text-primary-500 font-bold'>Dashboard</h2>
          <p>Hello Ayush, Welcome to FormBuilder</p>
        </div>
        <div className="flex gap-3">

        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Report</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={reports}
            label="Report"
            onChange={handleChange}
          >
            <MenuItem value={10}>Days</MenuItem>
            <MenuItem value={20}>Week</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>
        </FormControl>
        <Tooltip title='Save'>
          <Button
            variant="contained"
            color="primary"
            className="bg-slate-500"
           > 
            <Save
              className="me-2"
              fontSize='30'
            /> save</Button>
          </Tooltip>
        </div>
      </div>
    
      <div className="border border-dashed border-black/20 rounded-md mt-7 p-5">

            asdfasdf
        
      </div>
      
    </div>
  )
}
