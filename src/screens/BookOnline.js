import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import Card from '../components/Card';
const BookOnline=({navigation})=>{
    return(
        <View style={{marginTop:150,backgroundColor:'#E5E5E5',flex:1}}>
            <View style={{backgroundColor:'#E5E5E5',justifyContent:'space-evenly',flexDirection:'row',marginVertical:20}}>
                
                <Card>
                    <Image style={{alignSelf:'center',height:30,width:30,marginTop:32}} source={require('/Users/siddharthasingh/Documents/React-Native/rn-starter/assets/Diet.jpg')}/>
                    <Text style={[style=styles.text,{alignSelf:'center',marginTop:70}]}>Diet</Text>
                </Card>
                <Card>
                    <Text style={[style=styles.text,{alignSelf:'center',marginTop:70}]}>Diet</Text>
                </Card>
            </View>
            <View style={{backgroundColor:'#E5E5E5',justifyContent:'space-evenly',flexDirection:'row',marginVertical:20}}>
                <Card>
                    <Text style={[style=styles.text,{alignSelf:'center',marginTop:70}]}>Diet</Text>
                </Card>
                <Card>
                    <Text style={[style=styles.text,{alignSelf:'center',marginTop:70}]}>Diet</Text>
                </Card>
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    text:{
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:14,
        letterSpacing:0.01,
        color:'black'
    }
});

export default BookOnline;