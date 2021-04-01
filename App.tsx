/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  NativeModules,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {TestModule} = NativeModules;

const Header = () => {
  return (
    <View style={styles.sectionHeader}>
      <Text> BMI CALCULATOR </Text>
    </View>
  );
};

const InputSection = () => {
  const [height, onChangeHeight] = useState('');
  const [weight, onChangeWeight] = useState('');
  const [bmiResult, updateBMIMessage] = useState<string | null>(null);
  const [clsCode, updateClsCode] = useState<{} | null>(null);

  const handleButtonPress = () => {
    const bmi = calculateBMI(Number(height), Number(weight));
    console.log(bmi);
    console.log(getMessage(bmi));
    updateBMIMessage(getMessage(bmi));
    updateClsCode(getClass(bmi));
    // TestModule.testMethod();
  };

  function calculateBMI(h: number, w: number): number {
    return w / (h * h);
  }

  function getMessage(bmi: number): string {
    if (bmi > 30) {
      return 'Obese';
    } else if (bmi > 25) {
      return 'Overweight';
    } else if (bmi > 18.5) {
      return 'Normal';
    } else {
      return 'Underweight';
    }
  }

  type Background = {
    backgroundColor: string;
  };

  function getClass(bmi: number): Background {
    if (bmi > 30) {
      return styles.error;
    } else if (bmi > 25) {
      return styles.warning;
    } else if (bmi > 18.5) {
      return styles.success;
    } else {
      return styles.warning;
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHeight}
        value={height}
        placeholder="Height"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Weight"
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <View>
            <Text style={{color: '#fff'}}> Get BMI</Text>
          </View>
        </TouchableOpacity>
      </View>
      {bmiResult && (
        <View style={[styles.resultContainer, clsCode]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            {' '}
            {bmiResult}{' '}
          </Text>
        </View>
      )}
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <InputSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 50,
  },
  success: {
    backgroundColor: '#e5eed3',
  },
  warning: {
    backgroundColor: '#ffc107',
  },
  error: {
    backgroundColor: '#dc3545',
  },
});

export default App;
