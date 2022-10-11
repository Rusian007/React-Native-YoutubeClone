import React,{ useState, useEffect }  from 'react'
import { FlatList, Text, View ,ActivityIndicator , ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card'
import GetKey from '../key';

export default function Home({navigation}) {
  const [videos, SetVideos] = useState([])
  const [loading, setLoading] = useState(false)
  const words = ["food", "korean food", "bangladeshi fruits", "bangla Natok", "islam is the best", "history of rasidun Chaliphate", "Allah" ];

  const randomWord = Math.floor(Math.random() * words.length);
 // console.log(randomWord, words[randomWord]);
  const fetchData=()=>{
    setLoading(true)
      let theKey = GetKey()
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=23&q=${words[randomWord]}&type=video&videoCaption=closedCaption&key=${theKey}`)
      .then(res=>res.json())
      .then(data=>{
       //console.log(data)
        setLoading(false)
        SetVideos(data.items)
      })
  }
  useEffect(() => {
    fetchData()
  },[]);
  
  return (
    <View  style={{flex: 1}}>

      <Header />
      
    {loading? <ActivityIndicator style={{margin:10}} size="large" color="#ffa400" />: null}
     
     
    <FlatList 
    
    data={videos}
    renderItem={({item})=>{
      return <Card 
       videoId={item.id.videoId}
       title={item.snippet.title}
       channel={item.snippet.channelTitle}
      />
     
    }}
    keyExtractor={item=>item.id.videoId}
    />
      
      
    </View>
  );
}
