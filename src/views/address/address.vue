<template>
    <div>
      <head-top signin-up="address" @changeState="changeState" head-title="我的收货地址"></head-top>
      <ul class="addressUl" v-if="edited">
        <li class="addressLi">
          <p class="detail ellipsis">中钢国际广场1</p>
          <p class="name ellipsis">
            <span class="name">杨自力</span>
            <span class="sex">先生</span>
            <span class="mobile">17611060219</span>
          </p>
        </li>
        <li class="addressLi">
          <p class="detail ellipsis">中钢国际广场1</p>
          <p class="name ellipsis">
            <span class="name">杨自力</span>
            <span class="sex">先生</span>
            <span class="mobile">17611060219</span>
          </p>
        </li>
      </ul>
      <!--编辑状态-->
      <ul class="addressUl edit" v-else>
        <li class="addressLi">
          <div class="delete" @click="deleteAddress(1)">
            <img src="//xs01.meituan.net/waimai_i/img/address/addr_del.66fb337d.png" alt="">
          </div>
          <div class="txt">
            <p class="detail ellipsis">中钢国际广场</p>
            <p class="name ellipsis">
              <span class="name">杨自力</span>
              <span class="sex">先生</span>
              <span class="mobile">17611060219</span>
            </p>
          </div>
          <div class="edit">
            <img src="//xs01.meituan.net/waimai_i/img/address/addr_adit.fd1b643d.png" alt="">
          </div>
        </li>
        <li class="addressLi">
          <div class="delete" @click="deleteAddress(2)">
            <img src="//xs01.meituan.net/waimai_i/img/address/addr_del.66fb337d.png" alt="">
          </div>
          <div>
            <p class="detail ellipsis">中钢国际广场</p>
            <p class="name ellipsis">
              <span class="name">杨自力</span>
              <span class="sex">先生</span>
              <span class="mobile">17611060219</span>
            </p>
          </div>
          <div class="edit">
            <img src="//xs01.meituan.net/waimai_i/img/address/addr_adit.fd1b643d.png" alt="">
          </div>
        </li>

      </ul>

      <!--提示层-->
      <div class="alertModal" v-if="false">
        <div class="modalContainer">
          <div class="modalIcon">
            <span></span>
            <span></span>
          </div>
          <p class="modalText">{{alertText}}</p>
          <div class="confirm">
            <span>取消</span><span>确定</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import headTop from '../../components/head/HeadTop.vue'

  export default {
    data() {
      return {
        edited: true
      }
    },
    components: {
      headTop
    },
    methods: {
      deleteAddress(id){
        console.log(id)
      },
      changeState() {
        this.edited = !this.edited
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @keyframes modalAnimation {
    0%   { transform: scale(1) }
    35%  { transform: scale(.8) }
    70%  { transform: scale(1.2) }
    100% { transform: scale(1) }
  }
  .alertModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    .modalContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: modalAnimation .5s;
      background-color: rgba(255,255,255,1);
      margin-top: -6rem;
      margin-left: -6rem;
    }
  }



  .addressUl {
    margin-top: 2rem;
    background: #fff;
    padding: 0 .75rem;
    .addressLi {
      font-size: 0.6rem;
      padding:.6rem 0;
      border-top:1px solid #e6e6e6;
      .detail {

      }
      .name {
        padding-top: 0.2rem;
        .sex {
          padding-left: .5rem;
        }
        .mobile {
          padding-left: 1rem;
        }
      }
    }
  }
  .edit {
    .addressLi {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .txt {
        max-width: 75%;
      }
      .delete,.edit {
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
</style>
