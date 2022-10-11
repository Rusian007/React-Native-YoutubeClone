import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Card({videoId, title, channel}) {
    const navigation = useNavigation()
    const playVideo = ()=>{
        navigation.navigate("VideoPlayer",{videoId:videoId,title:title,channel:channel})
    }

  return (
      <TouchableOpacity onPress={playVideo}>

      
    <View style={{margin:1 ,marginBottom:6}} >
        <Image 
        source={{uri:`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
        style={{
            width: "100%",
            height: 250
        }}
        />
        <View style={{
            flexDirection: "row",
            alignItems: "flex-start",
            margin: 6
        }}>
            <MaterialIcons name='account-circle' size={32} color={"white"} />
            <View style={{
                marginLeft: 10,
                width: Dimensions.get("screen").width-81,
                textAlign: "left"
            }} >
                <Text ellipsizeMode="tail" numberOfLines={2} style={{
                    fontSize: 18, color:"white"
                    
                }}> {title}</Text>
                <Text style={{color:"white"}}> {channel}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  );
}