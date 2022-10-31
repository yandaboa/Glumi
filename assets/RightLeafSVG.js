import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const RightLeafSVG = (props) => {
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
                d="M410.15,290.12c-69.07,57.09-111.84,47.14-124.61,41.96-.86-.35-1.05-1.52-.35-2.14l124.76-111.27c1.2-1.07-.27-2.96-1.54-1.98l-130.71,100.99c-.81,.62-1.96,.03-1.96-1.02v-.3c0-.79,.05-1.6,.15-2.4,.93-7.56,2.49-15,4.68-22.24,2.18-7.25,4.98-14.29,8.4-21.04,52.53-103.75,173.84-122.82,186.88-124.58,.65-.09,1.25,.36,1.36,1.03,1.7,9.81,10.4,78.99-67.06,142.99Z"
            />
        </Svg>
    );
};
export default RightLeafSVG;
