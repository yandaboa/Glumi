import * as React from "react";
import Svg, {
    Defs,
    Path,
} from "react-native-svg";
import { StyleSheet } from "react-native";


const SettingSVG = (props) => {
    const style = StyleSheet.create({
        cls1: {
            fill: "#aaa",
        },
    });

    const focus = StyleSheet.create({
        cls1: {
            fill: "#ffa26f",
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
                className="cls-1"
                d="M536.25,256.22l-35.84-20.68c-5.32-3.08-9.4-7.89-11.77-13.57-.02-.07-.03-.12-.07-.17-2.36-5.7-2.89-12.01-1.29-17.97l10.71-39.92c2.55-9.49-.16-19.62-7.11-26.57l-28.22-28.22c-6.95-6.95-17.07-9.66-26.56-7.11l-39.94,10.71c-5.96,1.6-12.25,1.08-17.97-1.29-.05-.03-.1-.05-.17-.07-5.68-2.36-10.48-6.45-13.57-11.77l-20.68-35.84c-4.92-8.5-13.99-13.75-23.81-13.75h-39.94c-9.82,0-18.89,5.25-23.81,13.75l-20.68,35.84c-3.09,5.32-7.89,9.4-13.57,11.77-.07,.02-.12,.03-.17,.07-5.72,2.36-12.01,2.89-17.97,1.29l-39.94-10.71c-9.49-2.55-19.6,.16-26.56,7.11l-28.22,28.22c-6.95,6.95-9.66,17.08-7.11,26.57l10.71,39.92c1.6,5.96,1.08,12.27-1.29,17.97-.03,.05-.05,.1-.07,.17-2.36,5.68-6.45,10.5-11.77,13.57l-35.84,20.68c-8.52,4.92-13.75,13.99-13.75,23.81v39.94c0,9.82,5.23,18.89,13.75,23.81l35.84,20.7c5.32,3.08,9.4,7.87,11.77,13.56,.02,.07,.03,.12,.07,.17,2.36,5.72,2.89,12.01,1.29,17.97l-10.71,39.94c-2.55,9.49,.16,19.6,7.11,26.56l28.22,28.22c6.95,6.95,17.07,9.66,26.56,7.11l39.94-10.71c5.96-1.6,12.25-1.08,17.97,1.29,.05,.03,.1,.05,.17,.09,5.68,2.35,10.48,6.43,13.57,11.75l20.68,35.84c4.92,8.52,13.99,13.75,23.81,13.75h39.94c9.82,0,18.89-5.23,23.81-13.75l20.68-35.84c3.09-5.32,7.89-9.4,13.57-11.75,.07-.03,.12-.05,.17-.09,5.72-2.36,12.01-2.88,17.97-1.29l39.94,10.71c9.49,2.55,19.6-.16,26.56-7.11l28.22-28.22c6.95-6.95,9.66-17.07,7.11-26.56l-10.71-39.94c-1.6-5.96-1.08-12.25,1.29-17.97,.03-.05,.05-.1,.07-.17,2.36-5.68,6.45-10.48,11.77-13.56l35.84-20.7c8.52-4.92,13.75-13.99,13.75-23.81v-39.94c0-9.82-5.23-18.89-13.75-23.81Zm-236.25,160.1c-64.23,0-116.32-52.07-116.32-116.32s52.09-116.32,116.32-116.32,116.32,52.09,116.32,116.32-52.09,116.32-116.32,116.32Z"
            />
        </Svg>
    );
};
export default SettingSVG;
