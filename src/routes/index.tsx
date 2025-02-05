import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { List } from "../screens/List";

const Stack = createNativeStackNavigator()

export function Routes () {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="List" component={List}  options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}