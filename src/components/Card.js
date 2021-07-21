import React from 'react';
import { View,Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#f0f0f3',
    borderBottomWidth: 0,
    shadowColor: '#f0f0f3',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width:111,
    height:111,
    backgroundColor:'#f0f0f3',
    borderRadius:15
  }
};

export default Card;