import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const AddSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: props.fill,
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
                d="M549.5,305.42h0c0,20.71-16.79,37.5-37.5,37.5h-153.02c-12.14,0-21.98,9.84-21.98,21.98v153.02c0,20.71-16.79,37.5-37.5,37.5h0c-20.71,0-37.5-16.79-37.5-37.5v-153.02c0-12.14-9.84-21.98-21.98-21.98H87c-20.71,0-37.5-16.79-37.5-37.5h0c0-20.71,16.79-37.5,37.5-37.5H240.02c12.14,0,21.98-9.84,21.98-21.98V92.92c0-20.71,16.79-37.5,37.5-37.5h0c20.71,0,37.5,16.79,37.5,37.5V245.94c0,12.14,9.84,21.98,21.98,21.98h153.02c20.71,0,37.5,16.79,37.5,37.5Z"
            />
        </Svg>
    );
};
export default AddSVG;
