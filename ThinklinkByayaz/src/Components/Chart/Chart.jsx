import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../Chart/Chart.css"
const data = [
  {
    name: '',
    uv: 4000,
    pv: 0,
    amt: 2400,
  },
  {
    name: 'MON',
    uv: 5000,
    pv: 1500,
    amt: 2210,
  },
  {
    name: 'TUE',
    uv: 2000,
    pv: 2300,
    amt: 2290,
  },
  {
    name: 'WED',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'THU',
    uv: 1890,
    pv: 3000,
    amt: 2181,
  },
  {
    name: 'FRI',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'SAT',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'SUN',
    uv: 3490,
    pv: 2000,
    amt: 100,
  },
];

export default class Example extends PureComponent {
  

  render() {
    return (
        <div className='mainchart'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#3535356e" dataKey="name" />
          <YAxis stroke="#3535356e"/>
          <Tooltip />
         
          <Line  dataKey="pv"  stroke="#0e9e5b" activeDot={{ r: 5 }} />
          
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

