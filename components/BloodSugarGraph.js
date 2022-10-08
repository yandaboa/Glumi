import { Text, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import { general, bloodSugarGraph } from './../style/style';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit";

export default function BloodSugarGraph() {
  const sugarData = [95, 99, 112, 100, 130, 140];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  let opacity = 0.5;
  return (
    <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
    yAxisLabel=""
    yAxisSuffix="ppm"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "transparent",
      backgroundGradientFrom: "transparent",
      backgroundGradientTo: "transparent",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, 0.8)`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, 0.8)`,
      style: {
        borderRadius: 15
      },
      propsForDots: {
        r: "6",
        strokeWidth: "3",
        stroke: "#f00"
      }
    }}
    bezier  
    style={{
      marginVertical: 5,
      borderRadius: 15
    }}
  />);
}