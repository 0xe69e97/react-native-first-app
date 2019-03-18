import React, { Component } from "react";

import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";


export default class UserLogin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loaded: false
    }
  }
  onLogin () {
    Alert.alert('登录')
  }
  onRegister () {
    Alert.alert('注册')
  }
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>患者问诊系统</Text>
        <View style={styles.inputGround}>
          <TextInput
            keyboardType='numeric'
            keyboardAppearance='dark'
            placeholder='请输入手机号'
            style={styles.textInput}
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
          ></TextInput>
          <TextInput
            placeholder='请输入密码'
            style={styles.textInput}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          ></TextInput>
        </View>
        <View>
          <Button
            onPress={this.onLogin}
            style={styles.button}
            title="登录"
            color="#334f8d"
            accessibilityLabel="用户登录系统的按钮"
          />
          <Button
            onPress={this.onRegister}
            style={styles.button}
            title="注册"
            color="#334f8d"
            accessibilityLabel="用户注册的按钮"
          />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    flex: 1
  },
  inputGround: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(224, 224, 224)',
    width: 300,
    height: 50
  },
  button: {
    flex: 1
  }
})
