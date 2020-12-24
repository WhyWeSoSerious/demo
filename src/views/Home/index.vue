<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor /> 
    <Floor />
    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import ListContainer from "./ListContainer";
import Rank from "./Rank";
import TodayRecommend from "./TodayRecommend";
import TypeNav from "../../components/TypeNav";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
    TypeNav
  },
};
</script>

<style lang="less" scoped>
</style>