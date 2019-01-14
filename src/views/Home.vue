<template>
  <div class="home">
    <app-home-swiper></app-home-swiper>
    <app-home-search></app-home-search>
    <app-home-hot></app-home-hot>
    <app-home-zixun></app-home-zixun>
    <app-home-tv></app-home-tv>
    <app-home-footer></app-home-footer>
  </div>
</template>

<script>
import AppHomeSwiper from '@com/common/main/AppHomeSwiper'
import AppHomeSearch from '@com/common/main/AppHomeSearch'
import AppHomeHot from '@com/common/main/AppHomeHot'
import AppHomeTv from '@com/common/main/AppHomeTv'
import AppHomeFooter from '@com/common/main/AppHomeFooter'
import AppHomeZixun from '@com/common/main/AppHomeZixun'
export default {
  name: 'home',
  components: {
    AppHomeSwiper,
    AppHomeSearch,
    AppHomeHot,
    AppHomeTv,
    AppHomeFooter,
    AppHomeZixun
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    
    
  }
</style>
