import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { Inicio, Buscar, Crear, Mensajes, Perfil } from "../pages";

export type BottomTabType = {
  Inicio: undefined;
  Buscar: undefined;
  Crear: undefined;
  Mensajes: undefined;
  Perfil: undefined;
};
export type TabPropsType<T extends keyof BottomTabType> = {
  navigation: BottomTabNavigationProp<BottomTabType, T>;
  route: RouteProp<BottomTabType, T>;
};

const BottomTab = createBottomTabNavigator<BottomTabType>();

export function BottomTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Inicio"
        component={Inicio}
      />
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
        name="Buscar"
        component={Buscar}
      />
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
        name="Crear"
        component={Crear}
      />
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
        name="Mensajes"
        component={Mensajes}
      />
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        name="Perfil"
        component={Perfil}
      />
    </BottomTab.Navigator>
  );
}
