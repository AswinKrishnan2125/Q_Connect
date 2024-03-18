import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Loginpage,Signup,DashboardScreen,MindCare,Dr_chat} from './Components';
function SignupPage() {
  return (
    <View style={styles.container}>
      <Text>Signup Page</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="Dash" component={DashboardScreen} />
        <Stack.Screen name="MindCare" component={MindCare} />
        <Stack.Screen name="Dr_chat" component={Dr_chat}  options={({ route }) => ({ title: route.params.userName || 'Dr_chat' })}/>

        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
