import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet, Dimensions } from "react-native";


const InputSVG = (props) => {
    const vw = Dimensions.get("window").width;

    const style = StyleSheet.create({
        icon: {
            width: vw * .12,
            height: vw * .12,
        },

        cls1: {
            fill: "#aaa",
        },
    });

    const focus = StyleSheet.create({
        cls1: {
            fill: "#ffa26f",
        },
    });

    if (props.state == "true") {
        style.cls1 = focus.cls1;
    }

    return (
        <Svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            style={style.icon}

            accessibilityRole="image"
            {...props}
        >
            <Path
                style={style.cls1}
                d="M481.46,216.47h0c4.35-4.61,12.09-1.53,12.09,4.81V502.45c0,17.38-14.09,31.46-31.46,31.46H84.01c-17.38,0-31.46-14.09-31.46-31.46V133.76c0-17.38,14.09-31.47,31.47-31.47H403.4c8.73,0,13,10.64,6.7,16.68-.06,.06-.12,.12-.18,.17-73.92,70.87-165.92,159.06-189.47,237.38-2.6,8.65-1,17.77,4.39,25.02,5.35,7.2,13.88,11.5,22.8,11.5,2.54,0,5.08-.34,7.54-1.02,81.88-22.43,158.6-103.78,226.29-175.55Z"
            />
            <Path
                style={style.cls1}
                d="M541.52,127.72c-89.74,74-191.5,237.43-301.45,240.58,24.62-105.17,172.49-217.42,252.31-301.3,26.79-8.41,71.12,43.35,49.14,60.71Z"
            />
        </Svg>
    );
};
export default InputSVG;
