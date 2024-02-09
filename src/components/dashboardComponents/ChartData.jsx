import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';


// "em" in barData is for space between stacks at y-axis


const barData = [
  {name: 'Jan 1', Yoga: 3000, Meditation: 800, Aerobics: 1800, em:200, amt: 2400,},
  {name: 'Jan 2', Yoga: 3500, Meditation: 800, Aerobics: 1000, em:100, amt: 2400,},
  {name: 'Jan 3', Yoga: 800, Meditation: 500, Aerobics: 3400, em:200, amt: 2400,},
  {name: 'Jan 4', Yoga: 1400, Meditation: 1000, Aerobics: 4400, em:200, amt: 2400,},
  {name: 'Jan 5', Yoga: 800, Meditation: 1200, Aerobics: 1000, em:200, amt: 2400,},
  {name: 'Jan 6', Yoga: 1200, Meditation: 800, Aerobics: 1500, em:200, amt: 2400,},
  {name: 'Jan 7', Yoga: 1000, Meditation: 1000, Aerobics: 4400, em:200, amt: 2400,},
  {name: 'Jan 8', Yoga: 1500, Meditation: 2000, Aerobics: 1400, em:200, amt: 2400,},
  {name: 'Jan 9', Yoga: 1800, Meditation: 900, Aerobics: 500, em:200, amt: 2400,},
  {name: 'Jan 10', Yoga: 500, Meditation: 800, Aerobics: 1100, em:200, amt: 2400,},
  {name: 'Jan 12', Yoga: 500, Meditation: 1000, Aerobics: 1400, em:200, amt: 2400,},
  {name: 'Jan 13', Yoga: 1100, Meditation: 800, Aerobics: 1400, em:200, amt: 2400,},
  {name: 'Jan 14', Yoga: 800, Meditation: 500, Aerobics: 2400, em:200, amt: 2400,},
  {name: 'Jan 15', Yoga: 700, Meditation: 1000, Aerobics: 3000, em:200, amt: 2400,},
  {name: 'Jan 16', Yoga: 700, Meditation: 1200, Aerobics: 3800, em:200, amt: 2400,},
  {name: 'Jan 17', Yoga: 800, Meditation: 500, Aerobics: 2000, em:200, amt: 2400,},
  {name: 'Jan 18', Yoga: 1000, Meditation: 800, Aerobics: 2400, em:200, amt: 2400,},
];




const StackedBarChart = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: '300px',}}>
      <ResponsiveContainer width="100%" height="100%" sx={{border:'1px solid black'}}>
        <BarChart
          data={barData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  />
          <Bar dataKey="Aerobics" stackId="a" fill="#CA6B6E" radius={[8, 8, 8, 8]} barSize={10} />
          <Bar dataKey="em" stackId="a" fill="#fff" radius={[8, 8, 8, 8]} barSize={10} />
          <Bar dataKey="Yoga" stackId="a" fill="#478F96" radius={[8, 8, 8, 8]} barSize={10} />
          <Bar dataKey="em" stackId="a" fill="#fff" radius={[8, 8, 8, 8]} barSize={10} />
          <Bar dataKey="Meditation" stackId="a" fill="#D08726" radius={[8, 8, 8, 8]} barSize={10} />
        </BarChart>
    
      </ResponsiveContainer>
      </Box>
    </>
  )
}


const LineChartData = () => {



  return (
    <>
        <Box sx={{ width: '100%',}}>
      
    

    <LineChart
          height= {250}
          // width= {250}
        sx={{
        '& .MuiLineElement-root': {
            stroke: '#7F7FD5',
        },
        '& .MuiMarkElement-root': {
            fill: '#E786D7',
            stroke: 'none',
        },
      }}
      xAxis={[{ data: ['31/01', '01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02'], scaleType: 'point' }]}
      series={[
          {
              data: [1, 2, 0.5, 3, 0.5, 1.8, 2.8, 1,],
              showMark: ({ index }) => index % 1 === 0,
            },
        ]}
        
        />
   
        </Box>

      
    </>
  )
}




const data = [
  { value: 86, label: 'Mobile' },
  { value: 14, label: 'Desktop' },
];

const size = {
  height: 210,
};



const PieChartData = () => {



  return (
    <>
        <Box sx={{ width: '100%',}}>
        <PieChart
        colors={['#7F7FD5', '#E786D7',]}
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 45,
          data,
          paddingAngle: 10,
          innerRadius: 5,
          startAngle: 80,
          endAngle: 600,
        },
      ]}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 14,
            fill: '#CACACA',
          },
        },
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
   
        </Box>

      
    </>
  )
}



export {StackedBarChart, LineChartData, PieChartData,}