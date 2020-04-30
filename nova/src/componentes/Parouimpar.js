import React from 'react'
import {View,Text} from 'react-native'
import Padrao from '../estilo/padrao'
import If from './If'

function parimpa(num){
   /* if (num % 2 ==0){
        return <Text>Par</Text>
    }else{
        return <Text>LIImpar</Text>
    }
    */
    const v= num % 2 == 0? 'par' :'Impar'
    return <Text>variavel: {v}</Text> 
    
}
/*{ parimpa(props.numero)} */
export default props=> 
    
            <View>
                   
                 
                  <Text style={Padrao.ex}>{ parimpa(props.numero)}</Text> 
                 
                  
               
            </View>
        
    

