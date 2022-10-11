import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screen/Home'
import { NavigationContainer,DefaultTheme, DarkTheme, StackActions } from '@react-navigation/native';
import Search from './screen/Search';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayerComponent from './screen/VideoPlayer';
import Explore from './screen/Explore'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';



const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
 
export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Gemunu Libre': require('./assets/fonts/GemunuLibre-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } 
  onLayoutRootView()
  const RootHome=()=>{
    return(
      <Tabs.Navigator initialRouteName='home' screenOptions={{ headerShown: false, tabBarActiveTintColor: '#ffa400' }} >
        <Tabs.Screen 
        name='home' 
        
        component={Home} 
        options={{
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)}}/>

        <Tabs.Screen 
        name='explore' 
        component={Explore}
        options={{
          tabBarIcon: ({color, size}) => (<MaterialIcons name="explore" size={size} color={color} />)
      }}
      
      /> 
      </Tabs.Navigator>
    )
  }  

  return (
 <NavigationContainer theme={DarkTheme}>

        <Stack.Navigator screenOptions={{ headerShown: false }} >
          
          <Stack.Screen screenOptions={{ headerShown: false }} name="rootHome" component={RootHome} />
          
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerComponent} />
        </Stack.Navigator>
      </NavigationContainer> 

   
  );
}
