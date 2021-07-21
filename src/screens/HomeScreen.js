import React from "react";
import { Text, StyleSheet,View,Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen =({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
      onPress={()=>navigation.navigate('Components')}
      title="Go to Components Demo"
      />
      <Button
      title="Go to list Demo"
      onPress={()=>navigation.navigate('List')}
      />
      <Button 
      onPress={()=>navigation.navigate('Image')}
      title="Go to Image Screen"
      />
      <Button 
      onPress={()=>navigation.navigate('Counter')}
      title="Go to Counter Screen"
      />
      <Button 
      onPress={()=>navigation.navigate('Color')}
      title="Go to Color Screen"
      />
      <Button 
      onPress={()=>navigation.navigate('Square')}
      title="Go to Square Screen"
      />
      <Button 
      onPress={()=>navigation.navigate('Text')}
      title="Go to Text Screen"
      />
      <Button 
      onPress={()=>navigation.navigate('Book')}
      title="Go to Book Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35
  }
});

export default HomeScreen;