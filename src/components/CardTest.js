import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import{ Card} from 'react-native-elements'

const CardTest=({title,img_uri})=>{
    return(
        <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
            backgroundColor:'#f0f0f3',
            flex:1,
            elevation:1,
            shadowColor:'#f0f0f3'
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={{
              uri:{img_uri}
            }}
          />
          <Card.Title>{title}</Card.Title>
        </View>
      </Card>
    )
};

const styles=StyleSheet.create({});
export default CardTest;