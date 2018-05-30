import React, {Component} from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {logow} from '../Images';
export default class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={logow} style={styles.logo} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9e0b0f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    logo:{
        width: 211,
        height: 96,
    }
})