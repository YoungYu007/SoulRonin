<template>
  <div class="basic-layout">
    <!-- 页头 固定定位 -->
    <!-- <header class="layout-header">
      <div class="layout-container">
        
      </div>
    </header>-->
    <page-header></page-header>

    <router-view class="layout-main"></router-view>
  </div>
</template>

<script>
import PageHeader from '~/header'

export default {
  name: 'Basic',
  data () {
    return {
    }
  },

  components: {
    PageHeader
  },

  props: {},

  watch: {},

  computed: {},

  methods: {
  },

  created () { },

  mounted () { }
}
</script>

<style lang="scss">
.basic-layout {
  .layout-main {
    width: 1280px;
    min-height: 100vh;
    margin: 16px auto;
  }
}
</style>