import React, {Component} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View, Dimensions} from 'react-native';
import ProductIteam from './ProductIteam';


const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

export default class ProductView extends Component {

        constructor(Props) {
            super(Props);
            this.state = {
                isLoading: true,
                data: []
            }
        }
        
        componentDidMount () {
            return fetch('http://www.json-generator.com/api/json/get/cfHJYhONpe?indent=2')
                .then ( (response) => response.json())
                .then ( (responseJson) => {
                                this.setState({
                                isLoading: false,
                                data: responseJson,
                                })
                })
                .catch((error) => {console.log(error)});
        }

        renderItem = ({ item, i }) => {
            if (item.empty === true) {
              return <View style={[styles.ProductIteam, styles.itemInvisible]} />;
            }
            return (
              <ProductIteam 
                    picture={item.about}
                    title={item.name}
                />
            );
          };

    render() {
        
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )} else {
                 return <FlatList                           
                            data={formatData(this.state.data, 3)}
                            style={styles.ProductContainer}
                            renderItem={this.renderItem} 
                            keyExtractor={(item,i) => i.toString()}
                            numColumns='3'
                        />
    }
    }
}

const styles = StyleSheet.create({
    ProductContainer: {
        flex: 1,
        marginVertical: 20,
    },

    ProductIteam:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        height: (Dimensions.get('window').width / 3)-35,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },

      itemInvisible: {
        backgroundColor: 'transparent',
      },
  });