<template>
  <div class="alertModal">
    <div class="modalContainer">
      <div class="modalIcon">
        <span></span>
        <span></span>
      </div>
      <p class="modalText">{{alertText}}</p>
      <div class="confirm">
        <span @click="closeTip">取消</span><span @click="closeTip">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['alertText'],
    methods: {
      closeTip() {
        this.$emit('closeTip')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";

  @keyframes modalMove {
    0% {
      transform: scale(1)
    }
    35% {
      transform: scale(.8)
    }
    70% {
      transform: scale(1.2)
    }
    100% {
      transform: scale(1)
    }
  }

  .alertModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgba(0,0,0,.6);
    .modalContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -6rem;
      margin-left: -6rem;
      width: 12rem;
      animation: modalMove .4s;
      background-color: rgba(255, 255, 255, 1);
      border: 1px;
      padding-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px;
      border-radius: 0.25rem;
      .modalIcon {
        @include wh(3rem, 3rem);
        border: 0.15rem solid #f8cb86;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span:nth-of-type(1) {
          @include wh(.12rem, 1.5rem);
          background-color: #f8cb86;
        }
        span:nth-of-type(2) {
          @include wh(.2rem, .2rem);
          border: 1px;
          border-radius: 50%;
          margin-top: .2rem;
          background-color: #f8cb86;
        }
      }
      .modalText {
        font-size: .7rem;
        color: #333;
        line-height: .9rem;
        text-align: center;
        margin-top: .8rem;
        padding: 0 .4rem;
      }
      .confirm {
        font-size: .8rem;
        color: #fff;
        font-weight: bold;
        margin-top: .8rem;
        background-color: #fdc900;
        width: 100%;
        text-align: center;
        line-height: 1.8rem;
        border: 1px;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        display: flex;
        justify-content: center;
        span {
          flex:1;
        }
      }
    }
  }


</style>
