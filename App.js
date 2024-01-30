import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Laskin from "./screens/Laskin";
import NumeroArvaus from "./screens/NumeroArvaus";
import Ostoslista from "./screens/Ostoslista";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Laskin" component={Laskin} />
        <Tab.Screen name="Numero Arvaus" component={NumeroArvaus} />
        <Tab.Screen name="Ostoslista" component={Ostoslista} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
