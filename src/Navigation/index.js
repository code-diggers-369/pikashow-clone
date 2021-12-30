import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screen views
import SplashScreen from '../View/SplashScreen';
import HomeScreen from '../View/HomeScreen';
import BollyWoodScreen from '../View/BollywoodScreen';
import HistoryScreen from '../View/HistoryScreen';
import HollywoodScreen from '../View/HollywoodScreen';
import LiveTvScreen from '../View/LiveTvScreen';
import SeriesScreen from '../View/SeriesScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 3000);
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* splash screen */}
        {isSplashScreenVisible ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
        {/* home screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        {/* bolywood screen */}
        <Stack.Screen
          name="Bollywood"
          component={BollyWoodScreen}
          options={{headerShown: false}}
        />
        {/* hollywood screen */}
        <Stack.Screen
          name="Hollywood"
          component={HollywoodScreen}
          options={{headerShown: false}}
        />
        {/* series screen */}
        <Stack.Screen
          name="Series"
          component={SeriesScreen}
          options={{headerShown: false}}
        />
        {/* live tv screen */}
        <Stack.Screen
          name="Livetv"
          component={LiveTvScreen}
          options={{headerShown: false}}
        />
        {/* history screen */}
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
