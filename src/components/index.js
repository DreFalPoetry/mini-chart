import React from 'react';
import {
  Chart,
  Geom,
} from "bizcharts";
import './styles.css';

class MiniArea extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
	render() {
    const {data} = this.props;
    return (
      <div className="miniChartWrapper">
        {
          data && data.length ? (
            <Chart className="miniChartContent" height={this.props.height || 35} width={this.props.width || 100} data={data} padding={0}>
              <Geom type="area" position="x*y"  color="blue" active={false}/>
            </Chart>
          ) : '--'
        }
      </div>
    )
	}
}

MiniArea.propTypes = {}

export default MiniArea