/**
 * Sample React Native Casino Roulette App 
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,

} from 'react-native';
import Roulette from 'react-native-casino-roulette';
import wheel from './images/unnamed.png';
import marker from './images/marker.png';


//Roulette numbers
const numbers = [1,2,3,4,5,6,7,8]
const options  = numbers.map((o)=>({index:o}))  
const customOptions = numbers.map((o)=> (
  <Text index={o}>{o}</Text>
));
export default class App extends Component {
  constructor(props){
    super(props);
    this.onRotate = this.onRotate.bind(this);
    this.onRotateChange = this.onRotateChange.bind(this);
    this.onRotateCustom = this.onRotateCustom.bind(this);
    this.onRotateCustomChange = this.onRotateCustomChange.bind(this);
    this.state={
      option:"Option selected:",
      optionCustom:"Option selected:",
      rouletteState:'stop',
      rouletteCustomState:'stop'
    }
  }
  render() {
    const{option, rouletteState, optionCustom, rouletteCustomState} = this.state
    return (

      <View style={{alignItems:"center"}}>

        <Image
                          source={require('./images/Tesco_Lotus_logo.png')}
                />
        <Text>
          {`Option selected: ${option}`}
        </Text>
        <Text>
          {`Roulette state: ${rouletteState}`}
        </Text>
        <Roulette 
                  enableUserRotate={rouletteState=='stop'} 
                  background={wheel}
                  onRotate={this.onRotate}
                  onRotateChange={this.onRotateChange}
                  marker={marker}
                  options={options}
                  markerWidth={20} >          
        </Roulette>




      </View>
    );
  }

  onRotateChange(state) {
    this.setState({
      rouletteState: state
    })
  }

  onRotate(option) {
    
    this.setState({
      option:option.index
    })
  }

  onRotateCustomChange(state) {
    this.setState({
      rouletteCustomState: state
    })
  }

  onRotateCustom(option) {
    
    this.setState({
      optionCustom:option.props.index
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c92424',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


