import React, {useState} from 'react'
import { Keyboard ,StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator,SafeAreaView, Dimensions, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';
import Suggesstions from '../components/Suggesstions';
import GetKey from '../key';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=56&q=music&type=video&key=AIzaSyApCtZt2PAN6-nWsbHobHl-PodPeVDsttE
export default function Search() {
  const navigation = useNavigation()
    const [text, setText] = useState("") 
    const [miniCardData, SetminiCardData] = useState([])
    const [loading, setLoading] = useState(false)
    const [suggesstions, SetSuggesstions] = useState([])

    const fetchData =()=>{
      let theKey = GetKey()
      setLoading(true)
      SetSuggesstions([])
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=51&q=${text}&type=video&key=${theKey}`)
      .then(res=>res.json())
      .then(data=>{
        //console.log(data)
        setLoading(false)
        SetminiCardData(data.items)
      })
    }

    const FetchSearchReasults=(theItemToSearch)=>{
      let theKey = GetKey()
      setLoading(true)
      SetSuggesstions([])
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=51&q=${theItemToSearch}&type=video&key=${theKey}`)
      .then(res=>res.json())
      .then(data=>{
        //console.log(data)
        setLoading(false)
        SetminiCardData(data.items)
      })
    }

    const searchFunc=(Thetext)=>{
     setText(Thetext)
     //`http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=${Thetext}&format=5&alt=json`
      
   fetch(`https://corsproxy.io/?http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=${Thetext}&format=5&alt=json`,{
      //mode: "no-cors",
      headers:{
        "access-control-allow-origin" : "*",
      }
     }).then(res=>res.json())
     .then(data=>SetSuggesstions(data[1]))
     //console.log(suggesstions)
    }
    const showSearch=(results)=>{
     // console.log(results)
    }
  return (
    <SafeAreaView >
    <View style={{ height: Dimensions.get("window").height }} >
        <View style={{
        padding: 9,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5,
        backgroundColor: "#ffa400", 
        height: 53,
        marginTop:Constant.statusBarHeight
        }}>
        
        <Ionicons name="md-arrow-back" size={30} onPress={()=> navigation.navigate("rootHome")} />
        <TextInput style={{
            width: "80%",
            backgroundColor: "black",
            color: "white",
            padding:5,
            fontSize:19,
            fontFamily: "monospace"
        }} value={text}
        keyboardType="default"
       
        onSubmitEditing={()=>{
          fetchData() // called only when multiline is false
      }} 
        onChangeText={searchFunc} />


    </View>
    {loading? <ActivityIndicator style={{margin:10}} size="large" color="#ffa400" />: null}
     
    <FlatList 
     data={suggesstions}
     renderItem={({item})=>{
       return <Suggesstions 
        text={item[0]}
        CallParentFetch={FetchSearchReasults}
       />
     }}
     
     />
  
    <FlatList 
    
     data={miniCardData}
     renderItem={({item})=>{
      
       return <MiniCard 
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
       />
      
     }}
     keyExtractor={item=>item.id.videoId}
     />
       
    </View>
    </SafeAreaView>
  );
}
