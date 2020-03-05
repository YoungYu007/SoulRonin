<template>
  <ul class="waterfall clearfix">
    <!-- 瀑布式布局 整体 -->
    <li
      :key="i"
      :style="{ width: `calc(100% / ${column})`}"
      class="waterfall-column"
      v-for="(el, i) in waterfallList"
    >
      <!-- 每一列 -->
      <div :key="index" class="column-item" v-for="(item, index) in el">
        <!-- 每一张图片 -->
        <div class="pic-item" oncontextmenu="return false">
          <div class="item-img">
            <img class="item-img-url" :src="item.thumbUrl" />

            <div class="item-pic-operation">
              <span class="collect"></span>
              <span class="download"></span>
            </div>

            <div class="item-desc clearfix">
              <p class="item-title clearfix">
                <span :title="item.title" class="title text-overflow">{{ item.title }}</span>
                <span class="time text-overflow" v-time="item.createTime"></span>
              </p>

              <p class="item-num-info clearfix">
                <span class="num watch-num">
                  <img src="../../assets/image/view_white.png" />
                  <em>{{ item.watchNum | formatNum }}</em>
                </span>

                <span class="num like-num">
                  <img src="../../assets/image/like_white.png" />
                  <em>{{ item.likeNum | formatNum }}</em>
                </span>

                <span class="num download-num">
                  <img src="../../assets/image/download_white.png" />
                  <em>{{ item.downloadNum | formatNum }}</em>
                </span>
              </p>
            </div>
          </div>

          <div class="item-img-info clearfix">
            <img :src="item.authorHeader" class="author-header" />
            <span class="author-name text-overflow">{{ item.authorName }}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      waterfallList: []
    }
  },

  props: {
    // 瀑布流数据
    picList: {
      type: Array,
      required: true
    },

    // 列数
    column: {
      type: Number,
      default: 4
    }
  },

  watch: {
    picList: {
      immediate: true,
      deep: true,
      handler: function () {
        this.generateWaterfallList()
      }
    }
  },

  methods: {
    // 处理 瀑布流数据
    generateWaterfallList () {
      let waterfallList = new Array(this.column)
        .fill(null)
        .map(item => [])

      for (let count = 0; count < this.column; count++) {
        this.picList.forEach((el, i) => {
          let index = i % this.column
          waterfallList[index].push(el)
        })
      }

      this.waterfallList = waterfallList
    }
  }
}
</script>

<style lang="scss">
.waterfall {
  width: 100%;

  .waterfall-column {
    float: left;

    .column-item {
      padding: 10px;

      .pic-item {
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        box-shadow: 0 3px 10px 1px rgba(97, 97, 97, 0.8);

        .item-img {
          width: 100%;
          position: relative;
          background-image: url(../../assets/image/create_bg.jpg);
          overflow: hidden;

          .item-img-url {
            min-height: 200px;
            width: 100%;
            object-fit: cover;
            display: block;
            font-size: 0;
            transition: all 1s ease-in-out;
          }

          &:hover {
            .item-img-url {
              transform: scale(1.3);
            }

            .item-pic-operation,
            .item-desc {
              display: block;
            }
          }

          .item-pic-operation {
            height: 36px;
            position: absolute;
            top: 10px;
            right: 0;
            display: none;
            transition: all 0.3s ease-in-out;

            .collect,
            .download {
              width: 40px;
              height: 36px;
              float: right;
              border-radius: 50%;
              margin-right: 10px;
              background: #f1f1f1;
              background: {
                size: 26px 26px;
                repeat: no-repeat;
                position: center;
              }

              &:hover {
                background-color: #409eff;
              }
            }

            .collect {
              background-image: url(../../assets/image/collect.png);

              &:hover,
              &.collected {
                background-image: url(../../assets/image/collect-active.png);
              }
            }

            .download {
              background-image: url(../../assets/image/download1.png);

              &:hover {
                background-image: url(../../assets/image/download1-active.png);
              }
            }
          }

          .item-desc {
            background-color: rgba(0, 0, 0, 0.3);
            animation: fadein 0.5s;
            width: 100%;
            z-index: 999;
            position: absolute;
            bottom: 0;
            left: 0;
            display: none;
            color: #f1f1f1;

            .item-title {
              font-size: 14px;
              height: 36px;
              width: 100%;
              padding: 0 10px;

              span {
                float: left;

                &.title {
                  padding-top: 13px;
                  width: 60%;
                }

                &.time {
                  padding-top: 15px;
                  text-align: right;
                  width: 40%;
                  font-size: 12px;
                }
              }
            }

            .item-num-info {
              padding: 0 10px;
              height: 36px;
              line-height: 36px;
              width: 100%;

              .num {
                float: left;
                margin-right: 10px;
                font-size: 12px;

                img {
                  width: 19px;
                  height: 16px;
                  overflow: hidden;
                  margin-right: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }

        .item-img-info {
          width: 100%;
          line-height: 36px;
          padding: 10px 0 10px;
          border-top: 1px solid #ccc;

          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin: 0 16px;
            float: left;
          }

          span {
            float: left;
            padding-right: 10px;
            width: calc(100% - 36px - 16px * 2);
          }
        }
      }
    }
  }
}
</style>