import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Ext
import styled from "styled-components";

// Component
function BarChartMain(data) {
  const barChartMainData = data.data.sessions
  console.log(barChartMainData)
  // styles
  const BarChartBackground = styled.div`
  background-color: #FBFBFB;
  border-radius: 5px;
  `


  function getDays() {

  }


  /**
   * 
   * @param {*} param0 
   * @returns 
   */
  function Tooltip({ active, payload }) {
    if (active) {
          return (
        <div>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  }
  
    return (
      <BarChartBackground>
        <div>Activité quotidienne</div>


        <ResponsiveContainer minWidth={700} width='100%' height={320}>

          <BarChart
          width='100%'
            data={barChartMainData}
            barSize={7}
            barGap={8}
          >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip content={<tooltip />} cursor={{ stroke: 'rgba(224,224,224,0.3)'}} contentStyle={{color:'white', backgroundColor:'red'}} wrapperStyle={{ width: 39, height: 63,fontSize: 10, color:'white', backgroundColor:'red'}}/>
          
          
          <Legend iconSize={8} iconType="circle" verticalAlign="top" height={47} />

          <XAxis dataKey="day" />


          <Bar name="Poids(kg)" yAxisId="right" dataKey="kilogram" radius={[3, 3, 0, 0]} fill="#282D30" />
          <YAxis hide yAxisId="left" />


          <Bar name="Calories brûlées (kCal)"yAxisId="left" dataKey="calories" radius={[3, 3, 0, 0]} fill="#E60000" />
          <YAxis  yAxisId="right" orientation="right" stroke="#9B9EAC" />

          </BarChart>

        </ResponsiveContainer>


      </BarChartBackground>
    );
}

export default BarChartMain;
