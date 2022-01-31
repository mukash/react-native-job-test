import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
  TextStyle,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [operator1, setOperator1] = useState('');
  const [operator2, setOperator2] = useState('');
  const [operand, setOprand] = useState('');
  const [result, setResult] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const calculateValue = (op1: any, op2: any, operand: any) => {
    // to check if empty
    if (op1 !== '' && op2 !== '' && operand !== '') {
      if (
        operand === '+' ||
        operand === '-' ||
        operand === '-' ||
        operand === '*' ||
        operand === '/'
      ) {
        // eslint-disable-next-line no-eval
        let temp = eval(`${op1} ${operand} ${op2}`); // calulates values pprovided in string to make to logic precise
        setResult(temp);
      }
      //if mode
      else if (operand === '%') {
        let temp = String(op1 % op2);
        setResult(temp);
      } else {
        Alert.alert('Please provide valid operand');
      }
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="First operator e.g 1, 2, 3"
          style={styles.formInput}
          onChangeText={val => setOperator1(val)}
          placeholderTextColor="#8c8888"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Second operator e.g 1, 2, 3"
          style={styles.formInput}
          onChangeText={val => setOperator2(val)}
          placeholderTextColor="#8c8888"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Operand e.g +, -, *, /, %"
          style={styles.formInput}
          onChangeText={val => setOprand(val)}
          placeholderTextColor="#8c8888"
        />
      </View>
      <TouchableOpacity
        onPress={() => calculateValue(operator1, operator2, operand)}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text style={{...styles.textCol, ...styles.resultVal}}>
          Result : {result === '' ? 0 : result}
        </Text>
      </View>
    </SafeAreaView>
  );
};
interface Style {
  container: ViewStyle;
  textCol: TextStyle;
  inputWrapper: ViewStyle;
  formInput: ViewStyle;
  appButtonContainer: ViewStyle;
  appButtonText: ViewStyle;
  result: ViewStyle;
  resultVal: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E5E5E5',
  },
  textCol: {
    color: '#000000',
    fontFamily: 'GothicA1-Regular',
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#a39d9d',
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 8,
  },

  formInput: {
    height: 55,
    fontSize: 16,
    paddingLeft: 10,
    color: '#000000',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  result: {marginTop: 20},
  resultVal: {fontSize: 18, fontWeight: 'bold'},
});
export default App;
