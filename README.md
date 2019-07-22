## mini-chart-line

#### 在表格中使用的小面积图

````bash
npm install mini-chart-line --save

引入：
import {MiniArea} from 'mini-chart-line'
使用：
 render(){
    return (
        <MiniArea 
			axis_x={['1s','10s','30s','1min']}
            data={['10','20','30','40']} 
            width={width}
            height={height}
        />
    )
}

注解：
data -- Array,Y轴的数据信息 
axis_x -- Array,X轴的数据信息
width -- int 宽度
height -- int 高度

````



