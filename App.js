/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';
import ProductView from './components/ProductView';
import Menu from './components/Menu';
import {Container} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

  ButtonPress = () => {
    console.log('onPress');
  }

  render() {
        return (
            <View style={styles.Container}>
                <View style={styles.MainContainer}>
                    <View style={styles.MenuContainer}>
                            <Menu />
                      </View>
       
                      <View style={styles.FoodContainer}>
                        <View style={{flex: 3}}>
                            <ProductView /> 
                        </View>
                      </View>
                </View>

                <View style={styles.TabContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.ButtonPress}
                      >
                        <Text style={styles.TabButton}> Send The Order </Text>
                    </TouchableOpacity>
                </View>
            </View>
                );
              }
    }
          
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TabContainer: {
    flex: 0,
    height: 50,
    backgroundColor: 'skyblue',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  FoodContainer: {
    flex: 1,
  },
  ProductIteam:{
    flex: 3,
    flexDirection: 'row',
    width: 200,
    height: 200,
    padding: 5,
  },
  ProductIteamInner:{
    flex: 1,
    height: 200,
  },
  ProductView:{
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
 
  MenuContainer: {
    backgroundColor: '#FFF',
    width: 200,
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

  TabButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',

  },

});
