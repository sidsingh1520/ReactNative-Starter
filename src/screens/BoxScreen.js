import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen=()=>{
    return(
        <View style={styles.viewStyle}>
            <View>
            <Text style={styles.textOneStyle}>APP</Text>
            </View>
            <View style={styles.textTwoStyle} />
            <View style={styles.textThreeStyle} />
            <View style={styles.textFourStyle} />
        </View>
    )
};

const styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        alignSelf:'center',
    },
    textTwoStyle:{
        backgroundColor:'green',
        borderColor:'green',
        height:100,
        width:100
    },
    textThreeStyle:{
        backgroundColor:'blue',
        borderColor:'blue',
        height:100,
        width:100,
        alignSelf:'center'
    },
    textFourStyle:{
        backgroundColor:'red',
        borderColor:'red',
        height:100,
        width:100,
        alignSelf:'flex-end',
        position:'absolute',
        marginTop:22
    }
});

export default BoxScreen;