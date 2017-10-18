<template>
  <div id="shop">
    <head-top :head-title="shop.name"></head-top>
    <!--tab-->
    <div class="menuTabs">
      <span :class="{activeClass: tabsSwitch == 'food'}" @click="tabsSwitch = 'food'">点菜</span>
      <span :class="{activeClass: tabsSwitch == 'evaluate'}" @click="tabsSwitch = 'evaluate'">评价</span>
      <span :class="{activeClass: tabsSwitch == 'seller'}" @click="tabsSwitch = 'seller'">商家</span>
    </div>
    <!--点菜页面-->
    <div v-if="tabsSwitch == 'food'">
      <div class="menu">
        <div>
          <ul class="list">
            <li @click="chooseMenu(index)" :class="{selected : activesIndex == index}" v-for="(item,index) in foodsTags" :key="item.id">
              <div>
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="foods">
          <div v-for="item in foodsTags" :key="item.id">
            <h3 class="foodsTitle ellipsis">{{item.name}}</h3>
            <ul>
              <li v-for="dishes in item.spus" :key="dishes.id">
                <div class="item">
                  <div>
                    <img class="foodsImg" :src="dishes.picture">
                  </div>
                  <div class="name">
                    <p class="title ellipsis">{{dishes.name}}</p>
                    <p class="desc">{{dishes.description}}</p>
                    <p class="sales">月售&nbsp;{{dishes.monthSaled}}</p>
                    <div class="content clearFix">
                      <span class="left price">¥{{dishes.price}}</span>
                      <!--<cartControl :foods="dishes" @addBuyCart="addBuyCart"></cartControl>-->
                      <div class="cartControl right">
                        <span class="right quantity">
                          <i class="sub" v-show="dishes.productQuantity > 0" @click="reduceCart(dishes,dishes.id,dishes.picture,dishes.name,dishes.price)"></i>
                          <i class="amount" v-show="dishes.productQuantity > 0">{{dishes.productQuantity}}</i>
                          <i class="add" @click="addCart(dishes)"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="cart">
          <div class="tip left">
            <div class="icon">
              <div class="img"></div>
              <div class="num">{{orderPageObj.amount}}</div>
            </div>
            <div class="txt">
              <p class="sum">￥{{orderPageObj.totalMoney}}</p>
              <p class="postage">{{shop.shippingFeeTip}}</p>
            </div>
          </div>
          <div class="btn right">
            <router-link :to="{path:'/confirmOrder/'+ shop.id}">去结算</router-link>
          </div>
        </div>
      </div>

    </div>
    <!--评价-->
    <div v-if="tabsSwitch == 'evaluate'">
      <div id="wrap">
        <div class="info">
          <div class="leftCell">
            <div class="infoData">
              <span class="receive">4.7</span>
            </div>
            <div class="desc">商家评价</div>
          </div>
          <div class="middleCell">
            <div class="stars">
              <div class="desc">口味</div>
              <star :score="shop.wmPoiScore"></star>
              <div class="receive">{{shop.wmPoiScore}}</div>
            </div>
            <div class="stars">
              <div class="desc">包装</div>
              <star :score="4.8"></star>
              <div class="receive">4.8</div>
            </div>
          </div>
          <div class="cell">
            <div class="dvy">4.6</div>
            <div class="desc">配送评分</div>
          </div>
        </div>
        <div class="cmtTypes">
          <span class="selected">全部 (4446)</span>
          <span>有图评价 (39)</span>
          <span>好评 (4233)</span>
          <span class="negative">差评 (142)</span>
          <span>好吃 (19)</span>
          <span>满意 (12)</span>
          <span>服务好 (9)</span>
          <span class="negative">少送错送 (8)</span>
          <span>工作餐 (4)</span>
        </div>
        <div class="field">
          <ul class="list">
            <li class="item clearFix">
              <div class="sub">
                <div class="subLeft">
                  <img class="img" src="//xs01.meituan.net/waimai_i/img/default-avatar.c4e0230d.png">
                </div>
                <div class="subRight">
                  <div class="sub clearFix">
                    <span class="name">匿名用户</span>
                    <span class="evaluateTime">2017.09.30</span>
                  </div>
                  <star :score="5"></star>
                  <p class="comment clearFix"> 汉堡味道好，送货特别快#巨无霸##原味板烧鸡腿堡##麦香鱼#好吃</p>
                  <div class="bottom clearFix">
                    <div class="favorIcon"></div>
                    <span class="favorText">巨无霸,原味板烧鸡腿堡,麦香鱼</span>
                  </div>
                  <div class="bottom clearFix">
                    <div class="icon"></div>
                    <span class="text">整洁卫生 ,</span>
                    <span class="text">送货快 ,</span>
                    <span class="text">准时送达 ,</span>
                    <span class="text">骑手服务好 ,</span>
                    <span class="text">货品保存完好 ,</span>
                    <span class="text">送货上门 </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--商家-->
    <div v-if="tabsSwitch == 'seller'">
      <div id="detailWrap">
        <div class="detail">
          <div class="content">
            <div class="phone">
              <i class="ico"></i>
              <p> 4000517117 </p>
            </div>
            <div class="address">
              <i class="ico"></i>
              <span class="txt">商家地址：</span>
              <p>北京市海淀区大柳树路2号家属区北区11号楼</p>
            </div>
          </div>
        </div>
        <div class="detail">
          <div class="content">
            <div class="time">
              <i class="ico"></i>
              <span class="txt">配送时间：</span>
              <p>00:00-04:45,05:15-10:15,10:30-23:59</p>
            </div>
            <div class="service">
              <i class="ico"></i>
              <span class="txt">配送服务：</span>
              <p>由 商家 提供配送服务</p>
            </div>
          </div>
        </div>
        <div class="detail">
          <div class="favor">
            <div class="discount">
              <i class="icon">
                <img class="img" src="http://p1.meituan.net/xianfu/32200c3060be7903f62c9076308619ee734.png">
              </i>
              <p class="payment">该商家支持在线支付</p>
            </div>
          </div>
        </div>
        <div class="qualification">
          <div class="txt">查看餐厅营业资质</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import headTop from '../../components/head/HeadTop.vue'
