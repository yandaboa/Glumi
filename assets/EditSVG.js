import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const EditSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: "#777",
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
                d="M545.97,154.97c-148.47,122.43-316.83,392.81-498.73,398.03C87.96,379,332.61,193.29,464.67,54.52c44.33-13.91,117.66,71.72,81.3,100.45Z"
            />
        </Svg>
    );
};
export default EditSVG;
