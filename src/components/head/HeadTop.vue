<template>
    <div class="headTop">
        <slot name="logo"></slot>

        <section v-if="signinUp !== 'home'">
            <span class="backWrap" @click="$router.go(-1)"></span>
        </section>

        <section v-if="headTitle">
            <h1 class="ellipsis pageName">{{headTitle}}</h1>
        </section>

        <span class="headerRight" v-if="signinUp == 'city'">
              <router-link to="/addaddress" class="addressAdd">新增地址</router-link>
          </span>

        <span class="headerRight" v-if="signinUp == 'login'">
              <router-link to="register" class="addressAdd">立即注册</router-link>
          </span>

        <span class="headerRight" v-if="signinUp == 'address'">
            <i class="addressAdd" v-show="this.edited" @click="changeState">管理</i>
            <i class="addressAdd" v-show="!this.edited" @click="changeState">完成</i>
        </span>

        <span class="headerRight" v-if="signinUp == 'add'">
            <router-link to="/msite" class="addressAdd">保存</router-link>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            edited: true
          }
        },
        props:['headTitle','signinUp'],
        methods: {
          changeState() {
            this.edited = !this.edited
            this.$emit('changeState')
          }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/style/mixin";
    .headTop {
        background: #fff;
        position: fixed;
        top: 0;
        width: 100%;
        height: 2.1rem;
        z-index: 3;
        @include bb();
        .pageName {
            line-height: 2.1rem;
            font-size: .85rem;
            font-weight: bold;
            text-align: center;
            width: 80%;
            margin: 0 auto;
        }
        .backWrap {
            position: absolute;
            top: 0;
            left: 0;
            height: 2.1rem;
            line-height: 2.1rem;
            padding: 0 1.5rem 0 .75rem;
            &:after {
              content: '';
              position: absolute;
              top:.7rem;
              width: .6rem;
              height: .6rem;
              border: 1px solid #333;
              /*background: red;*/
              border-top:0;
              border-right: 0;
              transform: rotate(45deg);
            }
        }
        .headerRight {
          position: absolute;
          top: 0;
          right: .5rem;
          height: 100%;
          line-height: 2.1rem;
          .addressAdd {
            display: block;
            height: 2.1rem;
            line-height: 2.1rem;
            font-size: .7rem;
            color: #666;
          }
        }
    }
</style>