//  import cartControl from '../../components/common/CartControl.vue'
import { foods, shopDetailData } from '../../assets/js/utils/getData'
import star from '../../components/common/Star.vue'
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
import getters from "../../store/getters";
import { setStore, getStore } from '../../assets/js/utils/localstorage'

export default {
    data() {
        return {
            shop: '',  //当前商家
            tabsSwitch: 'food',  //tab切换
            foodsTags: {},
            activesIndex: 0, //当前选中的食物系列索引值
            // amount: 0,  //当前食品的数量
            // totalMoneyAll: 0, //总金额
        }
    },
    computed: {
        ...mapState([
            'cartList'
        ]),
        /**
         * 监听cartList变化，更新当前商铺的购物车信息shopCart，同时返回一个新的对象
         */
        orderPageObj() {
            let amount = 0, totalMoney = 0;
            let cartList = this.getCart();
            if (cartList.length) {
                let currentShopObj = cartList.find((shop, index) => {
                    return shop.shodId === shop.id;
                });
                for (let food of currentShopObj.foodList) {
                    amount += food.number;
                    totalMoney += food.totalPrice;
                }
                ;
                return {amount, totalMoney};
            } else {
                return {amount: 0, totalMoney: 0};
            }
            ;
        }
    },
    components: {
        headTop, star
    },
    mounted() {
        shopDetailData(this.$route.params.shopId).then(res => {
            this.shop = res.data;
        })
        foods().then(res => {
            this.foodsTags = res.data.data.foodSpuTags;
            let selectedFoodList = this.getCart();
            let currentShopObj = selectedFoodList.find((shop, index) => {
                return shop.shodId === shop.id;
            });
            currentShopObj.foodList.forEach(storeFood => {
                this.foodsTags[this.activesIndex].spus.forEach((food, index) => {
                    if (storeFood.foodId === food.id) {
                        food.productQuantity = storeFood.number;
                    }
                    ;
                });
            });

        })
    },
    methods: {
        ...mapMutations([
            'ADDTOCART', 'REDUCETOCART', 'INITBUYCART',
        ]),
        ...mapGetters([
            'getCart'
        ]),
        ...mapActions({
            handleCalculateCart: 'checkShopExisted',
        }),
        chooseMenu(index) {
            this.activesIndex = index;
        },
        addCart(dishes) {
            this.handleCalculateCart({shopId: this.shop.id, foodObj: dishes, flag: 'add'});
            dishes.productQuantity++;
        },
        reduceCart(dishes) {
            this.handleCalculateCart({shopId: this.shop.id, foodObj: dishes, flag: 'sub'});
            dishes.productQuantity--;
        },
        //      总金额
        totalMoney() {
            this.totalMoneyAll = 0;
            this.foodsTags.forEach((item, index) => {
                item.spus.forEach((foodsTag, index) => {
                    this.totalMoneyAll += foodsTag.price * foodsTag.productQuantity;
                })

            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

#shop {
  .headTop {
    position: inherit;
  }
  .menuTabs {
    display: flex;
    justify-content: space-around;
    height: 2.2rem;
    line-height: 2.2rem;
    background: #fff;
    margin-bottom: .5rem;
    @include bb;
    span {
      font-size: .8rem;
      padding: 0 .4rem;
    }
    .activeClass {
      border-bottom: .1rem solid #ffd161;
    }
  }
  .menu {
    display: flex;
    .list {
      width: 4rem;
      height: 26rem;
      overflow-y: scroll;
      li {
        position: relative;
        border-bottom: .025rem solid #bfbfbf;
        width: 100%;
        div {
          margin: 0rem .3rem;
          height: 3rem;
          span {
            width: 100%;
            @include ct;
            font-size: .7rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-box-pack: center;
            overflow: hidden;
          }
        }
      }
      .selected {
        background: #fff;
        border-bottom: none;
      }
    }
    .foods {
      flex-grow: 1;
      height: 26rem;
      overflow-y: scroll;
      background: #fff;
      .foodsTitle {
        height: 1.8rem;
        line-height: 1.8rem;
        padding-left: .75rem;
        position: relative;
        font-size: .6rem;
        &:before {
          content: '';
          position: absolute;
          @include ct;
          width: .1rem;
          height: .5rem;
          left: .5rem;
          background: #ffd161;
        }
      }
      li {
        @include bb;
        padding: .75rem 0 .5rem;
        margin: 0 .5rem;
        &:last-child {
          border-bottom: none;
        }
        .item {
          display: -webkit-box;
          overflow: hidden;
          .foodsImg {
            width: 3rem;
            height: 3rem;
          }
          .name {
            flex-grow: 1;
            padding-left: .5rem;
            .title {
              font-size: .8rem;
            }
            .desc {
              margin-top: .25rem;
              font-size: .6rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
            }
            .sales {
              margin-top: .25rem;
              font-size: .6rem;
              color: #999;
            }
            .content {
              .price {
                margin-top: .15rem;
                color: red;
              }
              .cartControl {
                display: inline-block;
                .quantity {
                  display: flex;
                  align-items: center;
                  .sub {
                    width: 1.25rem;
                    height: 1.25rem;
                    background-image: url(//xs01.meituan.net/waimai_i/img/sprite/tiny-icon.db95320f.png);
                    background-position: -.75rem -1.4rem;
                    background-size: 7.5rem 17.5rem;
                  }
                  .amount {
                    padding: 0 .25rem;
                  }
                  .add {
                    width: 1.25rem;
                    height: 1.25rem;
                    background: url(//xs01.meituan.net/waimai_i/img/add-food.4a0b4c25.png) no-repeat center;
                    background-size: 1.25rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .wrap {
    position: fixed;
    .cart {
      border-top: 1px solid #ccc;
      .tip {
        width: 13.25rem;
        height: 2.5rem;
        background-color: rgba(51, 51, 51, 0.9);
        .icon {
          position: relative;
          .img {
            position: absolute;
            width: 2.5rem;
            height: 2.8rem;
            background: url(//xs01.meituan.net/waimai_i/img/cart.ab827c23.png) no-repeat;
            background-size: 2.5rem auto;
            background-position: 0 -5.7rem;
            top: -1rem;
            left: .6rem;
          }
          .num {
            position: absolute;
            border-radius: 50% 50%;
            background-color: #FB4E44;
            width: .8rem;
            height: .8rem;
            line-height: .8rem;
            font-size: .6rem;
            text-align: center;
            top: -.9rem;
            left: 2.3rem;
            color: #fff;
            border: 1px solid #fff;
          }
        }
        .txt {
          display: -webkit-box;
          padding-left: 3.75rem;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          .sum {
            font-size: 1rem;
            color: #fff;
          }
          .postage {
            font-size: .6rem;
            color: #999;
          }
        }
      }
      .btn {
        width: 5.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: .8rem;
        text-align: center;
        background-color: #FFD161;
      }
    }
  }
  /*评价*/
  #wrap {
    .info {
      height: 4rem;
      border-bottom: 1px solid #d5d5d5;
      background-color: #FFF;
      margin-top: .5rem;
      overflow: hidden;
      .leftCell {
        float: left;
        width: 26%;
        text-align: center;
        .infoData {
          line-height: 1.6rem;
          margin-top: .7rem;
          font-size: 1.15rem;
          .receive {
            font-size: 1.6rem;
            color: #FFB000;
          }
        }
        .desc {
          line-height: 1.1rem;
          font-size: .6rem;
          color: #656565;
        }
      }
      .middleCell {
        float: left;
        width: 45%;
        .stars:first-child {
          margin-top: .75rem;
          .desc {
            display: inline-block;
            vertical-align: middle;
          }
        }
        .stars {
          overflow: hidden;
          .desc {
            line-height: 1.1rem;
            font-size: .6rem;
            color: #656565;
            display: inline-block;
            vertical-align: middle;
          }
          .status {
            display: inline-block;
            height: .5rem;
            margin: 0 .25rem 0 .4rem;
            vertical-align: middle;
            .score {
              background: url(//xs01.meituan.net/waimai_i/img/sprite/newstars.ae33dbae.png) no-repeat;
              background-size: cover;
              width: .5rem;
              height: .5rem;
              float: left;
              margin-right: .2rem;
            }
            .scoreHalf {
              background-position: -.65rem 0;
            }
          }
          .receive {
            font-size: .75rem;
            display: inline-block;
            vertical-align: middle;
            color: #FFB000;
          }
        }
      }
      .cell {
        float: right;
        width: 28%;
        height: 4.25rem;
        margin-top: .85rem;
        text-align: center;
        border-left: 1px solid #D8D8D8;
        .dvy {
          font-size: 1.5rem;
          color: #999;
        }
        .desc {
          color: #999;
          font-size: .6rem;
        }
      }
    }
    .cmtTypes {
      padding: .75rem .7rem;
      background: #fff;
      margin-top: .5rem;
      margin-bottom: .5rem;
      color: #2f2f2f;
      span.selected {
        background: #FFF8E9;
        border-color: #FFB000;
        color: #FFB000;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        padding: 0 .7rem;
        height: 1.5rem;
        line-height: 1.5rem;
        margin: 0 .25rem .25rem 0;
        background: #FFF;
        font-size: .6rem;
        color: #656565;
        text-align: center;
        border-radius: .75rem;
        border: 1px solid #CCCCCC;
      }
      span.negative {
        background: #fff;
        color: #999;
        border: 1px solid #ccc;
      }
    }
    .field {
      background-color: #fff;
      box-flex: 1;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      ul,
      ol {
        padding-left: 0;
        list-style-type: none;
        .item {
          padding: .75rem .75rem .6rem .75rem;
          border-bottom: 1px solid #f0f0f0;
          .sub {
            line-height: .75rem;
            .subLeft {
              float: left;
              width: 15%;
              .img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
              }
            }
            .subRight {
              float: left;
              width: 85%;
              font-size: .6rem;
              .sub {
                line-height: .75rem;
                .name {
                  color: #2f2f2f;
                  font-size: .8rem;
                }
                .evaluateTime {
                  font-size: .6rem;
                  color: #898989;
                  float: right;
                }
              }
              .stars {
                margin-top: .3rem;
                .status {
                  margin: 0;
                  float: left;
                  margin-right: .1rem;
                  display: inline-block;
                  height: .5rem;
                  vertical-align: middle;
                  .score {
                    background: url(//xs01.meituan.net/waimai_i/img/sprite/newstars.ae33dbae.png) no-repeat;
                    background-size: cover;
                    width: .5rem;
                    height: .5rem;
                    float: left;
                    margin-right: .2rem;
                    background-position: 0 0;
                  }
                  .time {
                    color: #898989;
                    font-size: .6rem;
                    float: left;
                    line-height: .6rem;
                  }
                }
              }
              .comment {
                font-size: .7rem;
                margin-top: .5rem;
                margin-bottom: .3rem;
              }
              .bottom {
                margin: .2rem 0;
                font-size: .6rem;
                .favorIcon {
                  width: .55rem;
                  height: .55rem;
                  margin-right: .5rem;
                  background: url(//xs01.meituan.net/waimai_i/img/sprite/favor.bb7dca4b.png) no-repeat;
                  background-size: contain;
                  display: inline-block;
                  vertical-align: middle;
                }
                .favorText {
                  color: #576B95;
                }
                .icon {
                  width: .55rem;
                  height: .55rem;
                  margin-right: .5rem;
                  background: url(//xs01.meituan.net/waimai_i/img/sprite/tag.abccfd64.png) no-repeat;
                  background-size: contain;
                  display: inline-block;
                  vertical-align: middle;
                }
                .text {
                  color: #898989;
                }
              }
            }
          }
        }
      }
    }
  }
  /*商家*/
  #detailWrap {
    .detail {
      margin-top: .5rem;
      color: #2f2f2f;
      background: #fff;
      font-size: .7rem;
      .content {
        padding-left: .75rem;
        .phone {
          position: relative;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: -1px;
          .ico {
            background: url(../../assets/img/phone.png) no-repeat;
            float: left;
            width: .75rem;
            height: .8rem;
            margin-top: 1px;
            background-size: .75rem auto;
          }
          p {
            margin-left: 1.35rem;
          }
        }
        .address {
          .txt {
            float: left;
            margin-left: .6rem;
          }
          .ico {
            height: .8rem;
            background: url(../../assets/img/location.png) no-repeat;
            float: left;
            width: .75rem;
            height: .8rem;
            margin-top: 1px;
            background-size: .75rem auto;
          }
        }
        .time {
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: -1px;
          .ico {
            background: url(../../assets/img/time.png) no-repeat;
            float: left;
            width: .75rem;
            height: .8rem;
            margin-top: 1px;
            background-size: .75rem auto;
          }
          .txt {
            float: left;
            margin-left: .6rem;
          }
        }
        .service {
          .ico {
            background: url(../../assets/img/service.png) no-repeat;
            float: left;
            width: .75rem;
            height: .8rem;
            margin-top: 1px;
            background-size: .75rem auto;
          }
          .txt {
            float: left;
            margin-left: .6rem;
          }
        }
      }
      .phone,
      .address,
      .time,
      .service {
        padding: .75rem 0;
      }
      .address p,
      .time p,
      .service p {
        margin-left: 4.8rem;
        padding-right: .75rem;
        line-height: 1rem;
      }
      .favor {
        line-height: 1.15rem;
        padding: .45rem .75rem;
        .discount {
          padding: .3rem 0;
          .icon {
            float: left;
            width: .85rem;
            height: .85rem;
            margin-top: .15rem;
            img {
              width: .85rem;
              height: .85rem;
            }
          }
          .payment {
            margin-left: 1.35rem;
          }
        }
      }
    }
    .qualification {
      margin-top: 1rem;
      height: 2.2rem;
      background-color: #ffffff;
      border-top: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      padding: 0 .5rem;
      .txt {
        font-size: .7rem;
        line-height: 2.2rem;
        background: url(//xs01.meituan.net/waimai_i/img/icons/qualification-right.ce3a34b3.png) no-repeat;
        background-size: .4rem .75rem;
        background-position: right;
      }
    }
  }
}
</style>
