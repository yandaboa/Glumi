import * as React from "react";
import Svg, {
    Path,
    Rect,
} from "react-native-svg";
import { StyleSheet, Dimensions } from "react-native";

const TrashSVG = (props) => {
    const vw = Dimensions.get('window').width;

    const style = StyleSheet.create({
        icon: {
            height: vw * .08,
            width: vw * .08,
        },

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
            style={style.icon}
            {...props}
        >

            <Rect
                style={style.cls1}
                x={135.78}
                y={205.82}
                width={327.58}
                height={351.55}
                rx={25.83}
                ry={25.83}
            />
            <Path
                style={style.cls1}
                d="M490.14,112.24v44.25c0,9.47-8.89,17.14-19.87,17.14H128.88c-10.98,0-19.88-7.67-19.88-17.14v-44.25c0-9.47,8.9-17.15,19.88-17.15h88.14v-25.29c0-6.87,6.45-12.43,14.41-12.43h136.28c7.95,0,14.4,5.57,14.4,12.43v25.29h88.15c10.98,0,19.87,7.68,19.87,17.15Z" />
        </Svg>
    );
};
export default TrashSVG;
