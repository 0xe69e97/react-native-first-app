import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

// import Login from './pages/login/login'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen12311</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
// export default class Index extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//     }
//   }
//   render () {
//     return(
//       <Navigator
//         initialRoute={{
//           component: Login,
//           title: 'My Initial Scene',
//         }}
//         style={{flex: 1}}
//       />
//     )
//   }
// }

// var styles = StyleSheet.create({
// })
