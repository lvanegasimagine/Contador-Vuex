import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  mutations: {  //Modifica el state solamente
    incrementar(state, payloadNumero){
      state.contador = state.contador + payloadNumero
    },
    disminuir(state, payloadNumero){
      state.contador = state.contador - payloadNumero;
    }
  },
  actions: { //Llamados a API y BD.... Acciona una mutations
    accionIncrementar({commit}, numero){
      commit('incrementar', numero);
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero);
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }
      else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
