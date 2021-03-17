import React, {Component} from 'react';
import { AppRegistry, View, Button, Alert } from 'react-native';
 
class RadioButton extends Component {
 
  HelloFunction() {
 
    Alert.alert('Hello !!!')
 
  }
 
  render() {
    return (
<View style={{flex :1, justifyContent: 'center', margin: 15 }}>
 
  <View style={{marginTop: 15}}>
 
        <Button onPress={ this.HelloFunction } title="BUTTON 1" color="#F44336" />
 
  </View>
 
  <View style={{marginTop: 15}}>
 
        <Button onPress={ this.HelloFunction } title="BUTTON 2" color="#E91E63" />
 
  </View>
 
  <View style={{marginTop: 15}}>
 
        <Button onPress={ this.HelloFunction } title="BUTTON 3" color="#9C27B0" />  
 
  </View>             
 
</View>
    );
  }
}
 
AppRegistry.registerComponent('RadioButton', () => RadioButton);