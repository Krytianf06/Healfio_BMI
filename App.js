import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgComponent from './components/svgComponent';
import { useFonts } from 'expo-font';
import ButtonRisk from './components/ButtonRisk';

export default function App() {
  const [loaded] = useFonts({
    'RedHatDisplay': require('./assets/fonts/RedHatDisplay.ttf'),
    'Quicksand': require('./assets/fonts/Quicksand.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.header}>Healt</Text>
      <Text style={styles.title}>Your body condition</Text>
      
      <Image
        style={styles.bmiArrow}
        source={require('./assets/bmi/Polygon_1.png')}
        />
      <Image
        style={styles.bmi_1}
        source={require('./assets/bmi/Subtract_1.png')}
        />
        <Image
        style={styles.bmi_2}
        source={require('./assets/bmi/Subtract_2.png')}
        />
         <Image
        style={styles.bmi_3}
        source={require('./assets/bmi/Subtract_3.png')}
        />
        <Image
        style={styles.bmi_4}
        source={require('./assets/bmi/Subtract_4.png')}
        />
        <Image
        style={styles.bmi_5}
        source={require('./assets/bmi/Subtract_5.png')}
      />
      
        <Image
        style={styles.whrArrow}
        source={require('./assets/whr/Polygon_1.png')}
        />
        <Image
        style={styles.whr_1}
        source={require('./assets/whr/Subtract_1.png')}
        />
        <Image
        style={styles.whr_2}
        source={require('./assets/whr/Subtract_2.png')}
        />
         <Image
        style={styles.whr_3}
        source={require('./assets/whr/Subtract_3.png')}
      />
      
        <Text style={styles.bmiNum}>
          23.2
        </Text>
        <Text style={styles.bmiText}>
          BMI
        </Text>
        <View style={styles.bmiBoxParameter}>
          <Text style={styles.bmiParameter}>
            Normal
          </Text>
      </View>
      
      <Text style={styles.whrNum}>
          0.96
        </Text>
        <Text style={styles.whrText}>
          WHR
        </Text>
        <View style={styles.whrBoxParameter}>
          <Text style={styles.whrParameter}>
            Average
          </Text>
      </View >
      
      <View style={styles.boxRisk}>
        <Text style={styles.boxRiskText}>Risk of developing diabetes over 10 years</Text>
        <Text style={styles.boxRiskLevel}>Low</Text>
        <Image
        style={styles.boxRiskArrow}
        source={require('./assets/riskScale/Polygon_1.png')}
        />
        <Image
        style={styles.boxRiskScale}
        source={require('./assets/riskScale/Line_color.png')}
        />
        <ButtonRisk style={styles.boxRiskBtn}/>
      </View>

      
      <Image
        style={styles.hearts}
        source={require('./assets/images/hearts.png')}
      />
      
      <View style={styles.avatar}>
      <SvgComponent style={styles.avatarIcons} />
      </View>
      

      <View style={styles.boxArrow}>
          <Image
          style={styles.thunderbolt}
          source={require('./assets/images/ic_Streak.png')}
          />
          <Text style={styles.textIcon}>
            1
          </Text>
      </View>

      
      <Image
        style={styles.backGroundTop}
        source={require('./assets/images/Ellipse_75.png')}
      />
      <Image
        style={styles.backGroundBottom}
        source={require('./assets/images/Ellipse_74.png')}
      />

      <Image
        style={styles.body}
        source={require('./assets/images/body.png')}
      />
      <Image
        style={styles.head}
        source={require('./assets/images/head.png')}
      />
      <View>
        
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGroundTop: {
    position: 'absolute',
    width: 230,
    height: 182,
    left: 174,
    top: -18,
  },
  backGroundBottom: {
    position: 'absolute',
    width: 391.42,
    height: 232.75,
    left: 22,
    top: 686.35,
    transform: [{ rotate: '-26.29deg' }],
  },
  header: {
    position: 'absolute',
    width: 78,
    height: 32,
    left: 16,
    top: 68,

    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 32,
    color: '#293C32',    
  },
  title: {
    position: 'absolute',
    width: 147,
    height: 21,
    left: 16,
    top: 100,

    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    color:'#97A98F',
  },
  head: {
    position: 'absolute',
    width: 34.82,
    height: 48.96,
    left: '21.9%',
    right: '68.81%',
    top: '24.63%',
    bottom: '69.34%',
    transform: [
      {
        matrix: [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    ],
  },
  body: {
    position: 'absolute',
    width: 123.07,
    height: 297.96,
    left: '10.13%',
    right: '57.05%',
    top: '29.71%',
    bottom: '2.62%',
    transform: [
      {
        matrix: [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    ],
  },
  hearts: {
    position: 'absolute',
    width: 282,
    height: 262.48,
    left: 0,
    top: 0,
  },
  boxArrow: {
    position: 'absolute',
    display: 'flex',
    width: 44,
    height: 32,
    left: 247,
    top: 78,
    borderRadius: 16,
    paddingLeft: 10,
    alignContent: 'space-between',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  textIcon: {
    position: 'relative',
    width: 5,
    height: 15,
    marginLeft: 16,
    marginBottom:7
  },
  thunderbolt: {
    position: 'absolute',
    marginLeft:9.3,
    background: '#293C32',
    transform: [{ rotate: '15deg' }],
  },
  bmiBox: {},
  bmiArrow: {
    position: 'absolute',
    width: 16,
    height: 10,
    left: 236.61,
    top: 195.04,
  },
  bmi_1: {
    position: 'absolute',
    width: 17.16,
    height: 38.81,
    left: 214,
    top: 202.19,
  },
  bmi_2: {
    position: 'absolute',
    width: 30.38,
    height: 24.99,
    left: 227.04,
    top: 178.67,
  },
  bmi_3: {
    position: 'absolute',
    width: 34.5,
    height: 10.05,
    left: 258.75,
    top: 175,
  },
  bmi_4: {
    position: 'absolute',
    width: 30.38,
    height: 24.99,
    left: 294.58,
    top: 178.67,
  },
  bmi_5: {
    position: 'absolute',
    width: 17.16,
    height: 38.81,
    left: 320.84,
    top: 202.19,
  },
  whrArrow: {
    position: 'absolute',
    width: 16,
    height: 10,
    left: 268,
    top: 356,
  },
  whr_1: {
    position: 'absolute',
    width: 33.28,
    height: 56.67,
    left: 214,
    top: 359.33,
  },
  whr_2: {
    position: 'absolute',
    width: 58.52,
    height: 14.26,
    left: 246.74,
    top: 350,
  },
  whr_3: {
    position: 'absolute',
    width: 33.28,
    height: 56.67,
    left: 304.72,
    top: 359.33,
  },
  avatar: {
    position: 'absolute',
    width: 54,
    height: 54,
    left: 302,
    top: 67,

    backgroundColor: "#fff",
    borderRadius: 50,
  },
  avatarIcons: {
    position: 'absolute',
    width: 33.1,
    height: 33.1,
    left: 312.45,
    top: 77.45,
  },
  bmiNum: {
    position:'absolute',
    width: 60,
    height: 40,
    left: 247,
    top: 209,

    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 40,
    textAlign:'center',
    color:'#293C32',
  },
  bmiText: {
    position: 'absolute',
    width: 28,
    height: 21,
    left: 261,
    top: 246,

    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    textAlign:'center',
    color:'#293C32',
    
  },
  bmiBoxParameter: {
    position: 'absolute',
    width: 86,
    height: 28,
    left: 233,
    top: 275,
    justifyContent:'center',
    backgroundColor: '#EEF3DF',
    borderRadius: 16,
  },
  bmiParameter: {
    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
    textAlign:'center',
    color:'#8FBD12',
  },
  whrNum: {
    position:'absolute',
    width: 62,
    height: 40,
    left: 246,
    top: 384,

    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 40,
    textAlign:'center',
    color:'#293C32',
  },
  whrText: {
    position: 'absolute',
    width: 36,
    height: 21,
    left: 258,
    top: 421,

    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    textAlign:'center',
    color:'#293C32',
  },
  whrBoxParameter: {
    position: 'absolute',
    width: 86,
    height: 28,
    left: 233,
    top: 450,
    justifyContent:'center',
    backgroundColor: '#FFF0D2',
    borderRadius: 16,
    opacity: 0.8,
  },
  whrParameter: {
    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
    textAlign:'center',
    color:'#FDA901',
  },
  boxRisk: {
    position: 'absolute',
    width: 343,
    height: 144,
    top: 550,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    shadowColor: '#0DA0AA8B',
  },
  boxRiskText: {
    padingTop:16,
    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 26,
    textAlign:'center',
    color:'#293C32',
  },
  boxRiskLevel: {
    fontFamily: 'RedHatDisplay',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    textAlign:'center',
    color:'#B7B232',
  },
  boxRiskScale: {
  },
  boxRiskArrow: {
    marginRight:80,
  },
  boxRiskBtn: {
    position: 'absolute',
  },


});
