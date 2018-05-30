import React, {Component} from 'react'
import { AppRegistry
} from 'react-native';
import App from './App';
import Splash from './src/Login/Splash'
import LoginP from './src/Login/LoginMain'
import Vi from './src/Login/fortest'
import Main from './src/Main/0_Main'
class Mains extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen:"Splash"};
        setTimeout(()=>{this.setState({ currentScreen: 'LoginP' })}, 3000);
    }
    render(){
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <LoginP />
        return mainScreen
    }
}
class V extends Component{
    render() {
return(
    <Main />
);
}
}
AppRegistry.registerComponent('demo', () => Mains);
