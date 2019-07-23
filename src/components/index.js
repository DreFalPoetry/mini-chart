import React from 'react';
import {
  Chart,
  Geom,
  Tooltip
} from "bizcharts";
import './styles.css';

class MiniArea extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
	render() {
    const {data,axis_x,tooltip,cursor } = this.props;
    let chartData = [];
    if(data && data.length){
      chartData = data.map((v,index)=>{
        return {x:axis_x[index],y:v}
      })
    }
    return (
      <div className="miniChartWrapper">
        {
          chartData && chartData.length ? (
            <Chart 
              height={this.props.height || 35} 
              width={this.props.width || 100} 
              data={chartData} 
              padding={0} 
            >
              {tooltip ? <Tooltip/> : null}
              <Geom type="area" position="x*y" shape="smooth" color="blue" active={false}  style={cursor ? {cursor:'pointer!important'} : null}/>
            </Chart>
          ) : '--'
        }
      </div>
    )
	}
}

MiniArea.propTypes = {}

export default MiniArea