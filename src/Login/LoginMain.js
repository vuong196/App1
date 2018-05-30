import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { Container, Header, Content, Tab, Tabs, ScrollableTab} from 'native-base';

import Main from '../Main/0_Main'
import Login from './Login'
import Signup from './Signup'

export default class LoginP extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback >
                        <View style={styles.container}>
                            <View style={styles.logocontainer}>
                                <Image style={styles.logo} source={require('../Images/iSachLogo1.png')} />
                            </View>
                            <Tabs style={styles.Tabscontainer}>
                                        <Tab heading="Đăng Nhập">
                                            <Login />
                                        </Tab>
                                        <Tab heading="Đăng Ký">
                                            <Signup />
                                        </Tab>
                            </Tabs>
                        </View>

                    </TouchableWithoutFeedback>     
                </KeyboardAvoidingView>             
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Tabs:{

    },
    container:{
        flex:1,
        backgroundColor: 'white',
        //backgroundColor: '#9e0b0f',
        flexDirection: 'column',
    },
    logocontainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    Tabscontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 211,
        height: 96,
    },
    title:{
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 0,
        backgroundColor: '#9e0b0f',
    },
    input:{
        color: '#9e0b0f',
        height:40,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    buttonContainer:{
        backgroundColor:'white',
        paddingVertical: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#9e0b0f',
        fontWeight: 'bold',
        fontSize: 18,
    },
})