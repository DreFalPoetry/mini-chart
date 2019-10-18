import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ReferenceLine
} from 'recharts';
import './styles.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <div className="label">{`${payload[0].payload.name}`}</div>
        <div>{`${payload[0].value}%`}</div>
      </div>
    );
  }

  return null;
};

export default class ReAreaCharts extends PureComponent {
  render() {
    const {data,axis_x,tooltip,strokeColor,fillColor,width,height,referenceLine } = this.props;
    let chartData = [];
    if(data && data.length){
      chartData = data.map((v,index)=>{
        return {"name":axis_x[index],"point":v}
      })
    }
    return (
      <div className="miniChartWrapper"> 
        {
          chartData && chartData.length ? (
            <AreaChart
              width={width || 100}
              height={height || 35}
              data={chartData}
              margin={{
                top: 0, right: 0, left: 0, bottom: 0,
              }}
            >
              <XAxis dataKey="name" hide={true}/>
              {tooltip ?(
                <Tooltip content={<CustomTooltip />}/>
               ) : null}
              {referenceLine && referenceLine.length ? (
                referenceLine.map((item,ind)=>{
                  return <ReferenceLine key={ind} x={item} stroke="red" strokeDasharray="3 3"/>
                })
              ) : null}
              <Area type="monotone" dataKey="point" stroke={strokeColor || "#556cd6"} fill={fillColor||"#40a9ff"} fillOpacity={1}/>
            </AreaChart>
          ) : '--'
        }
      </div>
    );
  }
}
