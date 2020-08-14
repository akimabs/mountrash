import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/auth/splash-screen';
import StartedScreen from '../screens/auth/started-screen';

import Home from '../screens/home';
import Awards from '../screens/awards';
import Rank from '../screens/rank';
import MyTeam from '../screens/my-team/';
import Community from '../screens/my-team/community';
import School from '../screens/my-team/school';
import DataSchool from '../screens/my-team/data-school';
import Point from '../screens/points';

function Private() {
  const StackNav: any = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="SplashScreen"
        headerMode="none">
        {/* Auth */}

        <StackNav.Screen
          name="StartedScreen"
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          component={StartedScreen}
        />
        <StackNav.Screen name="SplashScreen" component={SplashScreen} />

        {/* Home */}
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="Awards" component={Awards} />
        <StackNav.Screen name="Point" component={Point} />
        <StackNav.Screen name="MyTeam" component={MyTeam} />
        <StackNav.Screen name="Community" component={Community} />
        <StackNav.Screen name="School" component={School} />
        <StackNav.Screen name="DataSchool" component={DataSchool} />
        <StackNav.Screen name="Rank" component={Rank} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Private;
