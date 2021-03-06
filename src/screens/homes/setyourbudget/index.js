import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GloballButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';
import {theme} from '../../../constants/theme';
import Toastmessage from '../../../components/toastmessage';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const App = (props) => {
  const [color, setColor] = useState('');
  const [budget, setBudget] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function _Post() {
    if (budget >= 1) {
      props.navigation.navigate('payment');
      setError(false);
      setError2(false);
    } else if (budget == '') {
      setError(true);
      setError2(true);
      // Toastmessage('Fill the Budget input', '', 'info');
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Budget" suggest="Set Your">
        {/* ==============width 85%==============  */}
        <View style={styles.widthView}>
          {/* ============budget============ */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.iconView}>
              <Fontisto name="dollar" size={18} color="white" />
            </View>
            <View>
              <Text style={styles.whatBudgettext}>
                {'  '}What's your Budget?
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              width: '100%',
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onFillColor={'blue'}
              onCheckColor="red"
              tintColors="red"
              onValueChange={(newValue) => {
                setToggleCheckBox(newValue);
              }}
            />
            <Text> Internation Delivery </Text>
          </View>

          <View
            style={{
              ...styles.offerView,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}>
            <Text style={styles.offerText}>Your Offer</Text>
            {/* ===============textinput============== */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {toggleCheckBox ? <Text style={{fontSize: 18}}>$ </Text> : null}
              <TextInput
                placeholder="0"
                placeholderTextColor={theme.textColors.placeholder}
                keyboardType={'number-pad'}
                onChangeText={(Btext) => {
                  setBudget(Btext);
                }}
                onFocus={() => setColor(true)}
                onBlur={() => setColor(false)}
                style={styles.Textinputbudget}
              />
            </View>
          </View>
          {/* ============warning============== */}
          <View
            style={{
              ...styles.warningView,
              backgroundColor: isError ? '#ffeeee' : null,
            }}>
            <Text style={styles.warningText}>
              {isError ? 'Please Fill the Budget input' : null}
            </Text>
          </View>
        </View>
        {/* =================button 85%============ */}
        <View style={styles.ButtonwidthView}>
          {/* ===================button main view============== */}
          <View style={styles.buttonmainView}>
            <GloballButton
              buttonTheme={'border'}
              title={'Preview'}
              buttonStyle={{borderRadius: 25}}
            />
            <GloballButton
              title={'Pay'}
              onPress={() => _Post()}
              buttonStyle={{width: 170, borderRadius: 25}}
            />
          </View>
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
    </ScrollView>
  );
};
export default App;
