import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import Padrao from '../estilo/padrao'

export default class Contador extends Component{
   state={
       numero:0
   }

    maisUm=()=>{
        this.setState({numero:this.state.numero+1})


    } 
    Limpar=()=>{
        this.setState({numero:0})  
    } 

    render(){
        return(
        <>   
        <Text style={{fontSize:40}}>{this.state.numero}</Text>
        <TouchableHighlight onPress={this.maisUm} onLongPress={this.Limpar} >
         <Text style={Padrao.ex}>Incrementar/Zerar</Text>       
        </TouchableHighlight>
        </>
        )
    }

}