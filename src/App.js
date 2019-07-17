import React from 'react';
import './App.css';
import {
  Chart,
  Geom,
} from "bizcharts";
import {MiniArea} from 'mini-chart-line'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chartData:[]
    }
  }

  setChartData = (data) => {
    console.log('1111')
    this.setState({
      chartData:data
    })
  }  

  render(){
    const url = 'https://easy-mock.com/mock/5d2ec63f6c3b2b2902554a48/api/chartData'
    var data = [
      {
        year: "1990",
        ACME: 898,
      },
      {
        year: "1991",
        ACME: 724,
      },
      {
        year: "1992",
        ACME: 125,
      },
      {
        year: "1993",
        ACME: 176,
      },
      {
        year: "1994",
        ACME: 156
      },
      {
        year: "1995",
        ACME: 825
      },
      {
        year: "1996",
        ACME: 215
      },
      {
        year: "1997",
        ACME: 176,
      },
      {
        year: "1998",
        ACME: 167,
      },
      {
        year: "1999",
        ACME: 142
      },
      {
        year: "2000",
        ACME: 117
      },
      {
        year: "2001",
        ACME: 113,
      },
      {
        year: "2002",
        ACME: 132
      },
      {
        year: "2003",
        ACME: 146,
      },
      {
        year: "2004",
        ACME: 169,
      },
      {
        year: "2005",
        ACME: 214,
      },
      {
        year: "2005",
        ACME: 824,
      },
    ];
    const {chartData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Chart height={35} width={100} data={data} padding={0}>
            <Geom type="area" position="year*ACME"  color="blue"/>
          </Chart>      
          <MiniArea url={url} data={chartData[0] ? chartData[0]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[1] ? chartData[1]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[2] ? chartData[2]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[3] ? chartData[3]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[4] ? chartData[4]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[5] ? chartData[5]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[6] ? chartData[6]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[7] ? chartData[7]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[8] ? chartData[8]['info']  : []} setChartData={this.setChartData}/>
          <MiniArea url={url} data={chartData[9] ? chartData[9]['info']  : []} setChartData={this.setChartData}/>
        </header>
      </div>
    )
  }
}

export default App;
