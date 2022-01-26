import styled from "styled-components";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// styled-component
const ChartLabel = styled.div`
  background: red;
  width: 258px;
  Height: 263px;
  border-radius: 5px;
`

function Chart(type, data) {

    return (
      <div>
                <ChartLabel>
          
        </ChartLabel>
      </div>

    )
  }

  export default Chart;