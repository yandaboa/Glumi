import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import SelectList from 'react-native-dropdown-select-list'
import { AceData, GulData, FoodData, clearSpecificData } from './Data.js';
import { writeHealthData } from '../Firebase.js';
import TrashSVG from '../assets/TrashSVG.js';

let QedChanges = [[], [], [], [], [], [], [], [], []];
// ace, glu, food

export function updateAce() {
    QedChanges[0].push("");
    QedChanges[1].push("");
    QedChanges[2].push(-1);
}

export function updateGlu() {
    console.log("Glu updated");
    QedChanges[3].push("");
    QedChanges[4].push("");
    QedChanges[5].push(-1);
}

export function updateFood() {
    QedChanges[6].push("");
    QedChanges[7].push("");
    QedChanges[8].push(-1);
}

export function clearQedChanges() {
    QedChanges.map((dataRow) => {
        while (dataRow.length > 0) {
            dataRow.pop();
        }
    })
}

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
    const [addModalActive, setAddModalActive] = useState(0);
    const [selectAdd, setSelectAdd] = useState("");


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

    function deleteData(type){
        clearSpecificData(type);
    }

    const dataSet = (d, index, title) => {
        let key = title + index;
        return (
            <View key={key}>
                <ScrollView
                    style={logEvent.data}
                    vertical={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                >
                    <View style={logEvent.dataContainer}>
                        <View style={[logEvent.dataElement, logEvent.leader]}>
                            <Text style={logEvent.leaderText}>time</Text>
                            <Text style={logEvent.leaderText}>data</Text>
                            <Text style={logEvent.leaderText}>delete</Text>
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
                                            onPress={() => {deleteData(title) }}
                                        >
                                            <TrashSVG />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        <View style={logEvent.add}>
                            <TouchableOpacity
                                onPress={() => {
                                    setAddModalActive(true)
                                    setSelectAdd(title)
                                }}
                            >
                                <AddSVG style={logEvent.icon}
                                    fill="#fff"
                                />
                            </TouchableOpacity>
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
                        backgroundColor: base,
                    }}
                    dropdownStyles={{
                        backgroundColor: base,
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

    const dark = false;

    let base1 = '#fff';
    let base = '#ddd';
    if (dark) {
        base = '#acc6e2';
        base1 = '#567AB4';
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
            backgroundColor: base,
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
            backgroundColor: base1,
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
        },

        submitContainer: {
            width: vw * .8,
            height: vw * .1,
            margin: vw * .02,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: vw * .02,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#38B346",
            alignItems: "center",
        },

        submit: {
            fontFamily: "BalooTamma2-Regular",
            fontSize: vw * .04,
            color: "#fff",
            textAlign: "center",
        },

        addContent: {
            width: vw * .9,
            height: "auto",
            backgroundColor: base1,
            borderRadius: vw * .03,
            padding: vw * .04,
        },

        addTitle: {
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw * .045,
            color: "#000",
        },

        addInput: {
            margin: vw * .02,
            marginRight: vw * .04,
            marginLeft: vw * .04,
            backgroundColor: base,
            borderRadius: vw * .02,
            fontFamily: "Comfortaa-Regular",
            fontSize: vw * .04,
            padding: vw * .02,
        },

        addSubmit: {
            marginTop: vw * .04,
        },

        addHeading: {
            marginBottom: vw * .04,
        },
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



    const [submittingDate, setSubmittingDate] = useState("");
    const [submittingTime, setSubmittingTime] = useState("");
    const [submittingValue, setSubmittingValue] = useState(0);

    const [submitMessage, setSubmitMessage] = useState("Submit");
    const submitAddData = (dataType) => {
        if (submittingDate === "" || submittingTime === "") {
            setSubmitMessage("Please enter all fields");
        } else {
            setSubmitMessage("Submit");
            let healthKey = submittingDate;
            let healthVal = submittingValue;
            const dataArr = healthKey.split("/");
            healthKey = dataArr[2] + "-" + dataArr[0] + "-" + dataArr[1] + "T" + submittingTime;
            setSubmittingDate("");
            setSubmittingTime("");
            setSubmittingValue("");
            setAddModalActive(false);
            writeHealthData(dataType, healthKey, healthVal);
        }
    }

    let firstDateChange = true;
    let firstTimeChange = true;
    let firstValueChange = true;
    let previousDate;
    let previousTime;
    let previousValue;

    const [editedDate, setEditedDate] = useState("");
    const [editedTime, setEditedVTime] = useState("");
    const [editedValue, setEditedValue] = useState(0);

    const editField = (changedTo, prev, index, type, dataType) => {
        const dataTypes = new Map([
            ["Breathanalyzer Data", 0],
            ["Glucometer Data", 3],
            ["Sugar Intaked", 6]
        ])
        let dataTypeIndex = dataTypes.get(dataType);

        // let dateArr = prev.split(/[-T:]+/);
        // previousDate = dateArr[0] + "-" + dateArr[1] + "-" + dateArr[2];
        // previousTime = dateArr[3] + ":" + dateArr[4];
        // previousValue = prev.value;
        if (type === "date") {
            QedChanges[dataTypeIndex][index] = changedTo;
        } else if (type === "time") {
            QedChanges[dataTypeIndex + 1][index] = changedTo;
        } else {
            QedChanges[dataTypeIndex + 2][index] = changedTo;
        }
        console.log(QedChanges);
    }

    const submitEditData = () => {
        QedChanges.map((dataRow, index1) => {
            dataRow.map((value, index2) => {
                if (value != "" || value != -1) {
                    if (index1 < 3) {
                        if (index1 === 1 || index1 === 0) {
                            let temp = AceData[index2].split(/[-T]+/);
                            if (index1 === 1) {
                                temp[2];
                            }
                        }
                    }

                }
            })
        })
    }

    const [textd, setTextd] = useState("mm/dd/yyyy");

    return (
        <>
            <View style={logEvent.heading}>
                <Text style={logEvent.headingText}>{props.title} Data</Text>
            </View>
            <Modal
                transparent={true}
                visible={addModalActive}
            >
                <View style={style.container}>
                    <View style={style.addContent}>
                        <View style={[style.headingContainer, style.addHeading]}>
                            <Text style={style.heading}>Add {selectAdd} Data</Text>
                            <TouchableOpacity
                                onPress={() => setAddModalActive(false)}
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
                        <View style={style.addContentContent}>
                            <Text style={style.addTitle}>date: mm/dd/yyyy</Text>
                            <TextInput
                                value={submittingDate}
                                style={style.addInput}
                                onChangeText={(i) => { setSubmittingDate(i) }}

                            // onChangeText={(i) => { setSubmittingDate(i) }}
                            />
                            <Text style={style.addTitle}>time: hh:mm</Text>
                            <TextInput
                                value={submittingTime}
                                style={style.addInput}
                                onChangeText={(i) => { setSubmittingTime(i) }}
                            />
                            <Text style={style.addTitle}>value:</Text>
                            <TextInput
                                value={submittingValue}
                                style={style.addInput}
                                onChangeText={(i) => { setSubmittingValue(i) }}
                            />
                            <TouchableOpacity
                                onPress={() => submitAddData(selectAdd)}
                                style={[style.submitContainer, style.addSubmit]}
                            >
                                <Text style={style.submit}>
                                    {submitMessage}
                                </Text>
                            </TouchableOpacity>
                        </View>
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