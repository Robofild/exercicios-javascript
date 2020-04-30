import React from 'react'
import{createDrawerNavigator} from 'react-navigation'

import Parimpar from './componentes/Parouimpar'
import Simples from './componentes/Simples'
import {Inverter,MegaSena} from './componentes/Mult'
import Contador from './componentes/contador'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/comunicacaoDireta'
import TextoSincronizado  from   './componentes/comunicacaoIndireta'
import ListFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
export default createDrawerNavigator({
    Flex:{
        screen:Flex,
        navigationOptions:{
            title:'Lista (flex Flex)'
        }
    },
    ListFlex:{
        screen:ListFlex,
        navigationOptions:{
            title:'Lista (flex box)'
        }
    },
    TextoSincronizado:{
        screen:()=><TextoSincronizado />,
        navigationOptions:{
            title:'Texto sincrozado'
        }
    },
    Avo:{
        screen:()=><Avo nome='João'sobrenome=' Silva'/>
    },
    Evento:{
        screen:()=><Evento />
    },
   ValidarProps:{
       screen:()=><ValidarProps label={'TesteS'} ano={18}/>
   },
    
   Contador:{
       screen:()=><Contador />
   },
    
   MegaSena:{
       screen:()=><MegaSena numeros={8}/>,
        navigationOptions:{
            title:'Mega Sena'
        }

   }, 
   Inverter:{
      screen:()=><Inverter texto={'React-nativo@'}/>
   },
   Parimpar:{
    screen:()=><Parimpar numero={30}/>,
    //mudar o titulo do indice de menu
    navigationOptions:{
        title:'Par & Impar'
    }
   },
   Simples:{
    screen:()=><Simples texto={'Simples'}/>,
    //mudar o titulo do indice de menu
   
   }
},{drawerWidth:300})