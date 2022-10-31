import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const StemSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: "#8bc166",
        },
    });

    return (
        <Svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            accessibilityRole="image"
            {...props}
        >
            <Path
                style={style.cls1}
                d="M325.13,523.17l-8.52,16.68c-1.58,3.09-5.63,3.67-7.96,1.14-16.23-17.72-66.04-83.6-38.96-201.77,.73-3.17,4.67-4.11,6.67-1.58,.55,.7,.84,1.58,.84,2.47,0,.22-.01,.43-.05,.65-18.83,117.47,32.37,165.2,46.52,175.94,1.98,1.5,2.6,4.24,1.46,6.47Z"
            />
        </Svg>
    );
};
export default StemSVG;
