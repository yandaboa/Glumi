import { Dimensions } from 'react-native';
import { general, bloodSugarGraph } from './../style/style';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function BloodSugarGraph() {
  const sugarData = [95, 99, 112];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  let opacity = 0.5;
  let bkColor = "#0093E1dd"
  return (
    <LineChart
      data={{
        labels: ["sun", "mon", "tue"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width * .75} // from react-native
      height={220}
      // yAxisLabel="$"
      // yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: bkColor,
        backgroundGradientFrom: bkColor,
        backgroundGradientTo: bkColor,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 10,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#fff"
        }
      }}
      style={{
        marginVertical: 8,
        borderRadius: 10
      }}
    />
  );
}