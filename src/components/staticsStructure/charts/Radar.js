import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Apple', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Xaomi', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Samsung', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'OnePlus', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Huawei', A: 85, B: 90, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <RadarChart cx={270} cy={150} outerRadius={130} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
