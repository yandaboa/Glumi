import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const LeftLeafSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: "#8bc166",
        },
    });

    return (
        <Path
            style={style.cls1}
            d="M271.4,322.69c-.01,.16-.02,.32-.04,.47v.03c-.11,1.11-1.31,1.74-2.26,1.2l-103.52-59.17c-.99-.57-1.89,.85-.98,1.54l97.65,72.94c.87,.64,.84,1.98-.05,2.59-3.3,2.25-7.29,3.42-11.47,3.11-155.78-11.25-161.26-151.84-161.26-151.84,134.07,0,170.54,76.12,180.14,110.08,1.76,6.2,2.36,12.67,1.79,19.05Z"
        />
    );
};
export default LeftLeafSVG;