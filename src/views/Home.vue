<template>
  <div class="home">
    <!-- Opcion 1  Sin Propiedad Computada-->
    <!-- <h1 :style="[contador >= 100 ? {'color' : 'green'} : {'color': 'red'}]">Mi contador: {{ contador }}</h1> -->
    
    <!-- Opcion 2  Utilizando Propiedad Computada-->
    <h1 :style="colorContado">{{titulo}}{{ contador }}</h1>

    <button @click="accionIncrementar(10)">Aumentar</button>
    <BtnDisminuir />
    <hr>
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import  BtnDisminuir from "../components/BtnDisminuir";
import  BotonAccion from "../components/BotonAccion";

import { mapState, mapMutations, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: 'Mi contador Vuex: '
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContado(){
      return [this.contador >= 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: { // las mutations van de la mano con la actions no se ejecutan desde el home.vue no es recomendable para eso la action que la ejecuta desde el store
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  },
}
</script>
