<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components: {
    Footer,Header
  }
}
</script>

<style scoped>

</style>
