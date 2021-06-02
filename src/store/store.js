import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'
import * as getters from './modulos/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    nome:'Miguel',
    sobrenome:'Gbriel'
  },
  getters,
 //referenciamos os modulos
 modules:{carrinho,parametros}
})