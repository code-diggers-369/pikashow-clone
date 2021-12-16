import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screen views
import SplashScreen from '../View/SplashScreen';
import HomeScreen from '../View/HomeScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
