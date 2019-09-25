## mini-chart-line



#### 在表格中使用的小面积图

````bash
npm install mini-chart-line --save

引入：
import {ReAreaCharts} from 'mini-chart-line'
使用：

//ReAreaCharts
render(){
  return (
    <ReAreaCharts 
        axis_x={['1s','10s','30s','1min']}
        data={['10','20','30','40']} 
        width={width}
        height={height}
        tooltip={true}
        strokeColor={'#333'}
        fillColor={'#333'}
    />
  )
}

注解：
data -- Array,Y轴的数据信息 
axis_x -- Array,X轴的数据信息
width -- int 宽度
height -- int 高度
tooltip -- boolean[true,false] 显示tooltip
strokeColor -- string,描边色
fillColor -- string,填充色
````


#### 1.23.2 添加recharts
#### 1.23.4 设置recharts 替换bizcharts 功能相同
#### 1.23.7 删除bizcharts部分 



