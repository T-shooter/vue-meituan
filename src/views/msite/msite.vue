<template>
  <div id="site">
    <nav class="siteNav">
      <router-link to="" v-for="item in foodsType.primaryFilter" :key="item.id" >
        <img :src="item.url">
        <span>{{item.name}}</span>
      </router-link>
    </nav>
    <div class="topPlaceholder">
      <span class="topPlaceholderInner">附近商家</span>
    </div>
    <!--商品列表-->
    <div class="goodsList">
      <ul>
        <router-link v-for="(item,index) in seller" :key="item.id" :to="'shop/' + item.id" tag="li" class="goodsListLi">
          <section class="listLeft">
            <span v-if="item.brand" class="brand">{{item.brand}}</span>
            <img :src="item.picUrl" class="foodsImg">
          </section>
          <section class="foodsRight">
            <h4 class="title ellipsis">{{item.name}}</h4>
            <h5 class="order">
              <div class="orderLeft">
                <star :score="item.wmPoiScore"></star>
                <span>月售{{item.monthSaleNum}}</span>
              </div>
              <div class="orderRight">{{item.mtDeliveryTime}} | {{item.distance}}</div>
            </h5>
            <h5 class="price">
              <span>起送价￥{{item.minPrice}} | 配送￥{{item.shippingFee}}
              </span>
              <span v-if="item.deliveryMode" class="delivery">{{item.deliveryMode}}</span>
            </h5>

            <h5 class="coupon" v-for="coupon in item.discounts" :key="coupon.id" >
              <img class="img" :src="coupon.iconUrl" alt="">
              <span class="txt">{{coupon.info}}</span>
            </h5>
          </section>
        </router-link>
      </ul>
    </div>
    <!--底部-->

    <footGuide></footGuide>
  </div>
</template>

<script>
  import footGuide from '../../components/foot/Foot.vue'
  import {seller, foodsType} from '../../assets/js/utils/getData'
  import star from '../../components/common/Star.vue'


  export default {
    data() {
      return {
        foodsType: {},
        seller: {},

      }
    },
    components: {
        star,footGuide
    },
    mounted() {
      foodsType().then(res => {
        this.foodsType = res.data.data;
      })
      seller().then(res => {
        this.seller = res.data.data.poilist;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";

  #site {
    height: 31rem;
    overflow-y: scroll;
    .siteNav {
      font-size: 0;
      padding-bottom: .7rem;
      margin-bottom: .5rem;
      background: #fff;
      a {
        display: inline-block;
        width: 25%;
        padding-top: 0.7rem;
        text-align: center;
        img {
          display: block;
          width: 2.35rem;
          margin: 0 auto;
          padding-bottom: 0.6rem;

        }
        span {
          font-size: 0.65rem;
        }
      }
    }

    .topPlaceholder {
      background: #fff;
      padding: 0.25rem 0;
      text-align: center;
      font-size: 1rem;
      .topPlaceholderInner {
        display: inline-block;
        position: relative;
        &:before, &:after {
          content: '';
          position: absolute;
          width: 1.2rem;
          height: 0;
          border-top: 1px solid #333;
          top: 0.7rem;
        }
        &:before {
          left: -1.5rem;
        }
        &:after {
          right: -1.5rem;
        }
      }
    }

    .goodsList {
      .goodsListLi {
        display: flex;
        @include bb;
        padding: .7rem .4rem .4rem;
        background: #fff;
        .listLeft {
          position: relative;
          .brand {
            position: absolute;
            background: #FFA627;
            color: #fff;
            top: 0;
            font-size: 0.6rem;
          }
        }
        .foodsImg {
          width: 4.3rem;
          height: 3.2rem;
          display: block;
          border: 1px solid #e6e6e6;
          margin-right: .4rem;
        }
        .foodsRight {
          flex: auto;
          overflow: hidden;
          .title {
            font-weight: 500;
            font-size: .8rem;
          }
          .order, .price {
            display: flex;
            font-size: 0.6rem;
            justify-content: space-between;
            margin-top: 0.15rem;
            .orderLeft {
              span {
                color: #666;
              }
            }
            .orderRight {
              color: #666;
            }
            span {
              color: #666;
            }
          }
          .price {
            .delivery {
              position: relative;
              background-color: #FFD161;
              padding: 0 0.15rem;
              &:before, &:after {
                content: '';
                position: absolute;
                border: 2px solid #fff;
                width: 0;
                height: 0;
                font-size: 0;
              }
              &:before {
                left: 0;
                top: 0;
                border-color: #fff #FFD161 #FFD161 #fff;
              }
              &:after {
                right: 0;
                bottom: 0;
                border-color: #FFD161 #fff #fff #FFD161;
              }
            }
          }
          .coupon {
            .img {
              width: .75rem;
              height: .75rem;
              vertical-align: middle;
            }
            .txt {
              color: #666;
              font-size: 0.6rem;
            }
          }

        }
      }

    }

    .footBar {
      position: fixed;
      bottom:0;
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 2.45rem;
      border-top: 1px solid #b6b6b6;
      background-color: rgba(246,246,246,0.95);
      text-align: center;
      z-index: 1100;
      .footBarBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding:.2rem 0;
        font-size: .6rem;
        i {
          display: block;
          width: 1.25rem;
          height: 1.25rem;
          background: url(//xs01.meituan.net/waimai_i/img/sprite/tab-icons.949e08ab.png) no-repeat;
          background-size: 1.25rem auto;
        }
        .icoBowlFill {
          background-position: 0 -2.5rem;
        }
        .icoPaper {
          background-position: 0 -1.25rem;
        }
        .icoUser {
          background-position: 0 -6.25rem;
        }
        .footBarBtnTxt {
          color: #999;
        }
      }
      .footBarBtn.router-link-active {
        .footBarBtnTxtFirst {
          color: #333;
        }
      }
    }
  }

</style>
