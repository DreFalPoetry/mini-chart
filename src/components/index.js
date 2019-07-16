import React from 'react';
import {
  Chart,
  Geom,
} from "bizcharts";
import {isFetching,fetchingData} from '../utils'; 

class MiniArea extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    if(!isFetching()){
      let data =  fetchingData()
      this.setState({data})
    }
  }

	render() {
    const {data} = this.state;
    return (
      <div className="miniChartWrapper">
        {
          data && data.length ? (
            <Chart height={this.props.height || 35} width={this.props.width || 100} data={data} padding={0}>
              <Geom type="area" position="x*y"  color="blue"/>
            </Chart>
          ) : 'No Data'
        }
      </div>
    )
	}
}

MiniArea.propTypes = {

}

export default MiniArea