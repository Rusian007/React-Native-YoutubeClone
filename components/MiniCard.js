import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MiniCard(props) {
  const navigation = useNavigation()
  const playVideo = ()=>{
    navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title})
}

  return (
    <TouchableOpacity onPress={playVideo}>
      <SafeAreaView>
    <View style={{flexDirection:"row", margin:8}}>
       <Image 
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={{
            width: "45%",
            height: 100
        }}
        />
        <View style={{paddingLeft: 10}}>
            <Text style={{
                fontSize:16,
                color: "white",
                width: Dimensions.get("screen").width/2
            }} ellipsizeMode="tail" numberOfLines={3}>
            {props.title}
            </Text>
            <Text style={{fontSize:12, color: "white"}} >{props.channel}</Text>
        </View>
    </View>
    </SafeAreaView>
    </TouchableOpacity>
  );
}
