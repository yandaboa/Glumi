import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, Path } from "react-native-svg";
const ArrowSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: "#aaa",
        },
    });

    <Svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        {...props}
    >
        <Path
            style={style.cls1}
            d="M310.14,542.62L443.3,239.57c39.32-89.48-26.23-189.87-123.96-189.87h-38.67c-97.74,0-163.28,100.39-123.96,189.87l133.16,303.06c3.88,8.83,16.41,8.83,20.29,0Z"
        />
    </Svg>
}
export default ArrowSVG;
