<template>
  <div class="login">
    <div class="field input-field username-field clearfix">
      <label for="TP_username">
        <img :src="icon.usernameIcon" alt="会员名" title="会员名" />
      </label>
      <input
        aria-label="会员名/邮箱/手机号"
        autocomplete="off"
        class="field-wrap input-text"
        data-id="TP_username"
        id="TP_username"
        maxlength="32"
        placeholder="会员名/邮箱/手机号"
        tabindex="1"
        type="text"
      />
    </div>

    <div class="field input-field password-field clearfix">
      <label for="TP_password">
        <img :src="icon.passwordIcon" alt="密码" title="登录密码" />
      </label>
      <input
        aria-label="登录密码"
        autocomplete="new-password"
        class="field-wrap input-text"
        data-id="TP_password"
        id="TP_password"
        maxlength="40"
        placeholder="登录密码"
        tabindex="2"
        type="password"
      />
    </div>

    <!-- <div class="field error-field">
      <h3></h3>
    </div> -->

    <div class="field submit-field">
      <button
        @click="gotoLogin"
        class="submit btn btn-primary btn-ghost btn-border-stroke btn-text-float-up"
        data-text="登 录"
        tabindex="4"
      >
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Welcome Back</span>
      </button>
    </div>

    <div class="field link-field">
      <a class="link">忘记密码？</a>
      <a class="link" @click="$router.replace({ name: 'register' })">没有账号？</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      icon: { // 小图标
        usernameIcon: require('#/image/user.png'),
        passwordIcon: require('#/image/password.png'),
        keyIcon: require('#/image/key.png')
      }
    }
  },

  methods: {
    gotoLogin () {
      this.$router.replace({ name: 'index' })
    }
  }
}
</script>

<style lang="scss">
.login {
  .field {
    margin-top: 20px;
    position: relative;

    &.input-field {
      border: 1px solid #f5f5f5;
      transition: all .3s ease-in-out;
    }

    &:focus-within {
      border-color: #28b8c5;
    }

    label {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;

      img {
        margin-top: 10px; 
        width: 20px;
        height: 20px;
      }
    }

    .field-wrap {
      width: calc(100% - 40px);
      float: left;

      &.input-text {
        line-height: 40px;
        height: 40px;
        background: transparent;
        color: #f1f1f1;

        &::placeholder {
          color: #f1f1f1;
        }
      }
    }

    &.key-field {
      .field-wrap {
        .input-text {
          width: 200px;
        }
      }

      .keycode {
        display: inline-block;
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
        height: 40px;
        padding: 7px 0 7px 20px;

        img {
          width: 64px;
          height: 26px;
        }
      }
    }

    &.error-field {
      h3 {
        color: #d31a3d;
        line-height: 20px;
        font-size: 14px;
        height: 20px;
      }
    }

    &.submit-field {
      text-align: center;
      margin-top: 36px;

      .submit {
        width: 300px;
        font-size: 14px;

        &.btn {
          --hue: 190;
          --ease-in-duration: 0.25s;
          --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
          --ease-out-duration: 0.65s;
          --ease-out-delay: var(--ease-in-duration);
          --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
          position: relative;
          line-height: 40px;
          height: 40px;
          color: #f1f1f1;
          text-decoration: none;
          // background-color: #f1f1f1;
          border: 1px solid #f1f1f1;
          outline: transparent;
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          transition: 0.25s;

          &:hover {
            background: #f1f1f1;
          }

          &-primary {
            --hue: 171;
          }

          &-ghost {
            color: #f1f1f1;
            background-color: transparent;
            border-color: #f1f1f1;

            &:hover {
              color: #28b8c5;
            }
          }

          &-border-stroke {
            border-color: #f1f1f1;

            .btn-borders {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;

              .border-top {
                position: absolute;
                top: 0;
                width: 100%;
                height: 1px;
                background: #f1f1f1;
                transform: scaleX(0);
                transform-origin: left;
              }

              .border-right {
                position: absolute;
                right: 0;
                width: 1px;
                height: 100%;
                background: #f1f1f1;
                transform: scaleY(0);
                transform-origin: bottom;
              }

              .border-bottom {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #f1f1f1;
                transform: scaleX(0);
                transform-origin: left;
              }

              .border-left {
                position: absolute;
                left: 0;
                width: 1px;
                height: 100%;
                background: #f1f1f1;
                transform: scaleY(0);
                transform-origin: bottom;
              }

              // when unhover, ease-out left, bottom; ease-in right, top

              .border-left {
                transition: var(--ease-out-duration) var(--ease-out-delay)
                  var(--ease-out-exponential);
              }
              .border-bottom {
                transition: var(--ease-out-duration) var(--ease-out-delay)
                  var(--ease-out-exponential);
              }

              .border-right {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
              }
              .border-top {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
              }
            }

            &:hover {
              color: #f1f1f1;
              background: transparent;

              .border-top,
              .border-bottom {
                transform: scaleX(1);
              }
              .border-left,
              .border-right {
                transform: scaleY(1);
              }

              // when hover, ease-in left, bottom; ease-out right, top

              .border-left {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
              }
              .border-bottom {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
              }

              .border-right {
                transition: var(--ease-out-duration) var(--ease-out-delay)
                  var(--ease-out-exponential);
              }
              .border-top {
                transition: var(--ease-out-duration) var(--ease-out-delay)
                  var(--ease-out-exponential);
              }
            }
          }

          &-text-float-up {
            &::after {
              position: absolute;
              content: attr(data-text);
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              opacity: 0;
              transform: translateY(35%);
              transition: 0.25s ease-out;
            }

            // when hover, ease-in top-text; ease-out bottom-text

            .btn-text {
              display: block;
              transition: 0.75s 0.1s var(--ease-out-exponential);
            }

            &:hover {
              // when hover, ease-in bottom-text; ease-out top-text

              .btn-text {
                opacity: 0;
                transform: translateY(-25%);
                transition: 0.25s ease-out;
              }

              &::after {
                opacity: 1;
                transform: translateY(0);
                transition: 0.75s 0.1s var(--ease-out-exponential);
              }
            }
          }
        }
      }
    }

    &.link-field {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      padding: 0 10px;
    }
  }
}
</style>