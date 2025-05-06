import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ActivityChart = ({ data }) => {
  // Transformar datos si vienen como array plano
  const chartData = data.map((value, index) => ({
    name: index + 1,
    value,
  }));

  return (
    <div style={{ width: '95%', height: 100 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;