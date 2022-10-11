import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function Suggesstions(props) {
  const onPress=()=>{
    props.CallParentFetch(props.text)
  }
  return (
    <TouchableOpacity
        onPress={onPress}
      >
        
    <View style={{
        flexDirection:"row", 
        alignContent:"center", 
        alignItems:"center",
        margin: 5,
        marginBottom:0
        }} >
        <EvilIcons style={{
            margin: 8
        }} name="arrow-right" size={20} color="#ffa400" />
      <Text style={{
          color:"white",
          fontSize: 20,
          margin: 8
          }}> 
        {props.text}
      </Text>
      
    </View>

      </TouchableOpacity>
  );
}
