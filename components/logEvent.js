import { Text, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js'

export default () => {
  return (
    <View style={logEvent.container}>
      <View style={logEvent.background}>
        <View style={logEvent.backgroundElement1} />
        <View style={logEvent.backgroundElement2} />
      </View>
      <View style={logEvent.header}>
        <Text style={logEvent.title}>Your Current Data</Text>
      </View>
      <View style={logEvent.content}>
        <ScrollView style={logEvent.data1}
          vertical={true}
          contentContainerStyle={Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={[logEvent.data1Element, logEvent.leader]}>
            <Text style={logEvent.leaderText}>date</Text>
            <Text style={logEvent.leaderText}>data</Text>
            <Text style={logEvent.leaderText}>edit</Text>
          </View>
          <View style={[logEvent.data1Element, logEvent.first]}>
            <Text style={logEvent.dataText}>jan 1</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 2</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 3</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 4</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 5</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 6</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 7</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 8</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.add}>
            <AddSVG style={logEvent.icon} />
          </View>
          <View style={logEvent.filler} />
        </ScrollView>
        <ScrollView style={logEvent.data1}
          vertical={true}
          contentContainerStyle={Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={[logEvent.data1Element, logEvent.leader]}>
            <Text style={logEvent.leaderText}>date</Text>
            <Text style={logEvent.leaderText}>data</Text>
            <Text style={logEvent.leaderText}>edit</Text>
          </View>
          <View style={[logEvent.data1Element, logEvent.first]}>
            <Text style={logEvent.dataText}>jan 1</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 2</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 3</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 4</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 5</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 6</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 7</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.data1Element}>
            <Text style={logEvent.dataText}>jan 8</Text>
            <Text style={logEvent.dataText}>100ppm</Text>
            <View style={logEvent.iconContainer}>
              <Image style={logEvent.icon}
                source={require('../assets/SVG/edit.svg')}
              />
            </View>
          </View>
          <View style={logEvent.add}>
            <AddSVG style={logEvent.icon} />
          </View>
          <View style={logEvent.filler} />
        </ScrollView>
        <View style={logEvent.spacer} />
      </View>
    </View>
  );
}