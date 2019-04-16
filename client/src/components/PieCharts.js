import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = [
'#0088FE',
'#00C49F',
'#FFBB28',
'#FF8042',
'#FA8072',
'#7B68EE',
'#40E0D0',
'#B22222',
'#66CDAA',
'#FFF8DC',
'#2F4F4F',
'#ADD8E6',
'#F8F8FF',
'#F08080'
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Example extends PureComponent {
  render() {
    return (
      <PieChart width={565} height={170}>
        <Pie
          data={this.props.data}
          cx={270}
          cy={80}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={75}
          fill="#8884d8"
          dataKey="value"
        >
          {this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
      </PieChart>
    );
  }
}

export default Example
