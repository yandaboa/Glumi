import { Dimensions, View } from 'react-native';
import { bloodSugarGraph } from '../style/style';
import Svg, { Path } from 'react-native-svg';
import { parseISO } from 'date-fns'
import * as d3 from 'd3';
import { Data } from './Data.js';

export default () => {
  const sugarData = [95, 99, 112];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  const vw = Dimensions.get("window").width;

  for (let i = 0; i < Data.length; i++) {
    Data[i][0] = parseISO(Data[i][0]);
  }

  const width = vw * .75;
  const height = width;
  const margin = {
    top: vw * .1,
    bottom: vw * .1,
    left: vw * .1,
    right: vw * .1,
  }

  const xAxis = d3.scaleLinear()
    .domain([new Date(Data[0][0]), new Date(Data[Data.length - 1][0])])
    .range([margin.left, width - margin.right]);

  const yAxis = d3.scaleLinear()
    .domain(d3.extent(Data.map((i) => i[1])))
    .range([height - margin.bottom, margin.top]);

  const line = d3.line()
    .x(i => xAxis(i[0]))
    .y(i => yAxis(i[1]))
  let graph = line(Data);

  console.log(graph);

  return (
    <View style={bloodSugarGraph.container}>
      <Svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill="none"
          stroke="#66cc99"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={graph}
        />
      </Svg>
    </View>
  );
}