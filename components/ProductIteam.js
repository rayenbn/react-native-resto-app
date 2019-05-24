import React from 'react';
import { StyleSheet, Image, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, View } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';


const ProductIteam = (props) => {

    return (
      <Container style={styles.ProductIteam}>
        <Content >
          <Card >
          
            <CardItem cardBody>
              <Image source={require ('./img1.jpg')} style={{height: 200, width:'100%'}} />
            </CardItem>
          
            <CardItem>
                <Left>
                <Text>25 dt</Text>
                </Left>
                  <Button transparent>
                    <Icon active name="minuscircle"  color="skyblue" style={{fontSize: 20}} />
                    <Text style={{fontSize: 20}}>10</Text>
                  </Button>
                    <Icon active name="pluscircle"  color="skyblue" style={{fontSize: 20}} />
            </CardItem>
            <CardItem footer bordered>
                <Text>{props.title}</Text> 
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  
  ProductIteam:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: (Dimensions.get('window').width / 3)-32,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    
  },

});
export default ProductIteam;