import { Dimensions, View, Text } from 'react-native';
import { bloodSugarGraph } from '../style/style';
import Svg, { Path } from 'react-native-svg';
import { parseISO } from 'date-fns'
import * as d3 from 'd3';
import { RawData } from './Data.js';

export default () => {
  const sugarData = [95, 99, 112];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  let Data = RawData;

  const vw = Dimensions.get("window").width;

  for (let i = 0; i < Data.length; i++) {
    Data[i][0] = parseISO(Data[i][0]);
  }

  const width = vw * .7;
  const height = width;
  const margin = {
    top: vw * .1,
    bottom: vw * .1,
    left: vw * .06,
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
  let html = [];

  yAxis.ticks().reverse().forEach((i) => {
    html.push(<Text key={i} style={bloodSugarGraph.yLabel}>{i}</Text>)
  });

  return (
    <View style={bloodSugarGraph.container}>
      <View style={bloodSugarGraph.content}>
        <View style={bloodSugarGraph.unitContainer}>
          <Text style={bloodSugarGraph.unit}>ppm</Text>
        </View>
        <View style={bloodSugarGraph.labelContainer}>
          {html}
        </View>
        <Svg
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill="none"
            stroke="#66cc99"
            strokeWidth={vw * .015}
            strokeLinecap="round"
            strokeLinejoin="round"
            d={graph}
          />
        </Svg>
      </View>
      <View style={bloodSugarGraph.xLabelContainer}>
        <Text style={bloodSugarGraph.xLabel}>Acetone Levels</Text>
      </View>
    </View>
  );
}