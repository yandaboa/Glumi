import { Text, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import { general, bloodSugarGraph } from './../style/style';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function BloodSugarGraph() {
  const sugarData = [95, 99, 112, 100, 130, 140];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  let opacity = 0.5;
  return (
    <LineChart
      data={{
        labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width * .8} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  );
}