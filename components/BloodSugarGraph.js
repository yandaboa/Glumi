import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { bloodSugarGraph } from '../style/style';
import Svg, { Path } from 'react-native-svg';
import * as d3 from 'd3';
import { Data } from './Data.js';

export default (props) => {
  const vw = Dimensions.get("window").width;

  const width = props.width;
  const height = width;
  const margin = {
    top: vw * .1,
    bottom: vw * .1,
    left: vw * .06,
    right: vw * .1,
  }

  const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignSelf: "center",
      marginRight: "auto",
    },

    content: {
      justifyContent: "center",
      alignSelf: "center",
      flexDirection: "row",
    },

    xLabelContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: width * .02,
    },

    xLabel: {
      fontSize: width * .07,
      width: width,
      marginLeft: "auto",
      fontFamily: "BalooTamma2-Bold",
      color: "#000",
      textAlign: "center",
    },

    unitContainer: {
      width: "auto",
      justifyContent: "center",
      alignItems: "center",
    },

    unit: {
      fontSize: width * .055,
      fontFamily: "BalooTamma2-Bold",
      color: "#111",
      marginTop: width * .01,
    },

    labelContainer: {
      justifyContent: "space-evenly",
      width: "auto",
    },

    yLabel: {
      fontSize: width * .05,
      fontFamily: "BalooTamma2-Regular",
      color: "#555",
      opacity: .9,
      marginLeft: width * .01,
    },

  });

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
      html.push(<Text key={i} style={style.yLabel}>{i}</Text>)
    });
    return [graph, html];
  }

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.unitContainer}>
          <Text style={[style.unit,
          {
            transform: [{ rotate: '270deg' }]
          }]}>
            ppm</Text>
        </View>
        <View style={style.labelContainer}>
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
      <View style={style.xLabelContainer}>
        <Text style={style.xLabel}>Acetone Levels</Text>
      </View>
    </View>

  );
}