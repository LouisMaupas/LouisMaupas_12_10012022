import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function DailyActivity({profils}) {

    // styled-component
    const DailyActivityLabel = styled.div`
    width: 835px;
    height: 320px;
    background-color: pink;
    `

    //Recharts
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    const renderLineChart = (
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      );

    return (
      <DailyActivityLabel>
          <div>
            {renderLineChart}
          </div>
      </DailyActivityLabel>
    )
}