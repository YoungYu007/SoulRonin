<template>
  <div class="video">
    <!-- 短视频 -->
    <ul class="video-list clearfix">
      <li :key="video.id" class="video-item" v-for="video in videoList">
        <div
          @mouseleave="isOverCurrentVideo = null"
          @mouseover="isOverCurrentVideo = video.video"
          class="video-url"
          oncontextmenu="return false"
        >
          <img
            :src="video.thumbUrl"
            @click="viewVideoUrl = video.video"
            class="video-thumbnail"
          />

          <transition name="fade">
            <video autoplay class="video-file" v-if="isOverCurrentVideo === video.video">
              <source :src="video.video" />
            </video>
          </transition>

          <p class="video-operation">
            <span class="collect"></span>
            <span class="download"></span>
          </p>
        </div>

        <p class="video-title clearfix">
          <span :title="video.title" class="title text-overflow">{{ video.title }}</span>
          <span class="time text-overflow" v-time="video.createTime"></span>
        </p>

        <p class="video-info clearfix">
          <span class="num watch-num">
            <img src="../../assets/image/view.png" />
            <em>{{ video.watchNum | formatNum }}</em>
          </span>

          <span class="num like-num">
            <img src="../../assets/image/like.png" />
            <em>{{ video.likeNum | formatNum }}</em>
          </span>

          <span class="num download-num">
            <img src="../../assets/image/download.png" />
            <em>{{ video.downloadNum | formatNum }}</em>
          </span>
        </p>

        <p class="video-author">
          <span class="author clearfix">
            <img :src="video.authorHeader" />
            <em class="text-overflow">{{ video.authorName }}</em>
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      videoList: [],
      viewVideoUrl: null,
      isOverCurrentVideo: null
    }
  },

  methods: {
    // 获取视频
    handleGetVideos () {
      this.$axios({
        method: 'post',
        url: 'https://www.ssyer.com/apis/20001',
        data: {
          cateId: 2,
          order: 2,
          page: { showCount: 40, currentPage: 1 },
          // popularity: 1,
          recommendType: 1,
          // type: 0
        }
      }).then(res => {
        this.videoList = res.data.data
      })
    }
  },

  mounted () {
    this.handleGetVideos()
  }
}
</script>