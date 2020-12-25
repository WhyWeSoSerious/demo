<template>
 <div>
   <TypeNav/>
   <h3>{{$route.params}}</h3>
      <h3>{{$route.query}}</h3>

 </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
export default {
  name: 'search',
  data () {
    return {}
  },
  components: {
    TypeNav
  }
}
</script>

<style lang="less" scoped>

</style>