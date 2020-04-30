
import React,{Component}from 'react'
import{View,Text,StyleSheet}from 'react-native'
import Parimpar from './componentes/Parouimpar'
import Simples from './componentes/Simples'
import {Inverter,MegaSena} from './componentes/Mult'






export default class App extends Component {
    render() {
        return (
            <View style={styles.contaner}>
                <Simples  texto='flexivel!!'/>
                <Parimpar numero={32}/>
                <Inverter texto={'Robofild'}/>
                <MegaSena numeros={6}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSize: 40,
    }
})