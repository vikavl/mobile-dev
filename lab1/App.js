import React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Text, TextInput, FlatList, StatusBar, Alert } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Separator = () => (
  <View style={styles.separator} />
);

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={50}
    />
  );
}

const colorList = [
{
  label: 'red',
  color: '#f00',
 },
 {
  label: 'green',
  color: '#0f0',
 },
 {
  label: 'blue',
  color: '#00f',
 },
 {
  label: 'pink',
  color: '#f0f',
 },
 {
  label: 'yellow',
  color: '#ff0',
 }
];

const priceList = [
{
  label: '100',
 },
 {
  label: '200',
 },
 {
  label: '300',
 },
 {
  label: '400',
 },
 {
  label: '500',
 }
];

var colorCode = '';
var colorLabel = '';
var price='';

const App = () => {
  const [value, onChangeText] = React.useState('');
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!value.trim()) {
      Alert.alert('Please enter name of flower!');
      return;}
    else if (window.colorLabel==null) {
      Alert.alert('Please choose color!');
      return;}
    else if (window.price==null) {
      Alert.alert('Please choose price!');
      return;}
    Alert.alert(
      'Your order!',
      'flower: ' + value + ' \ncolor: ' + window.colorLabel + ' \nprice: ' + window.price
    )}

  const onButtonClick = () => {
    onChangeText('')
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Flower Shop</Text>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Enter name of flower:
        </Text>
        <UselessTextInput
          style={styles.text}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Clear field"
          color="#ad1720"
          onPress={onButtonClick}
        />
      </View>
    <Separator />
    <Separator />
      <View style={styles.fixToText}>
        <View style={styles.radio1}>
          <Text style={styles.title}>
            Color:
          </Text>
          <RadioButtonRN
            data={colorList}
            selectedBtn={(e) => 
              {
                window.colorCode=e.color
                window.colorLabel=e.label
                console.log(e)}}
            icon={
              <Icon
                name="check-circle"
                size={20}
                color={window.colorCode}
              />
            }
          />
        </View>
				<View style={styles.radio2}>
          <Text style={styles.title}>
            Price: 
          </Text>
          <RadioButtonRN
            data={priceList}
            selectedBtn={(e) => 
              {
                window.price=e.label
                console.log(e)}}
            icon={
              <Icon
                name="check-circle"
                size={20}
                color='#000'
              />
            }
          />
        </View>	    
      </View>
      <Separator />
      <Separator />
      <View>
        <Button
          title="Check order"
          color="#5b2cc4"
          onPress={checkTextInput}
        />
      </View>
      <Separator />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#a9d83b',
  },
  h1: {
    fontSize: 25,
    color: '#5b2cc4',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    marginVertical: 4,
    fontSize: 16,
    color: '#000'
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#5b2cc4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 18,
    borderBottomColor: '#000000',
    height: 30,
    color: '#5b2cc4',
    backgroundColor: '#dadbd7',
  },
  radio1: {
    marginVertical: 2,
    width: '45%',
  },
  radio2: {
    marginVertical: 2,
    width: '45%'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
