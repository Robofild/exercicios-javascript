import React from 'react'
import propTypes from 'prop-types'
import {Text} from 'react-native'

const ValidarProps =props=>
<Text style={{fontSize:35}}>
    {props.label}
    {props.ano+2000}
</Text>

ValidarProps.defaulProps={
    label:'Ano '
}
ValidarProps.prototype={
    ano:propTypes.number.isRequired
}
export default ValidarProps