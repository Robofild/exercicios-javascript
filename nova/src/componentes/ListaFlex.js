import React,{Component} from 'react'
import {ScrollView,View,FlatList,Text} from 'react-native'


const alunos =[
    {id: 1, nome:'João',nota:7.9},
    {id:2, nome: 'Maria',nota:9.1},
    {id:3, nome: 'Jose',nota:6.1},
    {id:4, nome: 'Jorge',nota:5.1},
    {id:5, nome: 'Tadeu',nota:8.1},
    {id:6, nome: 'francisco',nota:5.4},
    {id:7, nome: 'Andreia',nota:9.5},
    {id:8, nome: 'Andress',nota:7.1},
    {id:9, nome: 'lucia',nota:6.1},
    {id:10, nome:'João Batista',nota:9.9},
    {id:11, nome:'João',nota:7.9},
    {id:12, nome: 'Maria',nota:9.1},
    {id:13, nome: 'Jose',nota:6.1},
    {id:14, nome: 'Jorge',nota:5.1},
    {id:15, nome: 'Tadeu',nota:8.1},
    {id:16, nome: 'francisco',nota:5.4},
    {id:17, nome: 'Andreia',nota:9.5},
    {id:18, nome: 'Andress',nota:7.1},
    {id:19, nome: 'lucia',nota:6.1},
]

const itemEstilo={
    paddingHorizontal:15,
    height:50,
    backgrondColor:'#DDD',
    borderWidth:0.5,
    borderColor:'#666',

    //flex
    alignIten:'center',
}
export const Aluno=props=>
<View style={itemEstilo}>
<Text>Nome: {props.nome}</Text>
<Text style={{fontWeight:'bold'}} >Nota: {props.nota}</Text>
</View>

export default props=>{
    const rederItens=({item})=>{
        return<Aluno{...item}/>
    }
    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={rederItens}
            keyExtractor={(_, index)=>index.toString()}/>
        </ScrollView>
    )
}