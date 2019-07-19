import React from 'react';
import {
  Chart,
  Geom,
} from "bizcharts";
import {fetchingData} from '../utils'; 
import './styles.css';

class MiniArea extends React.Component {
  constructor(props){
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.state = {}
  }

  componentDidMount(){
    const {url,setChartData,uniqueKey} = this.props;
    this.fetchData(url,setChartData,uniqueKey)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.uniqueKey!== this.props.uniqueKey){
      const {url,setChartData,uniqueKey} = nextProps;
      this.fetchData(url,setChartData,uniqueKey)
    }
  }

  fetchData(url,setChartData,uniqueKey){
    console.log(uniqueKey);
    if(!window.isFetching){
      if(!setChartData || !url) return;
      const response = fetchingData(url)
      response.then((data)=>{
        this.props.setChartData(data,uniqueKey)
      })
    }
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