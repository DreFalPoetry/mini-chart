import React from 'react';
import {
  Chart,
  Geom,
} from "bizcharts";
import {isFetching,fetchingData} from '../utils'; 

class MiniArea extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    const {url,setChartData} = this.props;
    if(!isFetching()){
      if(!setChartData || !url) return;
      const response = fetchingData(url)
      response.then((data)=>{
        this.props.setChartData(data)
      })
    }
  }

	render() {
    const {data} = this.props;
    return (
      <div className="miniChartWrapper">
        {
          data && data.length ? (
            <Chart height={this.props.height || 35} width={this.props.width || 100} data={data} padding={0}>
              <Geom type="area" position="x*y"  color="blue"/>
            </Chart>
          ) : '--'
        }
      </div>
    )
	}
}

MiniArea.propTypes = {}

export default MiniArea