import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animal from "../components/feature/animal/new";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Animal"}>
        <Stack.Screen name="Animal" component={Animal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
