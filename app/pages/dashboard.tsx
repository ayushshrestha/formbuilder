"use client"

import React, { useState } from "react";
import { FilterListOutlined, ListAlt, Percent } from '@mui/icons-material';
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
          <p>Hello Ayush, Welcome to PMS</p>
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
        <Tooltip title='Download Reports'>
          <Button
            variant="contained"
            color="primary"
            className="bg-slate-500"
           > 
            <ListAlt
              className="me-2"
              fontSize='20'
            /> Reports</Button>
          </Tooltip>
        </div>
      </div>
    
      <div className="grid grid-cols-4 gap-4 mt-7">

        <div className="bg-green-100 ring-green-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-green-700">
          <h5 className='text-xs'>Total Investment</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-300'> +3.5%</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-green-100 ring-green-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-green-700">
          <h5 className='text-xs'>Current Investment</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-300'> +3.5%</div>
            </div>
            <div className="">
              <FilterListOutlined />
            </div>
          </div>
        </div>

        <div className="bg-red-100 ring-red-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-red-700">
          <h5 className='text-xs'>Daily Return (Rs.)</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-300'> +3.5%</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-red-100 ring-red-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-red-700">
          <h5 className='text-xs'>Realised Return</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-300'> +3.5%</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 ring-blue-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-blue-700">
          <h5 className='text-xs'>Unrealised Return</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-300'>+27.14 %</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 ring-blue-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-blue-700">
          <h5 className='text-xs'>Overall Return</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-300'>+27.14 %</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 ring-gray-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-gray-700">
          <h5 className='text-xs'>Net Worth</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-300'> +3.5%</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 ring-gray-200/60 ring-1 rounded-md p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] duration-700 ease transition hover:drop-shadow-none text-gray-700">
          <h5 className='text-xs'>Total Kitta</h5>
          <div className="flex items-center justify-between gap-2">
            <div className=''>
              <h3 className='text-2xl text-primary-500 font-bold mb-1'>Rs. 1400</h3>
              <div className='inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-300'> +3.5%</div>
            </div>
            <div className="">
              <Percent />
            </div>
          </div>
        </div>

        
      </div>

      <div className="grid grid-cols-2 gap-4">

        



        <div className="my-5">
          

          <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-2 pl-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">Script</th>
                    <th className="border-b dark:border-slate-600 font-medium p-2 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">Type</th>
                    <th className="border-b dark:border-slate-600 font-medium p-2 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">Qty</th>
                    <th className="border-b dark:border-slate-600 font-medium p-2 pr-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">Nabil</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">Secondary</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">1000</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-2 pr-8 text-slate-500 dark:text-slate-400">650</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>


      
    </div>
  )
}
