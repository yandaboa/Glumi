import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowSVG from '../assets/ArrowSVG.js';
import * as d3 from 'd3';

export default (props) => {
  if (props.data.length < 1) {
    return (
      <Text>no data</Text>
    )
  }

  const vw = Dimensions.get("window").width;

  const systolicScale = d3.scaleLinear()
    .domain([90, 140])
    .range([(vw * .4) - (vw * .06), 0])
    .clamp(true)

  const diastolicScale = d3.scaleLinear()
    .domain([0, 1])
    .range([(vw * .4) - (vw * .06), 0])
    .clamp(true)

  const offsetSystolic = systolicScale(props.data.systolic);

  let offset = offsetSystolic;

  if (props.data.diastolic < 60) {
    offset = diastolicScale(0);
  } else if (props.data.diastolic > 90) {
    offset = diastolicScale(1);
  }

  const style = StyleSheet.create({
    heading: {
      fontSize: vw * .04,
      color: "#000",
      fontFamily: "BalooTamma2-SemiBold"
    },

    subtitle: {
      color: "#000",
      fontFamily: "BalooTamma2-Medium",
      fontSize: vw * .035,
    },

    text: {
      color: "#000",
      fontFamily: "Comfortaa-Regular",
      fontSize: vw * .03,
    },

    scaleContainer: {
      flex: 1,
      justifyContent: "center"
    },

    scaleSpacer: {
      width: vw * .07,
    },

    arrowContainer: {
      flexDirection: "row",
      position: "absolute",
      top: offset,
      height: vw * .06,
    },

    scale: {
      marginLeft: vw * .02,
      width: vw * .04,
      height: vw * .4,
      borderRadius: vw * .04,
    },
  });

  return (
    <View style={style.container}>
      <View style={style.headingContainer}>
        <Text style={style.heading}>Jan 1</Text>
        <View style={style.headingData}>
          <Text style={style.subtitle}>Blood Pressure: </Text>
        </View>
        <View style={style.scaleContainer}>
          <LinearGradient
            style={style.scale}
            colors={['#E24D50', '#38B346', "#3399FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
          />
          <View style={style.arrowContainer}>
            <View style={style.scaleSpacer} />
            <ArrowSVG
              style={{
                transform: [{ rotate: '90deg' }]
              }}
              width={vw * .04} />
            <Text style={style.text}> {props.data.systolic + "/" + props.data.diastolic}{'\n'}mmHg</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

