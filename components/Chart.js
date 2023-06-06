import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
/*
const data = [
  {
    name: 'Annual Carbon Footprint',
    user: 4000,
    national: 4500,
    global: 6500,
  },
 
];*/

const BarChartExample = (props) => {
  const data = [
    {
      name: 'Annual Carbon Footprint',
      user: props.user,
      national: props.national,
      global: props.global,
    }]
    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 15,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="user" fill="#c0d8c0" />
          <Bar dataKey="global" fill="#ffabab" />
          <Bar dataKey="national" fill="#6eb5ff" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  export default BarChartExample;

