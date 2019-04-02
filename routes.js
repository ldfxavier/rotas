import React from "react";
import { Text, View, Image, Platform, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import { NavigationActions, StackActions } from "react-navigation";

import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/FontAwesome5";

//pages
import Login from "./pages/login";
import Convenios from "./pages/convenios";
import ConveniosDetalhe from "./pages/conveniosDetalhe";
import Voucher from "./pages/voucher";
import Cashback from "./pages/cashback";
import CashbackDetalhe from "./pages/cashbackDetalhe";
import Mapa from "./pages/mapa";
import Promocoes from "./pages/promocoes";
import Perfil from "./pages/perfil";
import Indicacao from "./pages/indicacao";
import Termos from "./pages/termos";

const logout = async props => {
  await AsyncStorage.clear();

  let resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })]
  });
  props.navigation.dispatch(resetAction);
};

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: Platform.OS === "ios" ? 20 : 0
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50
          }}
          source={{
            uri:
              "https://s3.amazonaws.com/igd-wp-uploads-pluginaws/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg"
          }}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Lucas Xavier
        </Text>
      </View>
    </View>
    <DrawerItems {...props} />
    <TouchableOpacity
      onPress={() => {
        logout(props);
      }}
      style={{ padding: 5, paddingLeft: 18, flexDirection: "row" }}
    >
      <Icon name="sign-in-alt" size={20} color="#999" />
      <Text
        style={{
          color: "#666",
          fontWeight: "bold",
          marginLeft: 9,
          flex: 1
        }}
      >
        Sair
      </Text>
    </TouchableOpacity>
  </View>
);

const Stack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      drawerLabel: () => null
    }
  },
  Convenios: {
    screen: Convenios,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  ConveniosDetalhe: {
    screen: ConveniosDetalhe,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  Voucher: {
    screen: Voucher,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  Cashback: {
    screen: Cashback,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  CashbackDetalhe: {
    screen: CashbackDetalhe,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  Mapa: {
    screen: Mapa,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  },
  Promocoes: {
    screen: Promocoes,
    navigationOptions: {
      drawerLabel: () => null,
      header: null
    }
  }
});

const Drawer = createDrawerNavigator(
  {
    Stack: {
      screen: Stack,
      navigationOptions: {
        header: null,
        drawerLabel: () => null
      }
    },
    Perfil: {
      screen: Perfil,
      navigationOptions: {
        drawerIcon: () => <Icon name="user" size={20} color="#666" />
      }
    },
    Indicacao: {
      screen: Indicacao,
      navigationOptions: {
        title: "Indicação",
        drawerIcon: () => (
          <Icon name="hand-point-right" size={20} color="#666" />
        )
      }
    },
    Termos: {
      screen: Termos,
      navigationOptions: {
        drawerIcon: () => <Icon name="file-alt" size={20} color="#666" />
      }
    }
  },
  {
    drawerLockMode: "locked-closed",
    navigationOptions: {
      header: null
    },
    drawerWidth: 200,
    drawerPosition: "right",
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#666",
      inactiveTintColor: "#666",
      labelStyle: { marginLeft: -10, flex: 1 }
    }
  }
);

export default createAppContainer(Drawer);
