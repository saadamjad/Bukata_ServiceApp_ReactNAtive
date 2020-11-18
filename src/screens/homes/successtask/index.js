import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalButton from '../../../components/buttons/globalbutton';
import {theme} from '../../../constants/theme';

const App = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg7.png')}
      style={{width: '100%', height: '100%', flex: 1}}
      resizeMode="cover">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 0.5,
            //   backgroundColor: 'gray',
            width: '85%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View>
            <AntDesign
              name="checkcircleo"
              size={80}
              color={theme.iconsColor.white}
            />
          </View>
        </View>

        {/* +++++++++++++ center View ++++++++ */}

        <View
          style={{
            flex: 0.5,
            //   backgroundColor: 'pink',
            alignItems: 'center',
            width: '85%',

            alignSelf: 'center',
          }}>
          <View style={{marginVertical: 25}}>
            <Text
              style={{
                fontSize: 30,
                // fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
                color: theme.textColors.orange,
              }}>
              SUCCESS
            </Text>
          </View>

          {/* +++++++++++++++ thank you View+++++++++++ */}

          <View style={{marginVertical: 10, marginBottom: 20}}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'Roboto-Bold',
                letterSpacing: 1,
                color: theme.textColors.black,
              }}>
              Thank you for{'\n'}your request!
            </Text>
          </View>

          {/* +++++++++++++++++++paragraph +++++++++++++++++++ */}

          <View>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                fontFamily: 'Roboto-Thin',
                letterSpacing: 1,
                color: theme.textColors.black,
              }}>
              Your request has been published{'\n'}and you will be notified if
              offer{'\n'}is accepted by the sender
            </Text>
          </View>
        </View>
        {/* +++++++++++++++++++ button View ++++++++++++++++++ */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            //   backgroundColor: 'pink',
            flex: 0.3,
            marginVertical: 10,
          }}>
          <GlobalButton
            title={'DONE'}
            buttonTheme={'border'}
            buttonStyle={{width: 300}}
            onPress={() => _Continue2()}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;