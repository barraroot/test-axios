<template>
  <div class="hello">
    <p v-for="banner in banners" v-bind:key="banner.id"><img :src="'https://everestgames.sfo3.digitaloceanspaces.com' + banner.name" alt="Teste"></p>
    <p id="error"></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      banners: []
    }
  },
  created () {
    axios.get('/list-banners-main').then(response => {
      this.banners = response.data
    }).catch(error => {
      document.getElementById('error').innerHTML = error
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
