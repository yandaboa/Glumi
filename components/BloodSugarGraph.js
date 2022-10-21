import { Dimensions } from 'react-native';
import { general, bloodSugarGraph } from './../style/style';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function BloodSugarGraph() {
  const sugarData = [95, 99, 112];
  let yHideRatio = 0.8;
  let defaultMax = 250;
  let opacity = 0.85;
  const vw = Dimensions.get("window").width;

  const data = {
    labels: ["sun", "mon", "tue"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ],
  };

  const chartConfig = {
    backgroundColor: `rgba(255, 255, 255, ${opacity}})`,
    backgroundGradientFrom: `rgba(255, 255, 255, ${opacity})`,
    backgroundGradientTo: `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 2,
    color: (opacity = .9) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = .9) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 12,
    },
    propsForLabel: {
      fontSize: vw * .02,
    },
    withInnerLines: false,
    withHorizontalLabels: false,
    withVerticalLabels: false,
    withHorizontalLines: false,
    withVerticalLines: false,
    withOuterLines: false
  }

  return (
    <LineChart
      style={
        {
          shadowColor: "#000",
          shadowOffset: { width: vw * .01, height: vw * .01 },
          shadowOpacity: .5,
          shadowRadius: vw * .1,
          marginVertical: 8,
          borderRadius: 10,
          width: vw * .8,
        }
      }
      withOuterLines
      data={data}
      width={vw * .8} // from react-native
      height={vw * .8}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={chartConfig}
      yLabelsOffset={vw * .05}
      xLabelsOffset={vw * .02}
    />
  );
}