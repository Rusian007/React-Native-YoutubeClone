import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Entypo} from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';


import { StatusBar } from 'expo-status-bar';

export default function Header() {
  const navigation = useNavigation()

  return (
    <View style={{
      height: 51,
      backgroundColor: "#ffa400",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      elevation: 6,
      marginTop:Constant.statusBarHeight
    }}>
             <StatusBar backgroundColor="#ffa400" barStyle="light-content" />

      <View style={{
        flexDirection: "row",
        margin: 5,
        padding: 5,
        alignItems: "center"
      }}>
        <Entypo style={{
          marginLeft: 18
        }} name='youtube' size={24} color="red" />

        <Text style={{
          fontSize: 19,
          marginLeft: 10,
          fontWeight: "bold",
          fontFamily: "monospace"
        }}>YellowTube</Text>              

      </View>
      <View style={{
        flexDirection: "row"
      }} >
      <Ionicons onPress={()=>navigation.navigate("search")} name="ios-search-circle" size={27} color="black" />
      <Ionicons style={{marginRight: 20, marginLeft: 20}} name="ios-sunny-sharp" size={25} color="black" />
      </View>
      
    </View>
  )
}
