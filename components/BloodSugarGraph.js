import { Dimensions, View, Text } from 'react-native';
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

  const width = vw * .65;
  const height = width;
  const margin = {
    top: vw * .1,
    bottom: vw * .1,
    left: vw * .06,
    right: vw * .1,
  }

  const makeLine = (givenData) => {

    const xScale = d3.scaleTime()
      .domain([new Date(givenData[0].date), new Date(givenData[givenData.length - 1].date)])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(givenData.map((i) => i.value)))
      .range([height - margin.bottom, margin.top]);

    let scaledData = [];
    givenData.forEach((i) => {
      scaledData.push([xScale(new Date(i.date)), yScale(i.value)])
    });

    let line = d3.line()

    let graph = line(scaledData);

    let html = [];
    yScale.ticks().reverse().forEach((i) => {
      html.push(<Text key={i} style={bloodSugarGraph.yLabel}>{i}</Text>)
    });
    return [graph, html];
  }

  return (
    <View style={bloodSugarGraph.container}>
      <View style={bloodSugarGraph.content}>
        <View style={bloodSugarGraph.unitContainer}>
          <Text style={[bloodSugarGraph.unit,
          {
            transform: [{ rotate: '270deg' }]
          }]}>
            ppm</Text>
        </View>
        <View style={bloodSugarGraph.labelContainer}>
          {makeLine(Data)[1]}
        </View>
        <Svg
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill="none"
            stroke="#ff9933"
            strokeWidth={vw * .015}
            strokeLinecap="round"
            strokeLinejoin="round"
            d={makeLine(Data)[0]}
          />
        </Svg>
      </View>
      <View style={bloodSugarGraph.xLabelContainer}>
        <Text style={bloodSugarGraph.xLabel}>Acetone Levels</Text>
      </View>
    </View>

  );
}