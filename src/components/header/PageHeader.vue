<template>
  <header class="layout-header">
    <div class="header-container">
      <div class="header-wrap">
        <div class="layout-logo">
          <span class="layout-logo-title">SoulRonin</span>
        </div>

        <ul class="layout-nav">
          <li
            :class="['layout-nav-item', $route.name === nav.route_name ? 'nav-active' : '']"
            :key="index"
            @click="handleSwitchNav(nav)"
            v-for="(nav, index) in layoutNavList"
          >{{nav.nav_txt}}</li>
        </ul>

        <div class="layout-status layout-status-login" v-if="userStatus.status">
          <div class="layout-status-user">
            <a
              :style="{backgroundImage: userStatus.avatar ? 'url(' + userStatus.avatar + ')' : ''}"
              :title="userStatus.username"
              class="layout-status-avatar layout-avatar-link"
            ></a>

            <a
              class="layout-status-username txt-a-two"
              href="javascript:;"
            >{{userStatus.username}}</a>
          </div>

          <div class="layout-dropdown layout-drop">
            <div class="layout-user">
              <div class="layout-user-info">
                <div class="layout-user-avatar">
                  <a
                    :style="{backgroundImage: userStatus.avatar ? 'url(' + userStatus.avatar + ')' : ''}"
                    :title="userStatus.username"
                    class="layout-user-avatar-link layout-avatar-link"
                  ></a>
                </div>

                <div class="layout-user-con">
                  <h3 class="layout-user-con-username">
                    <a
                      class="layout-user-con-username-link txt-a-two"
                      href="javascript:;"
                    >{{userStatus.username}}</a>
                  </h3>

                  <p class="layout-user-con-icon">
                    <a>
                      <img src="//y.gtimg.cn/music/icon/v1/pc/svip_g.png?max_age=2592000" />
                    </a>
                  </p>

                  <p class="layout-user-con-handle">
                    <a
                      class="layout-user-con-handle-personal txt-a-two"
                      href="javascript:;"
                    >个人中心</a>
                    <a
                      @click="userStatus.status = !true, layout_login = true"
                      class="layout-user-con-handle-logout txt-a-two"
                      href="javascript:;"
                    >退出登录</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="layout-status layout-status-logout" v-if="!userStatus.status">
          <p>
            <a @click class="txt-a-one" href="javascript:;">马上登录</a>，一起
            <strong>Hi</strong>起来！
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      userStatus: { // 登录的用户状态信息
        avatar: require('#/image/avatar.jpg'),
        username: '〰 没事放放牛',
        status: !false
      },
      layoutNavList: [ // 页头导航栏
        {
          nav_txt: '首页',
          route_name: 'index'
        },
        {
          nav_txt: '美图',
          route_name: 'picture'
        },
        {
          nav_txt: '短视频',
          route_name: 'video'
        },
        {
          nav_txt: '个人收藏',
          route_name: 'collection'
        },
        {
          nav_txt: '空间',
          route_name: 'zone'
        }
      ]
    }
  },

  components: {},

  props: {},

  watch: {},

  computed: {},

  methods: {
    // nav 切换
    handleSwitchNav (nav) {
      if (this.$route.name === nav.route_name) return
      this.$router.replace({ name: nav.route_name })
    }
  },

  created () { },

  mounted () { }
}
</script>