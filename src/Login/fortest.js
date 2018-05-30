import React, {Component} from 'react'
import {ViewPagerAndroid,View,Text } from 'react-native'

export default class Vi extends Component{
    render() {
    return (
        <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle} key="1">
                <Text>First page</Text>
            </View>
            <View style={styles.pageStyle} key="2">
                <Text>Second page</Text>
            </View>
        </ViewPagerAndroid>
    );
}
}

var styles = {
    viewPager: {
        flex: 1
  },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}