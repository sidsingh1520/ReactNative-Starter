import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen=()=>{
    const friends=[
        {name:'Friend1',age:'30'},
        {name:'Friend2',age:'35'},
        {name:'Friend3',age:'35'},
        {name:'Friend4',age:'34'},
        {name:'Friend5',age:'30'},
        {name:'Friend6',age:'34'},
        {name:'Friend7',age:'30'},
    ];
    return(
        <FlatList 
        keyExtractor={(friend)=> friend.name}
        data={friends}
        renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name}-Age {item.age}</Text>;
        }}
        />
    );
};
const styles=StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});
export default ListScreen;