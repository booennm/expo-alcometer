import { useState } from 'react';
import { Text, ScrollView, View, TextInput, Alert, Pressable, Switch, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import styles from './styles/Styles';

export default function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState();
  const [beer, setBeer] = useState();
  const [hours, setHours] = useState();
  const [bac, setBac] = useState(0);

  function calculate() {
    if(weight > 0) {

      let litres = beer * 0.33;
      let grams = litres * 8 * 4.5;
      let burnRate = weight / 10;

      grams = grams - burnRate * hours;

      let result = 0;
      if(gender == 'male') {
        result = grams / (weight * 0.7);
      }else if(gender == 'female') {
        result = grams / (weight * 0.6);
      }

      if(result < 0) {
        result = 0;
      }

      setBac(result.toFixed(2));

    }else {
      Alert.alert(
        "Incorrect weight",
        "Please input a weight larger than 0",
        [
          {
            text: 'OK',
            onPress: () => console.log("OK")
          }
        ]
      );
    }
  }

  return (
    
    <ScrollView>
    {darkmode &&
    <View style={styles.containerDark}>
      <View style={styles.headerDark}>
        <Text style={styles.hTextDark}>Alcometer</Text>
        <Image
          style={styles.switchImg}
          source={require("./assets/icons8-day-and-night-32.png")}
        />
        <Switch
          value={darkmode}
          onValueChange={e => setDarkmode(e)}
          thumbColor='#4AF7BE'
          trackColor={{false: "black", true: '#fff5f2'}}
          style={styles.switch}
        />
      </View>

      <View style={styles.options}>
        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
          <View style={styles.radio}>
            <RadioButton 
              value='male'
              color='#4AF7BE'
              uncheckedColor='#4AF7BE'
            />
            <Text style={styles.radioTextDark}>MALE</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value='female'
              color='#4AF7BE'
              uncheckedColor='#4AF7BE'
            />
            <Text style={styles.radioTextDark}>FEMALE</Text>
          </View>
        </RadioButton.Group>
        
        <View style={styles.inputView}>
          <Text style={styles.inputTextDark}>WEIGHT</Text>
          <TextInput 
            keyboardType='number-pad'
            value={weight}
            onChangeText={setWeight}
            style={styles.inputDark}
          />
        </View>
      </View>

      <Text style={styles.numInputTextDark}>BEER BOTTLES</Text>
      <View style={{backgroundColor: '#444444'}}>
      <NumericInput
        textColor='white'
        onChange={e => setBeer(e)}
        totalWidth={300}
        totalHeight={70}
        leftButtonBackgroundColor='#4AF7BE'
        rightButtonBackgroundColor='#4AF7BE'
        borderColor='#4AF7BE'
        minValue={0}
      />
      </View>

      <Text style={styles.numInputTextDark}>HOURS</Text>
      <View style={{backgroundColor: '#444444'}}>
        <NumericInput
          textColor='white'
          onChange={e => setHours(e)}
          totalWidth={300}
          totalHeight={70}
          leftButtonBackgroundColor='#4AF7BE'
          rightButtonBackgroundColor='#4AF7BE'
          borderColor='#4AF7BE'
          minValue={0}
        />
      </View>

      {bac < 0.5 &&
        <Text style={styles.resultGood}>{bac}</Text>
      }
      {bac >= 0.5 && bac < 3 &&
        <Text style={styles.resultOk}>{bac}</Text>
      }
      {bac >= 3 &&
        <Text style={styles.resultBad}>{bac}</Text>
      }

      <Pressable 
        onPress={calculate}
        style={styles.buttonDark}
      >
        <Text style={styles.buttonText}>CALCULATE</Text>
      </Pressable>

    </View>
    }

    {!darkmode &&
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hText}>Alcometer</Text>
        <Image
          style={styles.switchImg}
          source={require("./assets/icons8-day-and-night-32.png")}
        />
        <Switch
          value={darkmode}
          onValueChange={e => setDarkmode(e)}
          thumbColor='#4AF7BE'
          trackColor={{false: "black", true: '#fff5f2'}}
          style={styles.switch}
        />
      </View>

      <View style={styles.options}>
        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
          <View style={styles.radio}>
            <RadioButton 
              value='male'
              color='#F76D4A'
              uncheckedColor='#F76D4A'
            />
            <Text style={styles.radioText}>MALE</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value='female'
              color='#F76D4A'
              uncheckedColor='#F76D4A'
            />
            <Text style={styles.radioText}>FEMALE</Text>
          </View>
        </RadioButton.Group>
        
        <View style={styles.inputView}>
          <Text style={styles.inputText}>WEIGHT</Text>
          <TextInput 
            keyboardType='number-pad'
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
          />
        </View>
      </View>

      <Text style={styles.numInputText}>BEER BOTTLES</Text>
      <View style={{backgroundColor: '#FFFFFF'}}>
      <NumericInput 
        onChange={e => setBeer(e)}
        totalWidth={300}
        totalHeight={70}
        leftButtonBackgroundColor='#F76D4A'
        rightButtonBackgroundColor='#F76D4A'
        iconStyle={{color: '#FFFFFF'}}
        borderColor='#fff5f2'
        minValue={0}
      />
      </View>

      <Text style={styles.numInputText}>HOURS</Text>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <NumericInput
          onChange={e => setHours(e)}
          totalWidth={300}
          totalHeight={70}
          leftButtonBackgroundColor='#F76D4A'
          rightButtonBackgroundColor='#F76D4A'
          iconStyle={{color: '#FFFFFF'}}
          borderColor='#fff5f2'
          minValue={0}
        />
      </View>

      {bac < 0.5 &&
        <Text style={styles.resultGood}>{bac}</Text>
      }
      {bac >= 0.5 && bac < 3 &&
        <Text style={styles.resultOk}>{bac}</Text>
      }
      {bac >= 3 &&
        <Text style={styles.resultBad}>{bac}</Text>
      }

      <Pressable 
        onPress={calculate}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CALCULATE</Text>
      </Pressable>

    </View>
    }
    </ScrollView>
  );
}
