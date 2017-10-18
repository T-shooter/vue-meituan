<template>
  <div id="orderList">
    <head-top head-title="订单"></head-top>
    <div class="field">
      <div class="head">
        <div class="avatar">
          <img src="http://p1.meituan.net/xianfu/d1dc33ccc294e17c8044a43f330aebbc196608.jpg.webp" class="img">
        </div>
        <a href="#" class="name ellipsis">田妈妈的味道（日月飞）</a> <span class="status">订单完成</span>
      </div>
      <a class="item clearFix" href="#">
        <div class="content">
          <div class="product clearFix">
            <div class="name">糖醋里脊+两素+米饭+饮料</div>
            <div class="count">x1</div>
          </div>
          <div class="desc clearFix">
            <div class="count">总计1个菜，实付<span class="price">￥12.00</span></div>
          </div>
        </div>
      </a>
      <div class="console">
        <div class="btnBox">
          <button class="commonBtn gray">再来一单</button>
          <a class="commonBtn btn" href="#">评价</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/head/HeadTop.vue'

  export default {
    components: {
      headTop
    }
  }
</script>

<style lang="scss" scoped>
  #orderList {
    padding-top: 2.1rem;
    .field {
      display: block;
      position: relative;
      background-color: #ffffff;
      margin-top: .5rem;
      .head {
        padding: 0 .75rem;
        font-size: .7rem;
        height: 2.5rem;
        line-height: 2.5rem;
        position: relative;
        .avatar {
          position: absolute;
          margin-top: .25rem;
          margin-right: .5rem;
          .img {
            display: block;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }
        }
        .name {
          position: relative;
          float: left;
          color: #333;
          font-size: .8rem;
          font-weight: bold;
          max-width: 95%;
          padding-right: 4.25rem;
          padding-left: 2.35rem;
          box-sizing: border-box;
          &:after {
            position: absolute;
            content: '';
            width: .4rem;
            height: .4rem;
            border: 1px solid #999;
            border-width: 1px 1px 0 0;
            transform: rotate(45deg);
            top: 1.05rem;
          }
        }
        .status {
          position: absolute;
          right: .75rem;
          float: right;
          color: #999;
        }
      }
      .item {
        position: relative;
        display: block;
        margin-left: 3.05rem;
        border-top: 1px solid #E0E0E0;
        .content {
          margin-right: .75rem;
          padding: .45rem 0 .5rem 0;
          font-size: .7rem;
          color: #666;
          .product {
            .name {
              float: left;
              line-height: 25px;
              color: #999;
            }
            .count {
              float: right;
              color: #999;

            }
          }
          .desc {
            .count {
              font-size: .6rem;
              float: right;
              color: #999;
              .price {
                font-size: .7rem;
                color: #151515;
              }
            }
          }
        }
      }
      .console {
        overflow: hidden;
        border-top: 1px solid #E0E0E0;
        padding-right: .75rem;
        .btnBox {
          float: right;
          line-height: 1.6rem;
          .commonBtn {
            background: #FFD161;
          }

          .commonBtn {
            background: #ffd300;
            color: #6b450a;
          }
          .commonBtn {
            border: 0;
            color: #FFFFFF;
            background-color: #FFD161;
            text-align: center;
            cursor: pointer;
            -webkit-appearance: none;
            border-radius: .15rem;
          }
          .gray {
            border: 1px solid #dedede;
            background: #fff;
            color: #333;
            border-radius: 2px;
          }
          .gray {
            float: right;
            width: 100px;
            height: 1.6rem;
            box-sizing: border-box;
            font-size: .7rem;
            border-radius: 2px;
            margin: .45rem 0;
          }
          .btn {
            float: right;
            width: 100px;
            height: 1.6rem;
            box-sizing: border-box;
            font-size: .7rem;
            border-radius: 2px;
            margin: .45rem 0;
            color: #666;
          }
        }
      }
    }
  }
</style>
