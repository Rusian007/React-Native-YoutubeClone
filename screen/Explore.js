import React, {useState} from 'react'
import { ScrollView, Text, View , FlatList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';


const LittleCard=({name})=>{
  return(
    <View style={{
      backgroundColor:"#ffa400",
      width: 120,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center"
    }}>
      <Text style={{ 
        textAlign: "center",
        color: "white",
        fontSize: 22,
        marginTop: 6
        }}>{name}</Text>
    </View>
  )
}

export default function Explore() {
  const [results, setResults] = useState([]) 


  
  return (
    <View style={{fles:1 }} >
      <Header />

      <View style={{
        flexDirection:"row",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}>
      <LittleCard name="Gaming" />
      <LittleCard name="Chemistry" />
      <LittleCard name="Biology" />
      <LittleCard name="Facebook" />
      <LittleCard name="Astrology" />
      <LittleCard name="Science" />
      </View>

      <Text style={{
        color: "white",
        margin:8,
        fontSize:22,
        borderBottomWidth: 1,
        borderColor: "white"
      }}>
        Work in Progress ...
      </Text>
    

    </View>
  );
}
