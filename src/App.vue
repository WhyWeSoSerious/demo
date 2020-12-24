<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isShow"/>
  </div>
</template>

<script>
import {mapstate} from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components: {
    Footer,Header
  },
  mounted(){
    this.$store.dispatch('getCategoryList')
  }
}
</script>

<style scoped>

</style>
