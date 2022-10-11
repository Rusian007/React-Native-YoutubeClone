import React, {useState}  from 'react'
import { ScrollView, Text, View , Dimensions, StatusBar} from 'react-native';
import Constant from 'expo-constants'
import {WebView} from 'react-native-webview'
import Header from '../components/Header';

export default function VideoPlayerComponent({route}) {
  const [orientation, SetOrientation] = useState("portrait")
  const {videoId,title} = route.params
 // console.log(title)
 const isPortrait = () => {
  const dim = Dimensions.get('screen');
  
  return dim.height >= dim.width;
};

/**
* Returns true of the screen is in landscape mode
*/
const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

//Event Listener for orientation changes
  Dimensions.addEventListener('change', ()=>{
    if(isPortrait()) SetOrientation('portrait')
    else SetOrientation('landScape')
  })
  
    if (orientation === 'portrait') {
      return (
          //Render View to be displayed in portrait mode
          <View>
      <Header />

    <View style={{
      flex: 1,
      marginTop:1
    }}>
      
      <View style={{
        width: "100%",
        height: 250
       
      }}>

        <WebView javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: `https://www.youtube.com/embed/${videoId}`}} />
      </View>

     
      
    </View>



    <View>
      <Text 
      numberOfLines={2}
      ellipsizeMode="tail"
      style={{
        fontSize: 22,
        width: Dimensions.get("screen").width-50,
        color: "white",
        marginTop: 260
    
      }}>
        {title}
      </Text>
      </View>
      <View style={{
        borderBottomColor: "#ffa400",
        borderBottomWidth: 2,
        marginTop: 2
      }} />




    </View>
       );
    }

    else {
      return (
        //Render View to be displayed in landscape mode
    <View>
      <StatusBar hidden />
  
      <View style={{
        flex: 1,
        marginTop: 1
      }}>
        
        <View style={{
          width: "100%",
          height: Dimensions.get("screen").height
         
        }}>
  
          <WebView javaScriptEnabled={true}
          domStorageEnabled={true}
          
          source={{uri: `https://www.youtube.com/embed/${videoId}`}} />
        </View>  
  
        
        
        
        </View>
  
      </View>
      );
    }

}
