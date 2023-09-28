import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons} from '@expo/vector-icons'

import { Home } from './pages/home'
import { Passwords } from './pages/passwords'


const Tab = createBottomTabNavigator();

export function Routes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home} options={{headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size, color }) => {
                    if(focused){ //se a tab tiver selecionada
                        return <Ionicons size={size} color={color} name='home'/>
                    }

                    //se a tab nao tiver selecionada
                    return <Ionicons size={size} color={color} name='home-outline'/>
                }
            }}/>
            <Tab.Screen name='passwords' component={Passwords} options={{headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size, color }) => {
                    if(focused){ //se a tab tiver selecionada
                        return <Ionicons size={size} color={color} name='lock-closed'/>
                    }

                    //se a tab nao tiver selecionada
                    return <Ionicons size={size} color={color} name='lock-closed-outline'/>
                }
            }}/>
        </Tab.Navigator>
    );
}