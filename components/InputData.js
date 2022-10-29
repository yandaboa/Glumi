import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import SelectList from 'react-native-dropdown-select-list'


export default (props) => {
    const vw = Dimensions.get("window").width;
    const vh = Dimensions.get("window").height;

    const formatData = (d) => {
        let formatedData = [];
        const sortData = d.sort(
            (x, y) => Number(new Date(x.date)) - Number(new Date(y.date)),
        );
        let a = [];
        let temp = sortData[0];
        for (let i = 0; i < sortData.length; i++) {
            let iDate = new Date(sortData[i].date);
            let tempDate = new Date(temp.date);
            if (
                iDate.getFullYear() == tempDate.getFullYear()
                && iDate.getMonth() == tempDate.getMonth()
                && iDate.getDate() == tempDate.getDate()
            ) {
                a.push(sortData[i]);
            } else {
                formatedData.push(a);
                temp = sortData[i];
                a = [sortData[i]];
            }
        }
        formatedData.push(a);
        return formatedData
    }

    const padDate = (d) => {
        if (d < 10) {
            return "0" + d;
        } else {
            return d;
        }
    }

    const [sliderElementActive, setSliderElementActive] = useState(0);
    const [ref, setref] = useState(null);
    const [selected, setSelected] = React.useState("");
    const [modalActive, setModalActive] = useState(0);

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / vw);
            if (slide != sliderElementActive) {
                setSliderElementActive(slide)
            }
        }
    }

    const stringifyDate = (i) => {
        return (i.toLocaleString("en-US", { month: "short" }) + " " + i.getDate());
    }

    const dataSet = (d, index, title) => {
        let key = title + index;
        let date = new Date(d[0].date);
        return (
            <View key={key}>
                <ScrollView
                    style={logEvent.data}
                    vertical={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                >
                    <View style={logEvent.dataContainer}>
                        <View style={[logEvent.dataElement, logEvent.leader]}>
                            <Text style={logEvent.leaderText}>time</Text>
                            <Text style={logEvent.leaderText}>data</Text>
                            <Text style={logEvent.leaderText}>edit</Text>
                        </View>
                        {
                            d.map((i, index) =>
                                <View style={
                                    [logEvent.dataElement, logEvent.first]}
                                    key={"d" + index}
                                >
                                    <Text style={logEvent.dataText}>
                                        {padDate(new Date(i.date).getHours()) + ":" + padDate(new Date(i.date).getMinutes())}
                                    </Text>
                                    <Text style={logEvent.dataText}>{i.value}</Text>
                                    <View style={logEvent.iconContainer}>
                                        <TouchableOpacity
                                            onPress={() => { setModalActive(true) }}
                                        >
                                            <EditSVG />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            )
                        }
                        <View style={logEvent.add}>
                            <AddSVG style={logEvent.icon}
                                fill="#fff"
                            />
                        </View>
                        <View style={logEvent.filler} />
                    </View>
                </ScrollView>
            </View>
        );
    }


    const Select = (d) => {
        let dateString = [];
        d.forEach((i) => {
            let date = new Date(i.date);
            let dateStringify = stringifyDate(date);
            if (dateString.indexOf(dateStringify) === -1) {
                dateString.push(dateStringify)
            }
        });
        return (
            <View style={logEvent.dropbarContainer}>
                <SelectList
                    onSelect={() => {
                        let selectedIndex = dateString.indexOf(selected);
                        if (selectedIndex >= 0) {
                            dateSelected(selectedIndex);
                        }
                    }}
                    setSelected={setSelected}
                    data={dateString}
                    defaultOption={{ key: sliderElementActive, value: dateString[sliderElementActive] }}
                    search={true}
                    inputStyles={{
                        color: "#000",
                        fontFamily: "BalooTamma2-Medium",
                        fontSize: vw * .04,
                    }}
                    boxStyles={{
                        borderRadius: vw * .03,
                        border: "none",
                        backgroundColor: "#fff",
                    }}
                    dropdownStyles={{
                        backgroundColor: "#fff"
                    }}
                    dropdownItemStyles={{
                        margin: vw * .02
                    }}
                    dropdownTextStyles={{
                        fontFamily: "BalooTamma2-Medium",
                        fontSize: vw * .04,
                        color: "#000",
                    }}
                    maxHeight={vw * .5}
                />
            </View>
        );
    }

    const dateSelected = (i) => {
        setSliderElementActive(i);
        setTimeout(() => {
            ref.scrollTo({
                x: vw * i,
                y: 0,
                animated: true
            })
        }, 500)
    }
    const style = StyleSheet.create({
        container: {
            width: vw,
            height: vh,
            backgroundColor: "#000000aa",
            justifyContent: "center",
            alignItems: "center",
        },

        content: {
            height: vw * .9,
            width: vw * .9,
            backgroundColor: "#fff",
            borderRadius: vw * .04,
            padding: vw * .04,
        },

        headingContainer: {
            flexDirection: "row",
        },

        heading: {
            fontSize: vw * .05,
            fontFamily: "BalooTamma2-Medium",
        },

        iconContainer: {
            marginLeft: "auto",

        },

        icon: {
            width: vw * .05,
            height: vw * .05,
        },
    });

    return (
        <>
            <View style={logEvent.heading}>
                <Text style={logEvent.headingText}>{props.title} Data</Text>
            </View>
            <Modal
                transparent={true}
                visible={modalActive}
            >
                <View style={style.container}>
                    <View style={style.content}>
                        <View style={style.headingContainer}>
                            <Text style={style.heading}>Input Data Modal</Text>
                            <TouchableOpacity
                                onPress={() => setModalActive(false)}
                                style={style.iconContainer}
                            >
                                <AddSVG
                                    fill="#000"
                                    style={[style.icon,
                                    {
                                        transform: [{ rotate: '45deg' }]
                                    }]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {Select(props.data)}
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    onchange(nativeEvent);
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
                ref={(ref) => {
                    setref(ref);
                }}
            >
                {
                    formatData(props.data).map((i, index) =>
                        dataSet(i, index, "acetone")
                    )
                }
            </ScrollView>
        </>
    );
}