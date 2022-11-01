import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowSVG from '../assets/ArrowSVG.js';
import * as d3 from 'd3';

export default (props) => {
  

    const vw = Dimensions.get("window").width;

    const systolicScale = d3.scaleLinear()
        .domain([90, 140])
        .range([(vw * .6) - (vw * .06), 0])
        .clamp(true)

    const diastolicScale = d3.scaleLinear()
        .domain([60, 90])
        .range([(vw * .6) - (vw * .06), 0])
        .clamp(true)

    const offsetSystolic = systolicScale(props.data.systolic);
    const offsetDiastolic = diastolicScale(props.data.diastolic);

    const style = StyleSheet.create({
        container: {
            flex: 1,
            padding: vw * .01,
            paddingTop: 0,
        },

        headingContainer: {
            width: vw * .6,
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: vw * .01,
            marginTop: vw * .01,
        },

        heading: {
            fontSize: vw * .04,
            color: "#000",
            fontFamily: "BalooTamma2-SemiBold",
            marginRight: "auto",
        },

        leftHeading: {
            fontSize: vw * .04,
            color: "#000",
            fontFamily: "BalooTamma2-SemiBold",

        },

        text: {
            color: "#000",
            fontFamily: "Comfortaa-Regular",
            fontSize: vw * .03,
            alignText: "center",
            margin: vw * .005,
            marginLeft: "auto",
            marginRight: "auto",
        },

        scaleContainer: {
            flex: 1,
            justifyContent: "center"
        },

        scaleSpacer: {
            width: vw * .05,
        },

        arrowContainer: {
            flexDirection: "column",
            width: vw * .2,
            left: offsetSystolic,
        },

        arrowContainer2: {
            flexDirection: "column",
            width: vw * .2,
            left: offsetDiastolic
        },

        scale: {
            marginLeft: "auto",
            marginRight: "auto",
            width: vw * .6,
            height: vw * .02,
            borderRadius: vw * .02,
            justifyContent: "center",
            alignContent: "center",
            margin: vw * .005,
        },

        scaleSecond: {
            marginTop: vw * .08,
        },

        graph: {
            flexDirection: "column",
        },

        svg: {
            marginLeft: "auto",
            marginRight: "auto",
        },

        secondGraph: {
            marginTop: vw * .02,
        }
    });

    return (
        <View style={style.container}>
            <View style={style.headingContainer}>
                <Text style={style.heading}>Jan 1</Text>
                <Text style={style.leftHeading}>Blood Pressure</Text>
            </View>
            <View style={style.scaleContainer}>
                <View style={style.graph}>
                    <View style={style.arrowContainer}>
                        <Text style={style.text}>systolic: {props.data.systolic}</Text>
                        <ArrowSVG
                            style={style.svg}
                            width={vw * .03} />
                    </View>
                    <LinearGradient
                        style={style.scale}
                        colors={['#E24D50', '#38B346', "#3399FF"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.5, 1]}
                    />
                </View>
                <View style={[style.graph, style.secondGraph]}>
                    <View style={style.arrowContainer2}>
                        <Text style={style.text}>diastolic {props.data.diastolic}</Text>
                        <ArrowSVG
                            style={style.svg}
                            width={vw * .03} />
                    </View>
                    <LinearGradient
                        style={style.scale}
                        colors={['#E24D50', '#38B346', "#3399FF"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.5, 1]}
                    />
                </View>
            </View>
        </View>
    );
}