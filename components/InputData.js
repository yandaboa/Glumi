import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import SelectList from 'react-native-dropdown-select-list'
import { AceData, GulData, FoodData } from './Data.js';

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

    const scrolled = (nativeEvent) => {
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
            height: vw * 1.5,
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
            fontFamily: "BalooTamma2-Bold",
            textAlign: "center",
        },

        iconContainer: {
            marginLeft: "auto",

        },

        icon: {
            width: vw * .05,
            height: vw * .05,
        },

        leader: {
            backgroundColor: "none",
            margin: 0,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
        },

        leaderText: {
            flex: 1,
            fontFamily: "BalooTamma2-SemiBold",
            textAlign: "center",
            fontSize: vw * .04,
        },

        first: {
            marginTop: 0,
        },

        dataElement: {
            width: vw * .8,
            height: vw * .1,
            margin: vw * .02,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#efefef",
            borderRadius: vw * .02,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },

        dataText: {
            fontFamily: "Comfortaa-Regular",
            fontSize: vw * .035,
            textAlign: "center",
        },

        input: {
            flex: 1,
        },

        dateLabel: {
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw * .04,
            color: "#fff",
        },

        title: {
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw * .045,
            color: "#000",
            marginTop: vw * .05,
        },
        spacer: {
            width: "auto",
            height: vw * .1,
        }
    });

    const allData = [
        { title: "Breathanalyzer Data", data: AceData },
        { title: "Glucometer Data", data: GulData },
        { title: "Sugar Intaked", data: FoodData }
    ];

    const getStringDate = (d) => {
        let date = new Date(d);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        return (month + "/" + day + "/" + year);
    }

    const getStringTime = (d) => {
        let date = new Date(d);
        let hour = date.getHours();
        let minute = date.getMinutes();
        return (hour + ":" + minute);
    }

    const editData = (i, index) => {
        console.log(i);
    }

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
                            <Text style={style.heading}>Edit Data</Text>
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
                        <ScrollView
                            style={style.data}
                            vertical={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            pagingEnabled
                        >
                            {
                                allData.map((a, b) =>
                                    <View key={"allData" + b} style={style.dataContainer}>
                                        <Text style={style.title}>{a.title}</Text>
                                        <View style={[style.dataElement, style.leader]}>
                                            <Text style={style.leaderText}>date</Text>
                                            <Text style={style.leaderText}>time</Text>
                                            <Text style={style.leaderText}>data</Text>
                                        </View>
                                        {
                                            a.data.map((i, index) =>
                                                <View style={
                                                    [style.dataElement, style.first]}
                                                    key={"d" + index}
                                                >
                                                    <View style={style.input}>
                                                        <TextInput style={style.dataText}
                                                            placeholder={getStringDate(i.date)}
                                                            onChangeText={(i) => editData(i, index)}
                                                        />
                                                    </View>
                                                    <View style={style.input}>
                                                        <TextInput style={style.dataText}
                                                            placeholder={getStringTime(i.date)}
                                                            onChangeText={(i) => editData(i, index)}
                                                        />
                                                    </View>
                                                    <View style={style.input}>
                                                        <TextInput style={style.dataText}
                                                            placeholder={i.value}
                                                            onChangeText={(i) => editData(i, index)}
                                                        />
                                                    </View>
                                                </View>
                                            )
                                        }
                                        <View style={style.spacer} />
                                    </View>
                                )
                            }
                            <View style={style.filler} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {Select(props.data)}
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    scrolled(nativeEvent);
                }
                }
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
                        dataSet(i, index, props.title)
                    )
                }
            </ScrollView>
        </>
    );
}