## Mini-chart

#### 在表格中使用的小面积图

````bash
npm install mini-chart-line --save

引入：
import {MiniArea} from 'mini-chart-line'
使用：
 render(){
	const {chartData} = this.state;
    return (
        <MiniArea 
            url={url} 
            data={chartData[0] ? chartData[0]['info']  : []} 
            setChartData={this.setChartData}
            width={width}
            height={height}
        />
    )
}

注解：
url -- 请求的接口地址[required]
chartData -- 存贮所有图表数据的数组[required]
setChartData -- 暴露方法传递接口请求回来的数据信息，在方法中设置 state：chartData 接收数据[required]
width -- 宽度
height -- 高度

````



