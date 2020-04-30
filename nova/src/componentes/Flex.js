import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    contaner:{
        height:'100%',
    },
    norte:{
        flex:1,
        backgroundColor:"#bdf98d",
        alignItems:"center",
        justifyContent:'center',


    },
    centro:{
        flex:2,
        flexDirection:'row',
        backgroundColor: '#f2f9bd',

    },
    sul:{

    },
    circulo:{
        width:100,
        height:100,
        backgroundColor:"#f47f61",
        borderRadius:50,

    }
})

const Circulo=props=><View style={styles.circulo}></View>
export default props=>{
    return(
        <View style={styles.contaner}>
            <View style={styles.norte}>
                <Circulo/>
            </View>
            <View style={styles.centro}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            <View style={styles.sul}>
                <Circulo/>
               
            </View>
        </View>
    )
}