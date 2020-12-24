<template>
 <div>搜索关键字: 
   <h3>{{$route.params.keyword}}</h3>
      <h3>{{$route.query}}</h3>

 </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>

</style>