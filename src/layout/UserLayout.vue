<template>
  <div class="user-layout">
    <div class="user-layout-bg">
      <p class="bg"></p>
      <p class="logo">
        <span class="logo-title">SoulRonin</span>
      </p>
    </div>

    <div class="user-layout-fields">
      <div class="modal-fields">
        <div class="modal-title">
          <h3>
            <strong>{{ modalTitle }}</strong>
          </h3>
        </div>

        <div class="modal-body">
          <router-view></router-view>
        </div>

        <div class="modal-footer">
          <em>&copy; 2020 SoulRonin 版权所有</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },

  computed: {
    modalTitle () {
      return this.$route.name === 'login' ? 'Sign In' : 'Sign Up'
    }
  }
}
</script>

<style lang="scss">
.user-layout {
  .user-layout-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;

    .bg {
      width: 100%;
      height: 100%;
      min-width: 1200px;
      position: fixed;
      filter: brightness(1.1);
      animation: bg_fadein 1s;
      background: {
        // image: url(https://api.ooopn.com/image/beauty/api.php);
        // image: url(https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture);
        image: url(../assets/image/bg1.jpg);
        repeat: no-repeat;
        size: cover;
        position: center;
      }

      @keyframes bg_img {
        0% {
          transform: scale(1.5, 1.5);
        }

        100% {
          transform: scale(1, 1);
        }
      }
    }

    .logo {
      width: 360px;
      height: 58px;
      display: block;
      position: absolute;
      top: 5em;
      left: 10em;

      .logo-title {
        display: block;
        font-family: Righteous;
        font-size: 50px;
        color: aliceblue;
        animation: letterspacing 1s alternate ease-in-out;
        // animation: letterspacing 3.6s infinite alternate ease-in-out;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        letter-spacing: 5px;
      }
    }
  }

  .user-layout-fields {
    position: relative;
    z-index: 99999;

    .modal-fields {
      width: 430px;
      color: #f1f1f1;
      font-size: 14px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-80%, -50%);
      z-index: 100;
      filter: brightness(0.8);
      border-radius: 6px;
      box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.3);
      transition-duration: 0.5s;
      background: linear-gradient(180deg, #4776e6, #8e54e9);
      animation: fadein 1s;
      transition: all 0.3s ease-in-out;

      .modal-title {
        height: 66px;
        line-height: 66px;
        border-radius: 4px 4px 0 0;
        text-align: center;

        h3 {
          font-size: 30px;
          font-family: Righteous;
        }
      }

      .modal-body {
        width: 300px;
        margin: 0 auto;
      }

      .modal-footer {
        margin-top: 26px;
        text-align: center;
        height: 60px;
        width: 100%;
        line-height: 60px;
        font-size: 14px;
      }
    }
  }
}
</style>