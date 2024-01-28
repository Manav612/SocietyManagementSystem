import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileStack from './ProfileStack';
import Home from '../screens/HomeScreen/Home';
import SocietyMembers from '../screens/Members/members';
import Notice from '../screens/NoticeBoard/NoticeBoard';
import Visitor from '../screens/Visitor/Visitor';
import Payment from '../screens/Payment/Payment';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Create a stack navigator for the Members screen
const MembersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Members" component={SocietyMembers} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};
const VisitorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Visitor" component={Visitor} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};
const NoticeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="NoticeBoard" component={Notice} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};
const PaymentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          color: '#000',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={26} color={'#000'} />;
        },
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home">
        {() => (
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="MembersStack" component={MembersStack} />
            <Stack.Screen options={{ headerShown: false }} name="VisitorStack" component={VisitorStack} />
            <Stack.Screen options={{ headerShown: false }} name="NoticeStack" component={NoticeStack} />
            <Stack.Screen options={{ headerShown: false }} name="PaymentStack" component={PaymentStack} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
