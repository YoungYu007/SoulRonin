<template>
  <div class="pic">
    <!-- 图片 -->
    <pic-list :column="4" :picList="picList"></pic-list>
  </div>
</template>

<script>
import PicList from './PicList.vue'

export default {
  name: 'Picture',
  data () {
    return {
      picList: []
    }
  },

  components: {
    PicList
  },

  methods: {
    // 获取图片
    handleGetPictures (currentPage) {
      this.$axios({
        method: 'post',
        url: 'https://www.ssyer.com/apis/20001',
        data: {
          cateId: 1,
          order: 2,
          page: { showCount: 20, currentPage },
          // popularity: 1,
          recommendType: 1,
          // type: 0
        }
      }).then(res => {
        this.picList.push(...res.data.data)
      })
    },

    // 滚动加载
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      
      if (scrollTop % 500 === 0) {
        this.handleGetPictures(scrollTop / 500)
      }
    }
  },

  mounted () {
    this.handleGetPictures(1)

    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>