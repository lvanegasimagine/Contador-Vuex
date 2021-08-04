<template>
  <div class="about">
    <h1>Mi contador: {{contador}}</h1>
    <input type="text" v-model="texto">
    <h2>{{texto}}</h2>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      texto: ''
    }
  },
  computed: {
    ...mapState(['contador'])
  }
}
</script>
