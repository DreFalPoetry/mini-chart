## mini-chart-line

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
            data={chartData} 
            width={width}
            height={height}
        />
    )
}

注解：
data -- Array[{x:'',y:''}]
width -- 宽度
height -- 高度

````



