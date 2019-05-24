import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { Button } from 'native-base';



export default class Menu extends Component {
    
    
    
    constructor(Props) {
          super(Props);
          this.state = {
              isLoading: true,
              data: [],
          }
      }
    
    componentDidMount () {
          return fetch('https://facebook.github.io/react-native/movies.json')
                .then ( (response) => response.json() )
                .then ( (responseJson) => {
    
                      this.setState({
                        isLoading: false,
                        data: responseJson.movies,
                      })
                })
                .catch((error) => {console.log(error)});
      } 
          
      renderItem = ({ item, i }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontSize: 15,}}>{item.title}</Text>
            </TouchableOpacity>
        );
      }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
          } else {
                return <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem} 
                            keyExtractor={(item,i) => i.toString()}
                
                        />
          }
    }
}
const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: 5,
        
    },
  
  });