import { style } from 'd3';
import { Text, View, StyleSheet } from 'react-native';
import { home } from '../style/style.js';


export default (props) => {
  const makeGraph = (data) => {
    width = props.width;
  }

  const style = StyleSheet.create({
    container: {

    },

    headingContainer: {

    },

    heading: {

    },

    headingData: {

    },

    subtitle: {

    },

    scaleContainer: {

    },

    arrow: {

    },

    scale: {

    },
  });

  return (
    <View style={style.container}>
      <View style={style.headingContainer}>
        <Text style={style.heading}>Jan 1</Text>
        <View style={style.headingData}>
          <Text style={style.subtitle}>Blood Pressure: </Text>
          <Text style={style.subtitle}> 110/80 mmHg</Text>
        </View>
        <View style={style.scaleContainer}>
          <View style={style.arrow}></View>
          <View style={style.scale} />
        </View>
      </View>
    </View>
  );
}

